import { Users, Briefcase, Store, Headphones } from 'lucide-react';
import { AudienceCard } from './AudienceCard';
import creatorsImg from '../assets/images/regenerated_image_1794909381804.jpg';
import professionalsImg from '../assets/images/regenerated_image_1794909388406.jpg';
import businessImg from '../assets/images/regenerated_image_1794909391752.jpg';
import sideHustlersImg from '../assets/images/regenerated_image_1794909404278.jpg';

const AUDIENCES = [
  {
    title: 'Creators',
    description: 'Grow your personal brand and community.',
    imageSrc: creatorsImg,
    imageAlt: 'Creator writing content ideas in a notebook beside her laptop in a studio',
    icon: Users,
  },
  {
    title: 'Professionals',
    description: 'Build visibility, credibility and opportunities.',
    imageSrc: professionalsImg,
    imageAlt: 'Professional working intently on his laptop in a bright office workspace',
    icon: Briefcase,
  },
  {
    title: 'Business Owners',
    description: 'Promote your products and grow across platforms.',
    imageSrc: businessImg,
    imageAlt: 'Small business owner managing orders and calls at her laptop in a workshop',
    icon: Store,
  },
  {
    title: 'Side Hustlers',
    description: 'Turn your ideas into a visible, growing brand.',
    imageSrc: sideHustlersImg,
    imageAlt: 'Side project builder working at a desk with a laptop, microphone and notebook',
    icon: Headphones,
  },
];

export function AudienceSection() {
  return (
    <section
      id="who-its-for"
      aria-labelledby="audience-heading"
      className="bg-[#FAFAF7] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="audience-heading"
            className="font-display text-2xl sm:text-3xl lg:text-[2.15rem] font-bold tracking-tight text-[#0B3D46] text-balance"
          >
            Built for people who are building something.
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#475569]">
            Whether it&apos;s your personal brand, a business, a creative project or a new idea —
            BuildLog helps you show up, stay consistent and grow.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AUDIENCES.map((item) => (
            <AudienceCard
              key={item.title}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
