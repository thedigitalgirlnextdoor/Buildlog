import { Star, Zap, Users } from 'lucide-react';
import { PricingCard } from './PricingCard';
import { ModalTopic, siteConfig } from '../config/siteConfig';

interface PricingSectionProps {
  onOpenModal: (topic: ModalTopic) => void;
}

const PLANNED_TIERS = [
  {
    icon: Star,
    name: 'Starter',
    subtitle: 'For getting clarity and taking your first steps.',
    statusLabel: 'Pricing to be announced',
    focusPoints: [
      'Guided brand setup and direction',
      'Weekly build focus and content prompts',
      'Simple step-by-step progress view',
    ],
    ctaLabel: 'Join Early Access',
    featured: true,
  },
  {
    icon: Zap,
    name: 'Creator & Brand',
    subtitle: 'For consistent multi-platform growth.',
    statusLabel: 'Pricing to be announced',
    focusPoints: [
      'Custom content strategy planning',
      'AI-assisted content drafting from your context',
      'Multi-platform adaptation workflows',
    ],
    ctaLabel: 'Get Launch Updates',
    featured: false,
  },
  {
    icon: Users,
    name: 'Team & Collaborators',
    subtitle: 'For working with a strategist or team.',
    statusLabel: 'Pricing to be announced',
    focusPoints: [
      'Shared brand workspace collaboration',
      'Content review and strategist feedback',
      'Coordinated publishing workflows',
    ],
    ctaLabel: 'Register Interest',
    featured: false,
  },
];

export function PricingSection({ onOpenModal }: PricingSectionProps) {
  if (!siteConfig.showPricingSection) {
    return null;
  }

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-[#FAFAF7] py-16 sm:py-20 lg:py-22"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8 lg:gap-10">
          {/* Left Intro Column */}
          <div className="lg:col-span-4 max-w-md">
            <p className="inline-block rounded-lg bg-[#84CC16]/25 px-3 py-1 text-xs font-semibold text-[#0B3D46]">
              Plans Coming Soon
            </p>
            <h2
              id="pricing-heading"
              className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0B3D46] text-balance"
            >
              Plans built for every stage of your journey.
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#475569]">
              Pricing and plan details are currently being finalised ahead of launch. Register for
              updates to hear first when BuildLog opens.
            </p>
          </div>

          {/* Right 3-Card Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLANNED_TIERS.map((tier) => (
              <PricingCard
                key={tier.name}
                icon={tier.icon}
                name={tier.name}
                subtitle={tier.subtitle}
                statusLabel={tier.statusLabel}
                focusPoints={tier.focusPoints}
                ctaLabel={tier.ctaLabel}
                featured={tier.featured}
                onSelect={() => onOpenModal('early-access')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
