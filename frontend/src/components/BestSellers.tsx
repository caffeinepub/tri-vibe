import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  symbol: string;
  symbolColor: string;
}

function ProductCard({ name, description, price, symbol, symbolColor }: ProductCardProps) {
  return (
    <div className="glass-card rounded-xl p-4 group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
      <div
        className="aspect-square rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
        style={{ background: 'linear-gradient(145deg, oklch(0.16 0.04 260), oklch(0.12 0.005 260))' }}
      >
        <span className="font-display text-7xl opacity-30" style={{ color: symbolColor }}>
          {symbol}
        </span>
      </div>
      <h4 className="font-medium mb-1 text-white">{name}</h4>
      <p className="text-sm mb-3 text-white/50">{description}</p>
      <span className="font-display text-xl" style={{ color: 'oklch(0.55 0.22 15)' }}>
        {price}
      </span>
    </div>
  );
}

export default function BestSellers() {
  const products: ProductCardProps[] = [
    { name: 'Vibe Tee', description: 'Essential cotton tee', price: '$45', symbol: '△', symbolColor: 'oklch(0.55 0.22 15)' },
    { name: 'Track Pants', description: 'Relaxed fit joggers', price: '$75', symbol: '▽', symbolColor: 'oklch(0.65 0.18 20)' },
    { name: 'Logo Cap', description: 'Structured snapback', price: '$35', symbol: '◁', symbolColor: 'oklch(0.85 0 0)' },
    { name: 'Crew Socks', description: '3-pack essentials', price: '$25', symbol: '▷', symbolColor: 'oklch(0.55 0.22 15)' },
  ];

  return (
    <section className="py-24 px-6" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4 font-medium"
              style={{ color: 'oklch(0.65 0.18 20)' }}
            >
              Featured
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white">Best Sellers</h2>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 text-sm tracking-wide flex items-center gap-2 hover:gap-4 transition-all duration-200"
            style={{ color: 'oklch(0.65 0.18 20)' }}
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
