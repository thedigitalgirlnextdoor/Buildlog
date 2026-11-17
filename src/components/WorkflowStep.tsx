import { LucideIcon, ArrowRight, ArrowDown } from 'lucide-react';

interface WorkflowStepProps {
  stepNumber: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isActive: boolean;
  isLast: boolean;
  onSelect: () => void;
}

export function WorkflowStep({
  stepNumber,
  icon: Icon,
  title,
  description,
  isActive,
  isLast,
  onSelect,
}: WorkflowStepProps) {
  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-0 flex-1">
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={isActive}
        className={`group w-full flex md:flex-col items-center md:text-center gap-4 md:gap-2.5 rounded-2xl p-3 md:p-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D46] ${
          isActive ? 'bg-white/85 shadow-card border border-[#84CC16]/60' : 'hover:bg-white/55 border border-transparent'
        }`}
      >
        <div className="relative flex flex-col items-center shrink-0">
          <div
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
              isActive
                ? 'bg-[#84CC16]/25 border-[#84CC16] text-[#0B3D46]'
                : 'bg-[#DCEFD2] border-[#BCE0A7] text-[#3F6212] group-hover:bg-[#84CC16]/25'
            }`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <span
            className={`mt-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold tabular-nums transition-colors ${
              isActive
                ? 'bg-[#0B3D46] text-white'
                : 'bg-[#0B3D46]/85 text-white group-hover:bg-[#0B3D46]'
            }`}
          >
            {stepNumber}
          </span>
        </div>

        <div className="text-left md:text-center min-w-0">
          <h3 className="font-display text-sm font-bold text-[#0B3D46]">{title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-[#475569]">{description}</p>
        </div>
      </button>

      {!isLast && (
        <>
          {/* Horizontal arrow on tablet/desktop */}
          <div
            className="hidden md:flex items-center justify-center pt-5 px-0.5 text-[#64748B] shrink-0"
            aria-hidden="true"
          >
            <ArrowRight className="h-4 w-4" />
          </div>
          {/* Vertical arrow on mobile */}
          <div
            className="flex md:hidden items-center justify-center py-0.5 text-[#64748B]"
            aria-hidden="true"
          >
            <ArrowDown className="h-4 w-4" />
          </div>
        </>
      )}
    </div>
  );
}
