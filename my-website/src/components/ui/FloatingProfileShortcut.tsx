import { profile } from '@/data/profile';

export const FloatingProfileShortcut = () => (
  <a
    href={profile.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit my professional profile"
    className="floating-profile-shortcut"
  >
    <span className="floating-profile-orbit floating-profile-orbit-outer" aria-hidden="true" />
    <span className="floating-profile-orbit floating-profile-orbit-inner" aria-hidden="true" />
    <span className="floating-profile-core" aria-hidden="true" />
  </a>
);
