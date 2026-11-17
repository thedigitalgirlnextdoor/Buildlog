import { BuildLogLogo } from './BuildLogLogo';
import { NewsletterForm } from './NewsletterForm';
import { ModalTopic, siteConfig } from '../config/siteConfig';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenModal: (topic: ModalTopic) => void;
}

export function Footer({ onNavigateSection, onOpenModal }: FooterProps) {
  const scrollLink = (target: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigateSection(target);
  };

  return (
    <footer className="bg-[#0B3D46] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-10 border-b border-white/15">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-3">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="BuildLog back to top"
              className="inline-block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#84CC16]"
            >
              <BuildLogLogo variant="light" size="md" />
            </a>
            <p className="mt-3 text-xs sm:text-sm text-white/80">{siteConfig.tagline}</p>
          </div>

          {/* Product */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Product
            </h3>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <a
                  href="#capabilities"
                  onClick={scrollLink('capabilities')}
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={scrollLink('how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              {siteConfig.showPricingSection && (
                <li>
                  <a
                    href="#pricing"
                    onClick={scrollLink('pricing')}
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              )}
              <li>
                <a
                  href="#philosophy"
                  onClick={scrollLink('philosophy')}
                  className="hover:text-white transition-colors"
                >
                  What&apos;s New
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Solutions
            </h3>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <a
                  href="#who-its-for"
                  onClick={scrollLink('who-its-for')}
                  className="hover:text-white transition-colors"
                >
                  Creators
                </a>
              </li>
              <li>
                <a
                  href="#who-its-for"
                  onClick={scrollLink('who-its-for')}
                  className="hover:text-white transition-colors"
                >
                  Professionals
                </a>
              </li>
              <li>
                <a
                  href="#who-its-for"
                  onClick={scrollLink('who-its-for')}
                  className="hover:text-white transition-colors"
                >
                  Business Owners
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Company */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('demo')}
                  className="hover:text-white transition-colors text-left"
                >
                  Guides
                </button>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={scrollLink('how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  Workflow
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Help Centre
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-3">
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>&copy; 2026 BuildLog. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => onOpenModal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenModal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms
            </button>
            <button
              type="button"
              onClick={() => onOpenModal('cookies')}
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
