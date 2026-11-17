import { LucideIcon } from 'lucide-react';

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: 'green' | 'teal';
}

export function CapabilityCard({
  icon: Icon,
  title,
  description,
  accent = 'green',
}: CapabilityCardProps) {
  const iconColor = accent === 'green' ? 'text-[#65A30D]' : 'text-[#0E7490]';
  const iconBg = accent === 'green' ? 'bg-[#EEF7DF]' : 'bg-[#E6F3F6]';

  return (
    <article className="group flex flex-col items-center text-center rounded-2xl bg-white border border-[#E5E7EB] p-6 shadow-card hover:border-[#0E7490]/35 hover:-translate-y-0.5 transition-all duration-150">
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} ${iconColor} mb-4`}
      >
        <Icon className="h-6 w-6 stroke-[2]" aria-hidden="true" />
      </div>
      <h3 className="font-display text-base font-bold text-[#0B3D46]">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">{description}</p>
    </article>
  );
}
