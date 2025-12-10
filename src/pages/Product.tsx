import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Heart, Star, Truck, Shield, RefreshCw, Minus, Plus } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  const product = products.find((p) => p.id === id);
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <Layout>
        <div className="container-page section-padding text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <Link to="/shop" className="text-primary hover:underline">
            Browse all products
          </Link>
        </div>
      </Layout>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    toast({
      title: 'Added to cart',
      description: `${quantity} × ${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? 'Removed from wishlist' : 'Added to wishlist',
      description: isWishlisted
        ? `${product.name} has been removed from your wishlist.`
        : `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-card py-4 border-b border-border">
        <div className="container-page">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/category/${product.category}`} className="hover:text-foreground transition-colors capitalize">
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground line-clamp-1">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:py-4">
              {/* Badge */}
              {product.badge && (
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${
                    product.badge === 'new'
                      ? 'bg-primary text-primary-foreground'
                      : product.badge === 'bestseller'
                      ? 'bg-wood-medium text-primary-foreground'
                      : 'bg-destructive text-destructive-foreground'
                  }`}
                >
                  {product.badge === 'new' && 'New Arrival'}
                  {product.badge === 'bestseller' && 'Bestseller'}
                  {product.badge === 'sale' && `${discount}% Off`}
                </span>
              )}

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-primary text-primary'
                          : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-foreground">{product.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-semibold text-foreground">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-sm font-medium text-destructive">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Quantity & Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button onClick={handleAddToCart} className="btn-primary flex-1">
                  Add to Cart
                </button>
                <button
                  onClick={handleWishlist}
                  className={`w-12 h-12 rounded-lg border border-border flex items-center justify-center transition-colors ${
                    isWishlisted ? 'bg-destructive/10 border-destructive' : 'hover:bg-secondary'
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isWishlisted ? 'fill-destructive text-destructive' : 'text-foreground'
                    }`}
                  />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Free Delivery</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">5 Year Warranty</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Easy Returns</p>
                </div>
              </div>

              {/* Specifications */}
              <div className="mt-6">
                <h3 className="font-semibold text-foreground mb-4">Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Dimensions</span>
                    <span className="text-foreground">{product.specs.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Material</span>
                    <span className="text-foreground">{product.specs.material}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Finish</span>
                    <span className="text-foreground">{product.specs.finish}</span>
                  </div>
                  {product.specs.weight && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Weight</span>
                      <span className="text-foreground">{product.specs.weight}</span>
                    </div>
                  )}
                  {product.specs.assembly && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Assembly</span>
                      <span className="text-foreground">{product.specs.assembly}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-card">
          <div className="container-page">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Product;
