
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Filter } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [benefitFilter, setBenefitFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addItem } = useCart();

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const handleFilterChange = () => {
    let filtered = products;

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }

    if (benefitFilter !== 'all') {
      filtered = filtered.filter(p => p.benefits.includes(benefitFilter));
    }

    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  React.useEffect(() => {
    handleFilterChange();
  }, [categoryFilter, benefitFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-cellkind-cream">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            Shop <span className="text-cellkind-green">CellKind</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete collection of premium wellness products designed to nourish 
            your body from the inside out.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8 animate-slide-up">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-cellkind-green mr-2" />
            <h3 className="font-poppins font-semibold text-gray-900">Filter Products</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="shake">Shakes</SelectItem>
                <SelectItem value="block">Blocks</SelectItem>
              </SelectContent>
            </Select>

            <Select value={benefitFilter} onValueChange={setBenefitFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Benefits" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Benefits</SelectItem>
                <SelectItem value="Immunity">Immunity</SelectItem>
                <SelectItem value="Energy">Energy</SelectItem>
                <SelectItem value="Gut Health">Gut Health</SelectItem>
                <SelectItem value="Detox">Detox</SelectItem>
                <SelectItem value="Focus">Focus</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setCategoryFilter('all');
                setBenefitFilter('all');
                setSearchQuery('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product, index) => (
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
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold">
                      Out of Stock
                    </span>
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
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms.
            </p>
            <Button
              onClick={() => {
                setCategoryFilter('all');
                setBenefitFilter('all');
                setSearchQuery('');
              }}
              className="wellness-button"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
