import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalize = (value: string | undefined) => (value ?? '').trim();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const hasSmtpConfig = () =>
  Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_TO
  );

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => ({}))) as ContactPayload;
    const name = normalize(body.name);
    const email = normalize(body.email);
    const subject = normalize(body.subject);
    const message = normalize(body.message);
    const honeypot = normalize(body.website);

    if (honeypot) {
      return NextResponse.json({ message: 'Submission rejected.' }, { status: 400 });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Please complete all required fields.' }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (message.length > 4000) {
      return NextResponse.json({ message: 'Message is too long. Please shorten it and try again.' }, { status: 400 });
    }

    if (!hasSmtpConfig()) {
      return NextResponse.json(
        {
          message:
            'The contact email service is not configured yet. Add SMTP credentials in your environment to enable message delivery.',
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Portfolio inquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <div>${escapeHtml(message).replace(/\n/g, '<br />')}</div>
        </div>
      `,
    });

    return NextResponse.json({
      message: 'Your message was sent successfully. I will get back to you soon.',
    });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return NextResponse.json(
      {
        message: 'Something went wrong while sending your message. Please try again in a few minutes.',
      },
      { status: 500 }
    );
  }
}
