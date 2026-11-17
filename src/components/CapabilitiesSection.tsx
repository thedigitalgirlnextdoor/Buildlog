import { Target, Layers, Sparkles, Send, BarChart2, Users } from 'lucide-react';
import { CapabilityCard } from './CapabilityCard';

const CAPABILITIES = [
  {
    icon: Target,
    title: 'Get Clarity',
    description: 'Define your brand and direction.',
    accent: 'green' as const,
  },
  {
    icon: Layers,
    title: 'Plan',
    description: 'Build a simple, focused strategy.',
    accent: 'teal' as const,
  },
  {
    icon: Sparkles,
    title: 'Create',
    description: 'Turn your ideas into great content with AI.',
    accent: 'green' as const,
  },
  {
    icon: Send,
    title: 'Distribute',
    description: 'Share across the right platforms.',
    accent: 'teal' as const,
  },
  {
    icon: BarChart2,
    title: 'Track & Grow',
    description: "See what's working and improve.",
    accent: 'green' as const,
  },
  {
    icon: Users,
    title: 'Collaborate',
    description: 'Work with your team or a strategist.',
    accent: 'teal' as const,
  },
];

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="bg-[#FAFAF7] py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="capabilities-heading"
          className="text-center font-display text-2xl sm:text-3xl lg:text-[2.1rem] font-bold tracking-tight text-[#0B3D46] text-balance"
        >
          Everything you need to build, create and grow.
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-5">
          {CAPABILITIES.map((cap) => (
            <CapabilityCard
              key={cap.title}
              icon={cap.icon}
              title={cap.title}
              description={cap.description}
              accent={cap.accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
