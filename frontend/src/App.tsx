import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ThreeVibes from './components/ThreeVibes';
import BestSellers from './components/BestSellers';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen tri-gradient font-body">
      <Navigation />
      <main>
        <Hero />
        <ThreeVibes />
        <BestSellers />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
