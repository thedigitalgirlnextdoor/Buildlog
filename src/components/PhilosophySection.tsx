import { Compass, CalendarCheck, TrendingUp, Layers } from 'lucide-react';

const PILLARS = [
  {
    icon: Compass,
    title: 'Clarity',
    detail: 'Know what your brand stands for and who you are speaking to.',
    progressLabel: 'Illustrative foundation',
    progressPercent: '100%',
  },
  {
    icon: CalendarCheck,
    title: 'Consistency',
    detail: 'Turn everyday work into a repeatable weekly rhythm.',
    progressLabel: 'Illustrative rhythm',
    progressPercent: '75%',
  },
  {
    icon: TrendingUp,
    title: 'Intentional Growth',
    detail: 'Learn what connects with your audience and take clear next steps.',
    progressLabel: 'Illustrative momentum',
    progressPercent: '85%',
  },
];

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="bg-[#0B3D46] py-14 sm:py-16 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">
          {/* Left Philosophy Statement */}
          <div className="lg:col-span-5 lg:pr-6 lg:border-r lg:border-white/15">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#84CC16] mb-3">
              <Layers className="h-4 w-4" aria-hidden="true" />
              <span>Why BuildLog</span>
            </div>
            <h2
              id="philosophy-heading"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance"
            >
              A better way to build your brand.
            </h2>
            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-white/85">
              Building a brand shouldn&apos;t feel like guesswork or an endless chore. BuildLog
              replaces blank-page stress with clarity, steady weekly consistency and intentional
              growth — step by step, whether you&apos;re launching a product shop or sharing your
              own expertise.
            </p>
          </div>

          {/* Right 3 Illustrative Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PILLARS.map(({ icon: Icon, title, detail, progressLabel, progressPercent }) => (
              <div
                key={title}
                className="flex flex-col justify-between rounded-2xl bg-white/10 border border-white/15 p-5"
              >
                <div>
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#84CC16]/20 text-[#84CC16]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-white">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/80">{detail}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-[11px] text-white/70">
                    <span>{progressLabel}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-white/15 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#84CC16]"
                      style={{ width: progressPercent }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
