import { useEffect, useRef } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { BuildLogLogo } from './BuildLogLogo';
import { ModalTopic, siteConfig } from '../config/siteConfig';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenModal: (topic: ModalTopic) => void;
}

const MOBILE_NAV_SECTIONS = [
  {
    group: 'Product',
    items: [
      { label: 'Core Capabilities', target: 'capabilities' },
      { label: 'How BuildLog Works', target: 'how-it-works' },
      { label: 'Our Philosophy', target: 'philosophy' },
    ],
  },
  {
    group: 'Solutions',
    items: [
      { label: 'Creators', target: 'who-its-for' },
      { label: 'Professionals', target: 'who-its-for' },
      { label: 'Business Owners', target: 'who-its-for' },
      { label: 'Side Hustlers', target: 'who-its-for' },
    ],
  },
  {
    group: 'Resources',
    items: [
      { label: 'Brand Building Steps', target: 'how-it-works' },
      { label: 'Launch Updates', target: 'newsletter' },
    ],
  },
];

export function MobileNavigation({
  isOpen,
  onClose,
  onNavigateSection,
  onOpenModal,
}: MobileNavigationProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLinkClick = (target: string) => {
    onClose();
    onNavigateSection(target);
  };

  return (
    <div
      id="mobile-navigation-drawer"
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div
        className="fixed inset-0 bg-[#0B3D46]/45 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col bg-[#FAFAF7] shadow-float border-l border-[#CBD5E1] overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E7EB]">
          <BuildLogLogo variant="dark" size="sm" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-[#0B3D46] hover:bg-[#E5E7EB]/60 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D46]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 px-5 py-5 space-y-6">
          {MOBILE_NAV_SECTIONS.map((section) => (
            <div key={section.group}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
                {section.group}
              </p>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={`${section.group}-${item.label}`}>
                    <a
                      href={`#${item.target}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.target);
                      }}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-[#111827] hover:bg-white hover:text-[#0B3D46] transition-colors min-h-[44px]"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4 text-[#64748B]" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {siteConfig.showPricingSection && (
            <div className="pt-2 border-t border-[#E5E7EB]">
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('pricing');
                }}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-[#0B3D46] hover:bg-white transition-colors min-h-[44px]"
              >
                <span>Pricing</span>
                <ChevronRight className="h-4 w-4 text-[#64748B]" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>

        <div className="border-t border-[#E5E7EB] bg-white p-5 space-y-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              if (siteConfig.loginUrl) {
                window.location.href = siteConfig.loginUrl;
              } else {
                onOpenModal('login');
              }
            }}
            className="w-full min-h-[44px] rounded-xl border border-[#CBD5E1] bg-white px-4 py-2.5 text-sm font-semibold text-[#111827] hover:bg-[#FAFAF7] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D46]"
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              if (siteConfig.getStartedUrl) {
                window.location.href = siteConfig.getStartedUrl;
              } else {
                onOpenModal('get-started');
              }
            }}
            className="w-full min-h-[44px] rounded-xl bg-[#0B3D46] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#082F36] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D46]"
          >
            Get Started Free
          </button>
        </div>
      </nav>
    </div>
  );
}
