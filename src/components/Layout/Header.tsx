
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleAuthClick = () => {
    if (user) {
      navigate('/account');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="bg-cellkind-green p-2 rounded-full">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-poppins font-bold text-gray-900">
              CellKind
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-cellkind-green font-medium transition-colors duration-200 font-poppins"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleAuthClick}
              className="hover:text-cellkind-green"
            >
              <User className="h-5 w-5" />
              <span className="ml-2">{user ? 'Account' : 'Login'}</span>
            </Button>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm" className="hover:text-cellkind-green">
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-2">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-cellkind-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-700 hover:text-cellkind-green font-medium py-2 font-poppins"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 space-y-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    handleAuthClick();
                    setIsMenuOpen(false);
                  }}
                  className="justify-start w-full hover:text-cellkind-green"
                >
                  <User className="h-5 w-5 mr-2" />
                  {user ? 'Account' : 'Login'}
                </Button>
                
                <Link
                  to="/cart"
                  className="flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="ghost" size="sm" className="justify-start w-full hover:text-cellkind-green">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Cart
                    {totalItems > 0 && (
                      <span className="ml-auto bg-cellkind-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
