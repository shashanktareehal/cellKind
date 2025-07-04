
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cellkind-cream">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center animate-fade-in">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Looks like you haven't added any wellness products yet.
            </p>
            <Link to="/shop">
              <Button className="wellness-button">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cellkind-cream">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-poppins font-bold text-gray-900 mb-8 animate-fade-in">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className="wellness-card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-poppins font-semibold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    {item.variant && (
                      <p className="text-sm text-gray-600 mb-2">
                        Variant: {item.variant}
                      </p>
                    )}
                    <p className="text-lg font-bold text-cellkind-green">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 rounded-l-lg"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 rounded-r-lg"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="wellness-card p-6 h-fit animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Items ({totalItems})</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-cellkind-green">FREE</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-poppins font-bold text-gray-900">
                    Total
                  </span>
                  <span className="text-lg font-poppins font-bold text-gray-900">
                    ${(totalPrice * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link to="/checkout" className="block">
                <Button className="wellness-button w-full">
                  Proceed to Checkout
                </Button>
              </Link>
              
              <Link to="/shop" className="block">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>

            {/* Promo Code */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-poppins font-semibold text-gray-900 mb-3">
                Promo Code
              </h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cellkind-green"
                />
                <Button variant="outline">
                  Apply
                </Button>
              </div>
            </div>

            {/* Free Shipping Notice */}
            <div className="mt-6 p-4 bg-cellkind-green/10 rounded-lg">
              <p className="text-sm text-cellkind-green font-medium">
                🚚 Congratulations! You qualify for FREE shipping
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
