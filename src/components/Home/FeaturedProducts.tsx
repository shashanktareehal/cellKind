
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { getFeaturedProducts } from '@/data/products';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  const { addItem } = useCart();

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <section className="py-20 bg-cellkind-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            Featured <span className="text-cellkind-green">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular wellness solutions, carefully crafted to support 
            your health goals and nourish your body naturally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="wellness-card overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-cellkind-peach text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  <span className="text-sm text-cellkind-green font-semibold uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.benefits.slice(0, 3).map((benefit) => (
                    <span
                      key={benefit}
                      className="bg-cellkind-green/10 text-cellkind-green px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-poppins font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Link to={`/product/${product.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      className="wellness-button"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop">
            <Button className="wellness-button text-lg px-8 py-3">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
