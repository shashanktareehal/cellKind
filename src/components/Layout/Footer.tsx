
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-cellkind-gray border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-cellkind-green p-2 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-poppins font-bold text-gray-900">
                CellKind
              </span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Healthy starts from within. Premium fruit-based shakes and nutrient-rich blocks 
              that are all-natural, preservative-free, and designed for modern wellness.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-poppins font-semibold text-gray-900">Stay Healthy with Us</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-xs"
                />
                <Button className="wellness-button">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-cellkind-green transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-cellkind-green transition-colors">
                  About CellKind
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-cellkind-green transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-gray-600 hover:text-cellkind-green transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-poppins font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-cellkind-green transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cellkind-green transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cellkind-green transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cellkind-green transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 CellKind. All rights reserved. Healthy starts from within.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-cellkind-green transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cellkind-green transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cellkind-green transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cellkind-green transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
