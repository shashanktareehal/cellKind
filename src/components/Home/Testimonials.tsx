
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Los Angeles, CA',
      rating: 5,
      text: "CellKind has completely transformed my morning routine. The Berry Immunity Boost gives me sustained energy without the jitters, and I haven't been sick since I started using it 6 months ago!",
      product: 'Berry Immunity Boost Shake'
    },
    {
      id: 2,
      name: 'Mike Chen',
      location: 'New York, NY',
      rating: 5,
      text: "As someone with digestive issues, the Gut Health Probiotic Block has been a game-changer. My gut health has improved dramatically, and I feel more balanced overall.",
      product: 'Gut Health Probiotic Block'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      location: 'Austin, TX',
      rating: 5,
      text: "I was skeptical at first, but the Green Detox Power Block really works. I feel cleaner, more energized, and my skin has never looked better. Worth every penny!",
      product: 'Green Detox Power Block'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cellkind-green/5 to-cellkind-peach/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            What Our <span className="text-cellkind-green">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real people who've made CellKind part of their wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="wellness-card p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Product */}
              <div className="bg-cellkind-green/10 text-cellkind-green px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {testimonial.product}
              </div>

              {/* Customer Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-poppins font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-scale-in">
            <div className="text-3xl font-poppins font-bold text-cellkind-green mb-2">
              4.8/5
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-poppins font-bold text-cellkind-green mb-2">
              10,000+
            </div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-poppins font-bold text-cellkind-green mb-2">
              98%
            </div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-poppins font-bold text-cellkind-green mb-2">
              30-Day
            </div>
            <div className="text-gray-600">Money Back</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
