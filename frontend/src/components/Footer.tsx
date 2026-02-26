import { SiX, SiInstagram, SiYoutube } from 'react-icons/si';
import { Heart } from 'lucide-react';

const TriangleLogo = () => (
  <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
    <polygon points="20,5 35,35 5,35" stroke="white" strokeWidth="2" fill="none" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'tri-vibe');

  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: 'oklch(0.55 0.22 15)' }}
              >
                <TriangleLogo />
              </div>
              <span className="font-display text-2xl tracking-wider text-white">TRI VIBE</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Three dimensions of style. One unstoppable vibe.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-lg tracking-wide mb-4 text-white">Shop</h4>
            <ul className="space-y-3">
              {['New Arrivals', 'Best Sellers', 'Collections', 'Sale'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-display text-lg tracking-wide mb-4 text-white">Help</h4>
            <ul className="space-y-3">
              {['Shipping', 'Returns', 'Size Guide', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-lg tracking-wide mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 bg-white/10 hover:bg-white/20"
                aria-label="X (Twitter)"
              >
                <SiX className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 bg-white/10 hover:bg-white/20"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 bg-white/10 hover:bg-white/20"
                aria-label="YouTube"
              >
                <SiYoutube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {year} Tri Vibe. All rights reserved.
          </p>
          <p className="text-sm text-white/40 flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3.5 h-3.5 inline" style={{ color: 'oklch(0.55 0.22 15)', fill: 'oklch(0.55 0.22 15)' }} />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
