
import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Wellness Avenue', 'San Francisco, CA 94102']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-CELL', 'Mon-Fri 9AM-6PM PST']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@cellkind.com', 'support@cellkind.com']
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      details: ['Available 24/7', 'Quick response guaranteed']
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
              Get in <span className="text-cellkind-green">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto animate-slide-up">
              Have questions about our products? Need personalized wellness advice? 
              We're here to help you on your journey to better health.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title}
                  className="wellness-card p-8 text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="cellkind-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-slide-up">
                <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  For urgent matters, please call us directly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="mt-1"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">Product Information</SelectItem>
                        <SelectItem value="order">Order Support</SelectItem>
                        <SelectItem value="wellness">Wellness Advice</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us more about your question or concern..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="wellness-button w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* FAQ Section */}
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  <div className="wellness-card p-6">
                    <h3 className="font-poppins font-semibold text-gray-900 mb-3">
                      How long does shipping take?
                    </h3>
                    <p className="text-gray-600">
                      We offer free standard shipping (3-5 business days) and expedited shipping 
                      (1-2 business days) for faster delivery.
                    </p>
                  </div>

                  <div className="wellness-card p-6">
                    <h3 className="font-poppins font-semibold text-gray-900 mb-3">
                      Are your products safe for daily use?
                    </h3>
                    <p className="text-gray-600">
                      Yes! All CellKind products are formulated for daily use and are made with 
                      natural, safe ingredients. Always consult your healthcare provider if you 
                      have specific concerns.
                    </p>
                  </div>

                  <div className="wellness-card p-6">
                    <h3 className="font-poppins font-semibold text-gray-900 mb-3">
                      Do you offer a money-back guarantee?
                    </h3>
                    <p className="text-gray-600">
                      We offer a 30-day satisfaction guarantee. If you're not completely satisfied, 
                      contact us for a full refund.
                    </p>
                  </div>

                  <div className="wellness-card p-6">
                    <h3 className="font-poppins font-semibold text-gray-900 mb-3">
                      Can I get personalized nutrition advice?
                    </h3>
                    <p className="text-gray-600">
                      Our wellness experts are available for consultations. Contact us to schedule 
                      a personalized nutrition session.
                    </p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="mt-8 p-6 bg-cellkind-green/10 rounded-2xl">
                  <h3 className="font-poppins font-semibold text-gray-900 mb-3">
                    Need Immediate Help?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For urgent questions or order issues, reach out to us directly:
                  </p>
                  <div className="space-y-2">
                    <p className="text-cellkind-green font-medium">
                      📞 +1 (555) 123-CELL
                    </p>
                    <p className="text-cellkind-green font-medium">
                      💬 Live Chat (24/7)
                    </p>
                  </div>
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

export default Contact;
