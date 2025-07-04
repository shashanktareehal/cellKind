
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Shield, Truck, RefreshCcw } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { getProductById, products } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || '');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-cellkind-cream">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link to="/shop">
            <Button className="wellness-button">
              Back to Shop
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
  };

  const relatedProducts = products.filter(p => 
    p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  const images = [product.image, product.image, product.image]; // In real app, would be multiple images

  return (
    <div className="min-h-screen bg-cellkind-cream">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 animate-fade-in">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-gray-500 hover:text-cellkind-green">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link to="/shop" className="text-gray-500 hover:text-cellkind-green">Shop</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="animate-slide-up">
            <div className="mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-cellkind-green' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {/* Rating and Category */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-gray-600 ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <span className="text-cellkind-green font-semibold uppercase tracking-wide text-sm">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {product.description}
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="bg-cellkind-green/10 text-cellkind-green px-4 py-2 rounded-full text-sm font-medium"
                >
                  {benefit}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-4xl font-poppins font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-2xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-cellkind-peach text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              
              <Button
                onClick={handleAddToCart}
                className="wellness-button flex-1"
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-lg">
                <Shield className="h-6 w-6 text-cellkind-green mx-auto mb-2" />
                <p className="text-sm font-medium">Quality Assured</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Truck className="h-6 w-6 text-cellkind-green mx-auto mb-2" />
                <p className="text-sm font-medium">Free Shipping</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <RefreshCcw className="h-6 w-6 text-cellkind-green mx-auto mb-2" />
                <p className="text-sm font-medium">30-Day Return</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-2xl p-8 mb-16 animate-fade-in">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
                Product Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
                Ingredients
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {product.ingredients.map((ingredient) => (
                  <div key={ingredient} className="bg-cellkind-gray p-3 rounded-lg">
                    <span className="text-gray-700">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
                Nutritional Information
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                <div className="text-center p-4 bg-cellkind-gray rounded-lg">
                  <div className="text-2xl font-bold text-cellkind-green">
                    {product.nutritionalInfo.calories}
                  </div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
                <div className="text-center p-4 bg-cellkind-gray rounded-lg">
                  <div className="text-2xl font-bold text-cellkind-green">
                    {product.nutritionalInfo.protein}
                  </div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div className="text-center p-4 bg-cellkind-gray rounded-lg">
                  <div className="text-2xl font-bold text-cellkind-green">
                    {product.nutritionalInfo.carbs}
                  </div>
                  <div className="text-sm text-gray-600">Carbs</div>
                </div>
                <div className="text-center p-4 bg-cellkind-gray rounded-lg">
                  <div className="text-2xl font-bold text-cellkind-green">
                    {product.nutritionalInfo.fat}
                  </div>
                  <div className="text-sm text-gray-600">Fat</div>
                </div>
                <div className="text-center p-4 bg-cellkind-gray rounded-lg">
                  <div className="text-2xl font-bold text-cellkind-green">
                    {product.nutritionalInfo.fiber}
                  </div>
                  <div className="text-sm text-gray-600">Fiber</div>
                </div>
                <div className="text-center p-4 bg-cellkind-gray rounded-lg">
                  <div className="text-2xl font-bold text-cellkind-green">
                    {product.nutritionalInfo.sugar}
                  </div>
                  <div className="text-sm text-gray-600">Sugar</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="wellness-card overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-poppins font-semibold text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedProduct.description}
                    </p>
                    <div className="text-xl font-bold text-cellkind-green">
                      ${relatedProduct.price}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
