
import { Leaf, Heart, Shield, Zap } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: Leaf,
      title: 'All Natural',
      description: 'Made from premium organic fruits and superfoods with no artificial additives or preservatives.'
    },
    {
      icon: Heart,
      title: 'Wellness First',
      description: 'Every product is designed to nourish your body and support your health journey from within.'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorously tested for purity and potency to ensure you get the best nutrition in every serving.'
    },
    {
      icon: Zap,
      title: 'Real Results',
      description: 'Experience sustained energy, better immunity, and improved gut health with our proven formulas.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            Our Mission: <span className="text-cellkind-green">Heal from Within</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lato">
            At CellKind, we believe that true wellness begins at the cellular level. 
            Our premium fruit-based nutrition is crafted to nourish your body from the inside out, 
            supporting your natural vitality and helping you thrive in modern life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="wellness-card p-8 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cellkind-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-cellkind-gray rounded-3xl p-12 animate-scale-in">
            <h3 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
              Ready to Transform Your Wellness?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of health-conscious individuals who have made CellKind 
              part of their daily wellness routine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="wellness-button">
                Start Your Journey
              </button>
              <button className="wellness-button-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
