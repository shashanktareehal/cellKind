
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Home/Hero';
import Mission from '@/components/Home/Mission';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import Benefits from '@/components/Home/Benefits';
import Testimonials from '@/components/Home/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-cellkind-cream">
      <Header />
      <main>
        <Hero />
        <Mission />
        <FeaturedProducts />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
