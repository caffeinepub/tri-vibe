interface VibeCardProps {
  number: string;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  svgContent: React.ReactNode;
}

function VibeCard({ number, title, description, gradientFrom, gradientTo, svgContent }: VibeCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
      <div
        className="aspect-[3/4] rounded-xl mb-6 flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${gradientFrom} 0%, ${gradientTo} 100%)` }}
      >
        <div className="transition-transform duration-500 group-hover:rotate-12">
          {svgContent}
        </div>
        <span className="absolute bottom-4 left-4 font-display text-6xl text-white/20">{number}</span>
      </div>
      <h3 className="font-display text-3xl tracking-wide mb-2 text-white">{title}</h3>
      <p className="text-sm text-white/60">{description}</p>
    </div>
  );
}

export default function ThreeVibes() {
  return (
    <section id="collections" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ color: 'oklch(0.65 0.18 20)' }}
          >
            Collections
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white">Three Vibes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <VibeCard
            number="01"
            title="BOLD"
            description="Statement pieces that demand attention"
            gradientFrom="oklch(0.55 0.22 15)"
            gradientTo="oklch(0.16 0.04 260)"
            svgContent={
              <svg viewBox="0 0 100 100" className="w-24 h-24">
                <polygon points="50,10 90,90 10,90" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            }
          />
          <VibeCard
            number="02"
            title="FLOW"
            description="Effortless style for everyday movement"
            gradientFrom="oklch(0.65 0.18 20)"
            gradientTo="oklch(0.16 0.04 260)"
            svgContent={
              <svg viewBox="0 0 100 100" className="w-24 h-24">
                <polygon points="50,10 90,90 10,90" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)" />
              </svg>
            }
          />
          <VibeCard
            number="03"
            title="EDGE"
            description="Minimalist designs with maximum impact"
            gradientFrom="oklch(0.18 0.05 260)"
            gradientTo="oklch(0.12 0.005 260)"
            svgContent={
              <svg viewBox="0 0 100 100" className="w-24 h-24">
                <polygon points="50,10 90,90 10,90" stroke="oklch(0.55 0.22 15)" strokeWidth="2" fill="none" />
                <polygon points="50,30 70,70 30,70" stroke="oklch(0.65 0.18 20)" strokeWidth="1" fill="none" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
