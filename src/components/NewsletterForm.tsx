import { FormEvent, useState } from 'react';
import { ArrowRight, AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error' | 'subscribed' | 'preview'>(
    'idle',
  );
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setStatus('error');
      setFeedback('Please enter an email address.');
      return;
    }

    if (!EMAIL_REGEX.test(trimmed)) {
      setStatus('error');
      setFeedback('Please enter a valid email address (for example, name@domain.com).');
      return;
    }

    if (!siteConfig.newsletterEndpoint) {
      setStatus('preview');
      setFeedback(
        'Email format looks good. Live newsletter delivery is not connected on this preview yet.',
      );
      return;
    }

    try {
      setStatus('submitting');
      setFeedback('');
      const response = await fetch(siteConfig.newsletterEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });

      if (!response.ok) {
        throw new Error('Subscription request failed');
      }

      setStatus('subscribed');
      setFeedback('Thanks — you are subscribed to BuildLog updates.');
      setEmail('');
    } catch {
      setStatus('error');
      setFeedback('Unable to subscribe right now. Please try again later.');
    }
  };

  return (
    <div id="newsletter">
      <h3 className="font-display text-sm font-bold text-white">Stay in the loop</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-white/75">
        Get brand-building tips, updates and resources.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-3.5">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <div className="flex items-center rounded-full bg-white p-1 border border-white/20 focus-within:ring-2 focus-within:ring-[#84CC16]">
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') {
                setStatus('idle');
                setFeedback('');
              }
            }}
            placeholder="Enter your email"
            aria-invalid={status === 'error'}
            aria-describedby={feedback ? 'newsletter-feedback' : undefined}
            className="min-w-0 flex-1 bg-transparent px-3.5 py-2 text-xs sm:text-sm text-[#111827] placeholder:text-[#64748B] focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            aria-label="Subscribe for updates"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B3D46] text-white hover:bg-[#0E7490] disabled:opacity-60 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#84CC16]"
          >
            <ArrowRight className="h-4 w-4 text-[#84CC16]" aria-hidden="true" />
          </button>
        </div>

        {feedback && (
          <div
            id="newsletter-feedback"
            role={status === 'error' ? 'alert' : 'status'}
            className={`mt-2.5 flex items-start gap-2 rounded-xl px-3 py-2 text-xs leading-snug ${
              status === 'error'
                ? 'bg-[#FB7185]/20 text-white border border-[#FB7185]/40'
                : status === 'subscribed'
                  ? 'bg-[#84CC16]/20 text-white border border-[#84CC16]/40'
                  : 'bg-white/10 text-white/90 border border-white/20'
            }`}
          >
            {status === 'error' ? (
              <AlertCircle className="h-4 w-4 shrink-0 text-[#FB7185] mt-0.5" aria-hidden="true" />
            ) : status === 'subscribed' ? (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#84CC16] mt-0.5" aria-hidden="true" />
            ) : (
              <Info className="h-4 w-4 shrink-0 text-[#FBBF24] mt-0.5" aria-hidden="true" />
            )}
            <span>{feedback}</span>
          </div>
        )}
      </form>
    </div>
  );
}
