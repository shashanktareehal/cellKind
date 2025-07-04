
import { Heart, Users, Award, Leaf } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const About = () => {
  const milestones = [
    { year: '2020', title: 'Founded', description: 'CellKind was born from a passion for natural wellness' },
    { year: '2021', title: 'First Products', description: 'Launched our signature fruit-based wellness shakes' },
    { year: '2022', title: '10K Customers', description: 'Reached our first 10,000 happy customers' },
    { year: '2023', title: 'Expansion', description: 'Introduced nutrient-rich blocks and expanded nationwide' },
    { year: '2024', title: 'Innovation', description: 'Leading the future of cellular nutrition' }
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Natural First',
      description: 'We believe in the power of nature. Every ingredient is carefully selected for its purity and effectiveness.'
    },
    {
      icon: Heart,
      title: 'Wellness Focused',
      description: 'Your health is our priority. We create products that truly make a difference in how you feel.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We listen to our customers and continuously improve based on your feedback and needs.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Every product undergoes rigorous testing to ensure the highest standards of quality and safety.'
    }
  ];

  return (
    <div className="min-h-screen bg-cellkind-cream">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cellkind-green/10 to-cellkind-peach/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-poppins font-bold text-gray-900 mb-6 animate-fade-in">
              About <span className="text-cellkind-green">CellKind</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto animate-slide-up">
              We're on a mission to revolutionize wellness through the power of natural, 
              fruit-based nutrition that nourishes your body from the cellular level.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                  Our Mission: <span className="text-cellkind-green">Healthy from Within</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At CellKind, we believe that true wellness begins at the cellular level. Our journey 
                  started with a simple yet powerful idea: what if we could harness the natural healing 
                  power of fruits to create products that truly transform how people feel?
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Every CellKind product is crafted with this philosophy in mind. We source the finest 
                  organic fruits and superfoods, combining them with cutting-edge nutritional science 
                  to create wellness solutions that work in harmony with your body's natural processes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're not just another supplement company. We're your partners in a healthier, 
                  more vibrant life – because when your cells are healthy, you feel the difference 
                  from the inside out.
                </p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <img
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop"
                  alt="Natural fruits and wellness"
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-cellkind-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                Our <span className="text-cellkind-green">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do and every product we create.
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
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                Our <span className="text-cellkind-green">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a small vision to a growing community of wellness enthusiasts.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cellkind-green/20"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    } animate-slide-up`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="wellness-card p-6">
                        <div className="text-3xl font-poppins font-bold text-cellkind-green mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="w-6 h-6 bg-cellkind-green rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team/Promise Section */}
        <section className="py-20 bg-gradient-to-br from-cellkind-green to-cellkind-green/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
                Our Promise to You
              </h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
                We promise to never compromise on quality, to always put your health first, 
                and to continue innovating in the pursuit of better wellness solutions. 
                Every product we create is a testament to our commitment to your cellular health.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-poppins font-bold text-white mb-2">
                    100%
                  </div>
                  <div className="text-white/90">Natural Ingredients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-poppins font-bold text-white mb-2">
                    50,000+
                  </div>
                  <div className="text-white/90">Lives Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-poppins font-bold text-white mb-2">
                    ∞
                  </div>
                  <div className="text-white/90">Commitment to Wellness</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
