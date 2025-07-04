
import { Shield, Zap, Heart, Leaf } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Boost Immunity',
      description: 'Strengthen your immune system with vitamin C, antioxidants, and natural compounds that help your body defend against illness.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Zap,
      title: 'Natural Energy',
      description: 'Sustained energy without crashes. Our natural ingredients provide clean fuel for your body and mind throughout the day.',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Heart,
      title: 'Gut Health',
      description: 'Support digestive wellness with probiotics, prebiotics, and fiber that promote a healthy gut microbiome.',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Leaf,
      title: 'Detox & Cleanse',
      description: 'Gentle detoxification that helps your body eliminate toxins while providing essential nutrients for cellular renewal.',
      color: 'bg-green-50 text-green-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            Why Choose <span className="text-cellkind-green">CellKind?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our scientifically-formulated products target key areas of wellness to help you 
            feel your best from the inside out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="flex items-start space-x-6 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-4 rounded-full ${benefit.color}`}>
                <benefit.icon className="h-8 w-8" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scientific Backing */}
        <div className="mt-20 bg-cellkind-gray rounded-3xl p-12 text-center animate-scale-in">
          <h3 className="text-3xl font-poppins font-bold text-gray-900 mb-6">
            Backed by Science, Proven by Results
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Our formulations are based on the latest nutritional research and testing. 
            Each ingredient is carefully selected for its bioavailability and synergistic benefits.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-poppins font-bold text-cellkind-green mb-2">
                500+
              </div>
              <div className="text-gray-600">Research Studies</div>
            </div>
            <div>
              <div className="text-4xl font-poppins font-bold text-cellkind-green mb-2">
                95%
              </div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-poppins font-bold text-cellkind-green mb-2">
                3rd Party
              </div>
              <div className="text-gray-600">Lab Tested</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
