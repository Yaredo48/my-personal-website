import Image from 'next/image';
import { technologyLogos } from '@/data/technology-logos';

export const TechnologyLogo = ({ name }: { name: string }) => {
  const logo = technologyLogos[name];

  if (!logo) {
    return (
      <div
        aria-label={`No official logo available for ${name}`}
        className="flex h-14 w-14 items-center justify-center text-center text-[0.625rem] font-medium leading-tight text-[var(--text-subtle)]"
        role="img"
      >
        No official logo
      </div>
    );
  }

  return (
    <Image
      src={logo}
      alt=""
      aria-hidden="true"
      width={64}
      height={64}
      className="h-14 w-14 object-contain"
      unoptimized
    />
  );
};
