
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-gray-900 mb-6 leading-tight">
            Healthy Starts
            <span className="block text-cellkind-green">from Within</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-lato">
            Premium fruit-based shakes and nutrient-rich blocks that are all-natural, 
            preservative-free, and designed for your wellness journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/shop">
              <Button className="wellness-button text-lg px-8 py-4 h-auto">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="text-lg px-8 py-4 h-auto border-2 border-gray-300 hover:border-cellkind-green hover:text-cellkind-green font-poppins"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-cellkind-green mb-2">
                100%
              </div>
              <div className="text-gray-600 font-lato">Natural</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-cellkind-green mb-2">
                10K+
              </div>
              <div className="text-gray-600 font-lato">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-cellkind-green mb-2">
                0
              </div>
              <div className="text-gray-600 font-lato">Preservatives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cellkind-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cellkind-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
