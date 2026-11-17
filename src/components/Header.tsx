import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { BuildLogLogo } from './BuildLogLogo';
import { MobileNavigation } from './MobileNavigation';
import { ModalTopic, siteConfig } from '../config/siteConfig';

interface HeaderProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenModal: (topic: ModalTopic) => void;
}

interface DropdownItem {
  label: string;
  description: string;
  target: string;
}

const DROPDOWN_MENUS: Record<'Product' | 'Solutions' | 'Resources', DropdownItem[]> = {
  Product: [
    {
      label: 'Core Capabilities',
      description: 'Clarity, planning, AI creation and distribution',
      target: 'capabilities',
    },
    {
      label: 'How BuildLog Works',
      description: 'Five guided steps from setup to growth',
      target: 'how-it-works',
    },
    {
      label: 'Our Philosophy',
      description: 'Why structured brand building beats guesswork',
      target: 'philosophy',
    },
  ],
  Solutions: [
    {
      label: 'Creators',
      description: 'Grow your personal brand and community',
      target: 'who-its-for',
    },
    {
      label: 'Professionals',
      description: 'Build visibility, credibility and opportunities',
      target: 'who-its-for',
    },
    {
      label: 'Business Owners',
      description: 'Promote your products across platforms',
      target: 'who-its-for',
    },
    {
      label: 'Side Hustlers',
      description: 'Turn ideas into a visible, growing brand',
      target: 'who-its-for',
    },
  ],
  Resources: [
    {
      label: 'Guided Workflow',
      description: 'See how BuildLog structures your brand journey',
      target: 'how-it-works',
    },
    {
      label: 'Stay in the Loop',
      description: 'Brand-building tips and launch updates',
      target: 'newsletter',
    },
  ],
};

export function Header({ onNavigateSection, onOpenModal }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<'Product' | 'Solutions' | 'Resources' | null>(
    null,
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelectDropdownItem = (target: string) => {
    setOpenDropdown(null);
    onNavigateSection(target);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FAFAF7]/95 backdrop-blur-sm border-b border-[#E5E7EB]">
        <div
          ref={navRef}
          className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        >
          {/* Left: Brand Mark */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="BuildLog home"
            className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B3D46]"
          >
            <BuildLogLogo variant="dark" size="md" />
          </a>

          {/* Center/Right Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
            {(['Product', 'Solutions', 'Resources'] as const).map((menuKey) => {
              const isOpen = openDropdown === menuKey;
              return (
                <div key={menuKey} className="relative">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => setOpenDropdown(isOpen ? null : menuKey)}
                    className="inline-flex items-center gap-1 py-2 text-sm font-medium text-[#111827] hover:text-[#0E7490] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B3D46] rounded-md"
                  >
                    <span>{menuKey}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#64748B] transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-[#0B3D46]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      role="menu"
                      aria-label={`${menuKey} menu`}
                      className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-[#CBD5E1] bg-white p-2 shadow-float"
                    >
                      {DROPDOWN_MENUS[menuKey].map((item) => (
                        <a
                          key={item.label}
                          role="menuitem"
                          href={`#${item.target}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSelectDropdownItem(item.target);
                          }}
                          className="block rounded-xl px-3.5 py-2.5 hover:bg-[#FAFAF7] transition-colors focus-visible:outline-2 focus-visible:outline-[#0B3D46]"
                        >
                          <div className="text-sm font-semibold text-[#0B3D46]">{item.label}</div>
                          <div className="text-xs text-[#64748B] mt-0.5">{item.description}</div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {siteConfig.showPricingSection && (
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown(null);
                  onNavigateSection('pricing');
                }}
                className="py-2 text-sm font-medium text-[#111827] hover:text-[#0E7490] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B3D46] rounded-md"
              >
                Pricing
              </a>
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (siteConfig.loginUrl) {
                  window.location.href = siteConfig.loginUrl;
                } else {
                  onOpenModal('login');
                }
              }}
              className="hidden sm:inline-flex items-center justify-center rounded-xl border border-[#CBD5E1] bg-white px-4 py-2 text-sm font-medium text-[#111827] hover:border-[#0B3D46]/40 hover:bg-[#FAFAF7] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D46]"
            >
              Log in
            </button>

            <button
              type="button"
              onClick={() => {
                if (siteConfig.getStartedUrl) {
                  window.location.href = siteConfig.getStartedUrl;
                } else {
                  onOpenModal('get-started');
                }
              }}
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#0B3D46] px-5 py-2 text-sm font-semibold text-white hover:bg-[#082F36] active:scale-[0.99] transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D46]"
            >
              Get Started Free
            </button>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex lg:hidden h-11 w-11 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white text-[#0B3D46] hover:bg-[#F1F5F9] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D46]"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigateSection={onNavigateSection}
        onOpenModal={onOpenModal}
      />
    </>
  );
}
