import { Check, LucideIcon } from 'lucide-react';

interface PricingCardProps {
  icon: LucideIcon;
  name: string;
  subtitle: string;
  statusLabel: string;
  focusPoints: string[];
  ctaLabel: string;
  featured?: boolean;
  onSelect: () => void;
}

export function PricingCard({
  icon: Icon,
  name,
  subtitle,
  statusLabel,
  focusPoints,
  ctaLabel,
  featured = false,
  onSelect,
}: PricingCardProps) {
  return (
    <article
      className={`flex flex-col justify-between rounded-2xl p-6 transition-all duration-150 ${
        featured
          ? 'bg-[#F3F9EB] border-2 border-[#84CC16] shadow-card'
          : 'bg-white border border-[#CBD5E1] shadow-card'
      }`}
    >
      <div>
        <div className="flex items-start gap-3">
          <span
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
              featured ? 'bg-[#84CC16]/25 text-[#3F6212]' : 'bg-[#EEF5F7] text-[#0E7490]'
            }`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold text-[#0B3D46] leading-tight">{name}</h3>
            <p className="mt-0.5 text-xs text-[#64748B]">{subtitle}</p>
          </div>
        </div>

        <div className="mt-5 pb-4 border-b border-[#E5E7EB]">
          <p className="font-display text-sm font-bold text-[#0B3D46]">{statusLabel}</p>
          <p className="mt-0.5 text-xs text-[#64748B]">Planned direction · subject to confirmation</p>
        </div>

        <ul className="mt-4 space-y-2.5">
          {focusPoints.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-[#111827]">
              <Check className="h-4 w-4 shrink-0 text-[#65A30D] mt-0.5" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={onSelect}
        className={`mt-6 w-full min-h-[44px] rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D46] ${
          featured
            ? 'bg-[#0B3D46] text-white hover:bg-[#082F36]'
            : 'border border-[#0B3D46]/35 bg-white text-[#0B3D46] hover:bg-[#FAFAF7]'
        }`}
      >
        {ctaLabel}
      </button>
    </article>
  );
}
