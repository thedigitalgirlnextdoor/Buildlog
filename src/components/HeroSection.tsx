import { ArrowRight, PlayCircle, Lightbulb, Check, Layers, Sparkles } from 'lucide-react';
import heroWorkspaceImg from '../assets/images/regenerated_image_1794909379411.jpg';
import { FloatingInfoCard } from './FloatingInfoCard';
import { ModalTopic, siteConfig } from '../config/siteConfig';
import { useState } from 'react';

interface HeroSectionProps {
  onOpenModal: (topic: ModalTopic) => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#FAFAF7] pt-10 pb-14 sm:pt-14 sm:pb-18 lg:pt-16 lg:pb-22 border-b border-[#E5E7EB]/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-6 max-w-2xl">
            <p className="inline-block rounded-lg bg-[#84CC16]/25 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#0B3D46]">
              The Brand Building Workspace
            </p>

            <h1
              id="hero-heading"
              className="mt-5 font-display text-[2.25rem] leading-[1.12] sm:text-5xl lg:text-[3.35rem] font-extrabold tracking-tight text-[#0B3D46] text-balance"
            >
              Build your brand online,{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span>step by step.</span>
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#84CC16]"
                  viewBox="0 0 240 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5C68 2.5 162 2.5 237 7.5"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#475569] max-w-xl">
              An AI-powered workspace that helps you plan, create, distribute and grow your brand
              across platforms — without the guesswork.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => {
                  if (siteConfig.getStartedUrl) {
                    window.location.href = siteConfig.getStartedUrl;
                  } else {
                    onOpenModal('get-started');
                  }
                }}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#0B3D46] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-card hover:bg-[#082F36] active:scale-[0.99] transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D46]"
              >
                <span>Get Started Free</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onOpenModal('demo')}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-5 py-3 text-sm sm:text-base font-semibold text-[#0B3D46] hover:border-[#0B3D46]/40 hover:bg-[#F8FAFC] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D46]"
              >
                <PlayCircle className="h-5 w-5 text-[#0E7490]" aria-hidden="true" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="mt-7 flex items-center gap-3 text-sm text-[#64748B]">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF7DF] text-[#0B3D46]">
                <Layers className="h-4 w-4 text-[#0E7490]" aria-hidden="true" />
              </span>
              <p className="leading-snug">
                Made for personal brand builders, small business owners, creators and beginners.
              </p>
            </div>
          </div>

          {/* Right Column: Workspace Visual & Illustrative Floating Cards */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Warm sunlit studio container */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[#F1ECE2] via-[#E9E4D8] to-[#DCE8DB] p-4 sm:p-6 lg:p-7 border border-[#CBD5E1]/60 shadow-card">
                {/* Ambient workspace photo frame */}
                <div className="relative mx-auto aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] w-full overflow-hidden rounded-2xl bg-[#E8E2D5]">
                  {!imgError ? (
                    <img
                      src={heroWorkspaceImg}
                      alt="Brand builder smiling while working on his laptop at a bright window-lit table"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0B3D46]/10 to-[#84CC16]/20 p-6 text-center">
                      <Layers className="h-10 w-10 text-[#0B3D46] mb-2" aria-hidden="true" />
                      <p className="font-display text-sm font-semibold text-[#0B3D46]">
                        BuildLog Creative Workspace
                      </p>
                    </div>
                  )}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B3D46]/15 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>

                {/* Desktop Floating Cards (positioned around frame corners without hiding face) */}
                <div className="hidden lg:block" aria-label="Illustrative workspace preview cards">
                  {/* Top Right: Build Progress */}
                  <FloatingInfoCard
                    label="Illustrative card: Build Progress"
                    className="absolute -top-4 right-2 w-56"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF7DF]">
                        <Layers className="h-5 w-5 text-[#65A30D]" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 text-xs font-semibold text-[#111827]">
                          <span>Build Progress</span>
                          <span className="tabular-nums text-[#0B3D46]">72%</span>
                        </div>
                        <div className="mt-1.5 h-2 w-full rounded-full bg-[#E5E7EB] overflow-hidden">
                          <div className="h-full w-[72%] rounded-full bg-[#84CC16]" />
                        </div>
                      </div>
                    </div>
                  </FloatingInfoCard>

                  {/* Middle Left: Content Ideas */}
                  <FloatingInfoCard
                    label="Illustrative card: Content Ideas"
                    className="absolute top-16 lg:-left-4 xl:-left-6 w-48"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#111827] mb-2.5">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-[#FBBF24]/20">
                        <Lightbulb className="h-3.5 w-3.5 text-[#D97706]" aria-hidden="true" />
                      </span>
                      <span>Content Ideas</span>
                      <Sparkles className="h-3 w-3 text-[#FBBF24]" aria-hidden="true" />
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#475569]">
                      <li className="flex items-center gap-2">
                        <span className="h-3.5 w-3.5 rounded border border-[#CBD5E1] bg-[#FAFAF7] shrink-0" />
                        <span>Product showcase</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-3.5 w-3.5 rounded border border-[#CBD5E1] bg-[#FAFAF7] shrink-0" />
                        <span>Behind the scenes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-3.5 w-3.5 rounded border border-[#CBD5E1] bg-[#FAFAF7] shrink-0" />
                        <span>Customer story</span>
                      </li>
                    </ul>
                  </FloatingInfoCard>

                  {/* Middle Right: This Week */}
                  <FloatingInfoCard
                    label="Illustrative card: This Week"
                    className="absolute top-24 lg:-right-3 xl:-right-5 w-44"
                  >
                    <p className="text-xs font-semibold text-[#111827] mb-2">This Week</p>
                    <ul className="space-y-1.5 text-xs text-[#111827]">
                      <li className="flex items-center gap-2">
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-[#84CC16] text-white shrink-0">
                          <Check className="h-2.5 w-2.5 stroke-[3]" aria-hidden="true" />
                        </span>
                        <span>Plan content</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-[#84CC16] text-white shrink-0">
                          <Check className="h-2.5 w-2.5 stroke-[3]" aria-hidden="true" />
                        </span>
                        <span>Create (3)</span>
                      </li>
                      <li className="flex items-center gap-2 text-[#64748B]">
                        <span className="h-4 w-4 rounded border border-[#CBD5E1] bg-white shrink-0" />
                        <span>Schedule</span>
                      </li>
                      <li className="flex items-center gap-2 text-[#64748B]">
                        <span className="h-4 w-4 rounded border border-[#CBD5E1] bg-white shrink-0" />
                        <span>Distribute</span>
                      </li>
                    </ul>
                  </FloatingInfoCard>

                  {/* Bottom Right: Brick by brick */}
                  <FloatingInfoCard
                    label="Illustrative card: Encouraging build progress message"
                    className="absolute -bottom-4 right-4 w-60"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0B3D46]/8">
                        <Layers className="h-5 w-5 text-[#0E7490]" aria-hidden="true" />
                      </span>
                      <p className="font-display text-xs font-bold leading-snug text-[#0B3D46]">
                        Brick by brick,
                        <br />
                        you&apos;re building.
                      </p>
                    </div>
                  </FloatingInfoCard>
                </div>

                {/* Tablet & Mobile Grid for Floating Cards (prevents overlapping face or clipping) */}
                <div
                  className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden"
                  aria-label="Illustrative workspace preview cards"
                >
                  <FloatingInfoCard label="Illustrative card: Build Progress">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF7DF]">
                        <Layers className="h-5 w-5 text-[#65A30D]" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 text-xs font-semibold text-[#111827]">
                          <span>Build Progress</span>
                          <span className="tabular-nums text-[#0B3D46]">72%</span>
                        </div>
                        <div className="mt-1.5 h-2 w-full rounded-full bg-[#E5E7EB] overflow-hidden">
                          <div className="h-full w-[72%] rounded-full bg-[#84CC16]" />
                        </div>
                      </div>
                    </div>
                  </FloatingInfoCard>

                  <FloatingInfoCard label="Illustrative card: Encouraging build progress message">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0B3D46]/8">
                        <Layers className="h-5 w-5 text-[#0E7490]" aria-hidden="true" />
                      </span>
                      <p className="font-display text-xs font-bold leading-snug text-[#0B3D46]">
                        Brick by brick, you&apos;re building.
                      </p>
                    </div>
                  </FloatingInfoCard>

                  <FloatingInfoCard label="Illustrative card: Content Ideas">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#111827] mb-2">
                      <Lightbulb className="h-4 w-4 text-[#D97706]" aria-hidden="true" />
                      <span>Content Ideas</span>
                    </div>
                    <ul className="space-y-1 text-xs text-[#475569]">
                      <li>Product showcase</li>
                      <li>Behind the scenes</li>
                      <li>Customer story</li>
                    </ul>
                  </FloatingInfoCard>

                  <FloatingInfoCard label="Illustrative card: This Week">
                    <p className="text-xs font-semibold text-[#111827] mb-2">This Week</p>
                    <ul className="space-y-1 text-xs text-[#111827]">
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-[#65A30D]" aria-hidden="true" />
                        <span>Plan content · Create (3)</span>
                      </li>
                      <li className="text-[#64748B] pl-5">Schedule · Distribute</li>
                    </ul>
                  </FloatingInfoCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
