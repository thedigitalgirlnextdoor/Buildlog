interface BuildLogLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

export function BuildLogLogo({ variant = 'dark', size = 'md' }: BuildLogLogoProps) {
  const iconSize = size === 'sm' ? 'h-7 w-7' : 'h-8 w-8';
  const textClass =
    size === 'sm' ? 'text-lg font-bold tracking-tight' : 'text-[22px] font-bold tracking-tight';
  const wordmarkColor = variant === 'light' ? 'text-white' : 'text-[#0B3D46]';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <svg
        className={iconSize}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Bottom stacked block: Deep Teal */}
        <path d="M18 32.5L4.5 25.2V19.6L18 26.9L31.5 19.6V25.2L18 32.5Z" fill={variant === 'light' ? '#135B68' : '#0B3D46'} />
        <path d="M18 26.9L4.5 19.6L18 12.3L31.5 19.6L18 26.9Z" fill={variant === 'light' ? '#197080' : '#11515D'} />
        {/* Middle stacked block: Ocean Blue */}
        <path d="M18 24.4L6.8 18.4V13.3L18 19.3L29.2 13.3V18.4L18 24.4Z" fill="#0E7490" />
        <path d="M18 19.3L6.8 13.3L18 7.3L29.2 13.3L18 19.3Z" fill="#178EAD" />
        {/* Top stacked block: Fresh Green */}
        <path d="M18 16.5L9.4 11.9V7.8L18 12.4L26.6 7.8V11.9L18 16.5Z" fill="#65A30D" />
        <path d="M18 12.4L9.4 7.8L18 3.2L26.6 7.8L18 12.4Z" fill="#84CC16" />
      </svg>
      <span className={`font-display leading-none ${textClass} ${wordmarkColor}`}>BuildLog</span>
    </span>
  );
}
