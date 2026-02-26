const ApexHoodieCard = () => (
  <div className="relative">
    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
      {/* NEW Badge */}
      <div
        className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold tracking-wider text-white"
        style={{ backgroundColor: 'oklch(0.55 0.22 15)' }}
      >
        NEW
      </div>

      {/* Product Image Placeholder */}
      <div
        className="aspect-square rounded-xl mb-6 flex items-center justify-center relative overflow-hidden"
        style={{ background: 'linear-gradient(145deg, oklch(0.16 0.04 260), oklch(0.12 0.005 260))' }}
      >
        <svg viewBox="0 0 200 200" className="w-48 h-48 transition-transform duration-500 group-hover:scale-110">
          <polygon
            points="100,20 180,180 20,180"
            stroke="oklch(0.55 0.22 15)"
            strokeWidth="3"
            fill="none"
            opacity="0.8"
          />
          <polygon
            points="100,50 150,150 50,150"
            stroke="oklch(0.65 0.18 20)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <polygon
            points="100,80 120,120 80,120"
            fill="oklch(0.55 0.22 15)"
            opacity="0.4"
          />
        </svg>
      </div>

      <h3 className="font-display text-2xl tracking-wide mb-2 text-white">Apex Hoodie</h3>
      <p className="text-sm mb-4 text-white/60">Premium cotton blend with signature triangle emblem</p>
      <div className="flex items-center justify-between">
        <span className="font-display text-3xl" style={{ color: 'oklch(0.55 0.22 15)' }}>$89</span>
        <button
          className="px-6 py-3 text-sm font-medium tracking-wide transition-all hover:scale-105"
          style={{ backgroundColor: 'oklch(0.65 0.18 20)', color: 'oklch(0.12 0.005 260)' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      id="about"
    >
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(12, 8, 8, 0.72)' }} />

      {/* Decorative blobs */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl z-0"
        style={{ backgroundColor: 'oklch(0.55 0.22 15)' }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl z-0"
        style={{ backgroundColor: 'oklch(0.65 0.18 20)' }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <p
            className="animate-slide-in text-sm tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ color: 'oklch(0.65 0.18 20)' }}
          >
            Define Your Energy
          </p>
          <h1 className="animate-fade-up font-display text-7xl md:text-8xl lg:text-9xl leading-none mb-6 text-white">
            TRI<br />VIBE
          </h1>
          <p className="animate-fade-up-delay text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 text-white/80">
            Where three dimensions of style converge. Bold. Authentic. Unstoppable.
          </p>
          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              className="hover-pulse px-10 py-4 text-sm font-semibold tracking-wider uppercase text-white transition-all hover:scale-105"
              style={{ backgroundColor: 'oklch(0.55 0.22 15)' }}
            >
              Explore Collection
            </button>
            <button className="px-10 py-4 text-sm font-semibold tracking-wider uppercase border text-white transition-all hover:bg-white/10 border-white/40">
              Our Story
            </button>
          </div>
        </div>

        {/* Featured Product Card */}
        <ApexHoodieCard />
      </div>
    </section>
  );
}
