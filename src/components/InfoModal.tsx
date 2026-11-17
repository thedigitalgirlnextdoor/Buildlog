import { useEffect, useRef } from 'react';
import { X, ArrowRight, PlayCircle, CheckCircle2, Layers, Info } from 'lucide-react';
import { ModalTopic } from '../config/siteConfig';

interface InfoModalProps {
  topic: ModalTopic;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

const MODAL_CONTENT: Record<
  Exclude<ModalTopic, null>,
  {
    eyebrow: string;
    title: string;
    description: string;
    points?: string[];
    primaryLabel?: string;
    primaryTarget?: string;
    isDemo?: boolean;
  }
> = {
  'get-started': {
    eyebrow: 'Workspace Preview',
    title: 'Start building your brand step by step',
    description:
      'BuildLog is currently preparing for public launch. Sign up for launch updates in the newsletter below, or explore how the 5-step guided workspace takes you from brand clarity to multi-platform growth.',
    points: [
      'Clarify your brand voice, audience and direction from day one',
      'Build a structured weekly content plan without guesswork',
      'Turn everyday experiences into platform-ready posts with AI assistance',
    ],
    primaryLabel: 'Explore How It Works',
    primaryTarget: 'how-it-works',
  },
  login: {
    eyebrow: 'Account Access',
    title: 'Member sign-in opens at launch',
    description:
      'Account authentication and live workspaces are not yet open on this marketing site. Leave your email in the newsletter form below to receive an invitation as soon as early access opens.',
    primaryLabel: 'Go to Launch Updates',
    primaryTarget: 'newsletter',
  },
  demo: {
    eyebrow: 'Guided Walkthrough',
    title: 'Inside the BuildLog workflow',
    description:
      'BuildLog breaks brand building into five approachable stages designed for beginners, solo founders, creators and small business owners alike.',
    points: [
      '1. Set Up — Share what you are building and who you want to reach.',
      '2. Plan — Get a simple, custom strategy focused on the right platforms.',
      '3. Create — Turn daily work and ideas into structured content with AI.',
      '4. Distribute — Adapt and prepare posts for Instagram, TikTok, LinkedIn and more.',
      '5. Grow — Review what resonates and receive clear next steps.',
    ],
    primaryLabel: 'See Workflow Section',
    primaryTarget: 'how-it-works',
    isDemo: true,
  },
  'early-access': {
    eyebrow: 'Plans Coming Soon',
    title: 'Pricing & plans are being finalised',
    description:
      'We have not published confirmed pricing or billing terms yet. Leave your email below if you would like to be notified when BuildLog plans and early access become available.',
    primaryLabel: 'Notify Me at Launch',
    primaryTarget: 'newsletter',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch with BuildLog',
    description:
      'Direct support channels and official contact details will be published here ahead of public release. For now, you can join our launch update list in the footer.',
    primaryLabel: 'Stay in the Loop',
    primaryTarget: 'newsletter',
  },
  privacy: {
    eyebrow: 'Legal Notice',
    title: 'Privacy Policy',
    description:
      'This marketing preview does not collect, store or transmit personal data to third-party services. Full privacy documentation will be published prior to public launch.',
  },
  terms: {
    eyebrow: 'Legal Notice',
    title: 'Terms of Use',
    description:
      'Full Terms of Service covering BuildLog accounts, workspaces and subscriptions will be published when the product opens for public registration.',
  },
  cookies: {
    eyebrow: 'Legal Notice',
    title: 'Cookie Policy',
    description:
      'This static marketing site does not set advertising or tracking cookies. Detailed cookie disclosures will accompany the production launch.',
  },
};

export function InfoModal({ topic, onClose, onNavigateSection }: InfoModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!topic) return;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [topic, onClose]);

  if (!topic) return null;

  const content = MODAL_CONTENT[topic];

  const handleAction = () => {
    const target = content.primaryTarget;
    onClose();
    if (target) {
      onNavigateSection(target);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B3D46]/55 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="buildlog-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#FAFAF7] border border-[#CBD5E1] p-6 sm:p-8 shadow-float text-[#111827]">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#64748B] hover:bg-[#E5E7EB]/60 hover:text-[#0B3D46] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D46]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0E7490] mb-2">
          {content.isDemo ? (
            <PlayCircle className="h-4 w-4 text-[#84CC16]" aria-hidden="true" />
          ) : (
            <Layers className="h-4 w-4 text-[#84CC16]" aria-hidden="true" />
          )}
          <span>{content.eyebrow}</span>
        </div>

        <h2
          id="buildlog-modal-title"
          className="font-display text-xl sm:text-2xl font-bold text-[#0B3D46] pr-8 text-balance"
        >
          {content.title}
        </h2>

        <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#475569]">
          {content.description}
        </p>

        {content.points && (
          <ul className="mt-5 space-y-2.5 rounded-xl bg-white border border-[#E5E7EB] p-4">
            {content.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-[#111827]">
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-[#84CC16] mt-0.5"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-xl border border-[#CBD5E1] bg-white px-4 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#F1F5F9] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D46]"
          >
            Close
          </button>
          {content.primaryLabel && content.primaryTarget && (
            <button
              type="button"
              onClick={handleAction}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B3D46] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#082F36] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D46]"
            >
              <span>{content.primaryLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>

        {!content.points && (
          <p className="mt-4 flex items-center gap-1.5 text-xs text-[#64748B]">
            <Info className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Preview marketing site — no live account or payment data is collected.</span>
          </p>
        )}
      </div>
    </div>
  );
}
