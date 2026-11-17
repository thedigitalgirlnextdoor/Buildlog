import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface AudienceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
}

export function AudienceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  icon: Icon,
}: AudienceCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl bg-white border border-[#E5E7EB] shadow-card hover:border-[#0E7490]/40 transition-all duration-150 flex flex-col">
      <div className="relative h-44 sm:h-40 w-full overflow-hidden bg-[#EAE6DC]">
        {!imgError ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0B3D46]/10 to-[#84CC16]/20">
            <Icon className="h-9 w-9 text-[#0B3D46]" aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="relative -mt-3 flex-1 rounded-t-2xl bg-white px-5 pt-4 pb-5">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 shrink-0 text-[#0E7490]" aria-hidden="true" />
          <h3 className="font-display text-base font-bold text-[#0B3D46]">{title}</h3>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">{description}</p>
      </div>
    </article>
  );
}
