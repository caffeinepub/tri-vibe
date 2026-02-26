import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useSubscribeEmail } from '../hooks/useQueries';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  const { mutate: subscribeEmail, isPending } = useSubscribeEmail();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setAlreadySubscribed(false);

    subscribeEmail(email.trim(), {
      onSuccess: (result) => {
        if (result) {
          setSubscribed(true);
          setEmail('');
        } else {
          setAlreadySubscribed(true);
        }
      },
      onError: () => {
        setAlreadySubscribed(false);
      },
    });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          {/* Icon */}
          <div
            className="w-16 h-16 mx-auto mb-8 flex items-center justify-center"
            style={{ backgroundColor: 'oklch(0.55 0.22 15)' }}
          >
            <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
              <polygon points="20,5 35,35 5,35" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <h2 className="font-display text-4xl md:text-5xl mb-4 text-white">Join the Tribe</h2>
          <p className="text-lg mb-8 text-white/70">
            Get exclusive drops, early access, and 15% off your first order.
          </p>

          {subscribed ? (
            <div
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span className="text-lg" style={{ color: 'oklch(0.65 0.18 20)' }}>✓</span>
              <span className="font-medium text-white">You're in! Welcome to the tribe.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setAlreadySubscribed(false);
                }}
                disabled={isPending}
                className="flex-1 px-6 py-4 rounded-lg bg-transparent border text-sm text-white placeholder-white/40 focus:outline-none transition-colors disabled:opacity-50"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              />
              <button
                type="submit"
                disabled={isPending}
                className="px-8 py-4 font-semibold text-sm tracking-wider uppercase text-white transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[130px]"
                style={{ backgroundColor: 'oklch(0.55 0.22 15)' }}
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Joining...</span>
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          )}

          {alreadySubscribed && (
            <p className="mt-3 text-sm" style={{ color: 'oklch(0.65 0.18 20)' }}>
              This email is already subscribed. You're already part of the tribe!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
