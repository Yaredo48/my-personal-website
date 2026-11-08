'use client';
import { useEffect, useRef } from 'react';

type BackgroundVideoProps = {
  src: string;
  className?: string;
};

export function BackgroundVideo({ src, className = '' }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}
