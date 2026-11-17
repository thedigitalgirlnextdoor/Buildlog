import { useState } from 'react';
import {
  Leaf,
  Layers,
  Sparkles,
  Send,
  BarChart2,
  Home,
  FileEdit,
  Calendar,
  Users,
  Lightbulb,
  Bell,
} from 'lucide-react';
import { WorkflowStep } from './WorkflowStep';

const WORKFLOW_STEPS = [
  {
    stepNumber: 1,
    icon: Leaf,
    title: 'Set Up',
    description: 'Tell us about your brand and goals.',
    sidebarKey: 'Home',
    previewFocus: 'Brand profile & goals',
    nextUpTitle: 'Set your brand goals',
  },
  {
    stepNumber: 2,
    icon: Layers,
    title: 'Plan',
    description: 'Get a clear, custom strategy.',
    sidebarKey: 'Build Plan',
    previewFocus: 'Weekly strategy roadmap',
    nextUpTitle: 'Review weekly plan',
  },
  {
    stepNumber: 3,
    icon: Sparkles,
    title: 'Create',
    description: 'Generate and organise content with AI.',
    sidebarKey: 'Content Studio',
    previewFocus: 'Drafting posts from real stories',
    nextUpTitle: 'Create content',
  },
  {
    stepNumber: 4,
    icon: Send,
    title: 'Distribute',
    description: 'Publish across your platforms.',
    sidebarKey: 'Distribute',
    previewFocus: 'Platform-ready formatting',
    nextUpTitle: 'Share across platforms',
  },
  {
    stepNumber: 5,
    icon: BarChart2,
    title: 'Grow',
    description: 'Track results and get next steps.',
    sidebarKey: 'Analytics',
    previewFocus: 'Progress insights & next step',
    nextUpTitle: 'Review what worked',
  },
];

const SIDEBAR_ITEMS = [
  { label: 'Home', icon: Home },
  { label: 'Build Plan', icon: Layers },
  { label: 'Content Studio', icon: Sparkles },
  { label: 'Distribute', icon: Send },
  { label: 'Analytics', icon: BarChart2 },
  { label: 'Workspace', icon: Users },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(3);
  const current = WORKFLOW_STEPS.find((s) => s.stepNumber === activeStep) ?? WORKFLOW_STEPS[2];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-workflow-gradient py-16 sm:py-20 lg:py-24 border-y border-[#DCE8D5]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-10">
          {/* Left: Illustrative Product Interface Preview */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-label="Illustrative BuildLog workspace preview"
                className="rounded-3xl border-[6px] border-[#1E293B] bg-[#FAFAF7] shadow-float overflow-hidden lg:-rotate-1 transition-transform duration-200"
              >
                <div className="grid grid-cols-12 min-h-[290px] sm:min-h-[320px]">
                  {/* Dark Teal Sidebar */}
                  <div className="col-span-4 bg-[#0B3D46] p-3 sm:p-4 text-white flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-5">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-[#84CC16] text-[#0B3D46] font-display text-[10px] font-bold">
                          B
                        </span>
                        <span className="font-display text-xs sm:text-sm font-bold tracking-tight">
                          BuildLog
                        </span>
                      </div>

                      <ul className="space-y-1 text-[11px]">
                        {SIDEBAR_ITEMS.map(({ label, icon: ItemIcon }) => {
                          const highlighted = current.sidebarKey === label;
                          return (
                            <li
                              key={label}
                              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors ${
                                highlighted
                                  ? 'bg-[#0E7490] text-white font-semibold'
                                  : 'text-white/75'
                              }`}
                            >
                              <ItemIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                              <span className="truncate">{label}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <p className="mt-4 text-[10px] text-white/55">Illustrative UI</p>
                  </div>

                  {/* Main Illustrative Canvas */}
                  <div className="col-span-8 bg-[#FAFAF7] p-3.5 sm:p-5 flex flex-col justify-between">
                    <div>
                      {/* Top mini bar */}
                      <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2.5 gap-2">
                        <span className="text-[11px] font-medium text-[#64748B] truncate">
                          {current.previewFocus}
                        </span>
                        <div className="flex items-center gap-2 text-[#64748B] shrink-0">
                          <Bell className="h-3.5 w-3.5" aria-hidden="true" />
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0E7490] text-[10px] font-semibold text-white">
                            A
                          </span>
                        </div>
                      </div>

                      <p className="mt-3 font-display text-sm sm:text-base font-bold text-[#0B3D46]">
                        Good morning, Ade!
                      </p>
                      <p className="text-[11px] text-[#64748B]">
                        Let&apos;s make progress on your brand today.
                      </p>

                      {/* Two illustrative cards */}
                      <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="rounded-xl bg-white border border-[#E5E7EB] p-2.5">
                          <div className="flex items-center justify-between text-[11px] font-semibold text-[#0B3D46]">
                            <span>Your Build Plan</span>
                            <span className="tabular-nums text-[#0E7490]">
                              Step {activeStep}/5
                            </span>
                          </div>
                          <div className="mt-2 h-2 w-full rounded-full bg-[#E5E7EB] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-[#0E7490] transition-all duration-200"
                              style={{ width: `${activeStep * 20}%` }}
                            />
                          </div>
                        </div>

                        <div className="rounded-xl bg-[#FEF9E7] border border-[#FDE68A] p-2.5">
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#92400E]">
                            <Lightbulb className="h-3.5 w-3.5 text-[#D97706]" aria-hidden="true" />
                            <span>Next Up</span>
                          </div>
                          <p className="mt-1 text-[11px] font-medium text-[#111827] truncate">
                            {current.nextUpTitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom 4 quick tiles */}
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                      {[
                        { label: 'Content Ideas', icon: FileEdit },
                        { label: 'Calendar', icon: Calendar },
                        { label: 'Analytics', icon: BarChart2 },
                        { label: 'Team', icon: Users },
                      ].map(({ label, icon: TileIcon }) => (
                        <div
                          key={label}
                          className="flex flex-col items-center justify-center rounded-lg bg-white border border-[#E5E7EB] py-2 px-1.5 text-center"
                        >
                          <TileIcon className="h-3.5 w-3.5 text-[#0E7490]" aria-hidden="true" />
                          <span className="mt-1 text-[10px] font-medium text-[#475569] leading-tight">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-[#64748B]">
                Illustrative workspace preview — select any step to explore the guided flow.
              </p>
            </div>
          </div>

          {/* Right: 5-Step Guided Workflow */}
          <div className="lg:col-span-7 xl:col-span-7">
            <h2
              id="how-it-works-heading"
              className="font-display text-2xl sm:text-3xl lg:text-[2.15rem] font-bold tracking-tight text-[#0B3D46] text-balance"
            >
              How BuildLog Works
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#475569] max-w-2xl">
              A simple, guided workflow that takes you from idea to consistent, multi-platform
              growth.
            </p>

            <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-start gap-2 md:gap-1">
              {WORKFLOW_STEPS.map((step, index) => (
                <WorkflowStep
                  key={step.stepNumber}
                  stepNumber={step.stepNumber}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  isActive={activeStep === step.stepNumber}
                  isLast={index === WORKFLOW_STEPS.length - 1}
                  onSelect={() => setActiveStep(step.stepNumber)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
