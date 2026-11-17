import { ReactNode } from 'react';

interface FloatingInfoCardProps {
  className?: string;
  children: ReactNode;
  label: string;
}

export function FloatingInfoCard({ className = '', children, label }: FloatingInfoCardProps) {
  return (
    <div
      aria-label={label}
      className={`rounded-2xl bg-white/96 backdrop-blur-xs border border-[#E5E7EB] p-3.5 shadow-float ${className}`}
    >
      {children}
    </div>
  );
}
