import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import promoDining from '@/assets/promo-dining.jpg';
import promoBedroom from '@/assets/promo-bedroom.jpg';
import heroImage from '@/assets/hero-living-room.jpg';

const Collection = () => {
  const premiumProducts = products.filter((p) => p.badge === 'bestseller');
  const newArrivals = products.filter((p) => p.badge === 'new');

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Premium furniture collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container-page relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4">
            Premium Collection
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Discover our curated selection of exquisite furniture pieces, crafted with the finest materials 
            and timeless design.
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Living Collection */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img
                src={promoDining}
                alt="Living room collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">
                  Handcrafted Excellence
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
                  Living Room Collection
                </h3>
                <Link
                  to="/category/sofa"
                  className="inline-flex items-center gap-2 text-primary-foreground font-medium hover:underline group/link"
                >
                  Explore Collection
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Bedroom Collection */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img
                src={promoBedroom}
                alt="Bedroom collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">
                  Rest in Luxury
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
                  Bedroom Collection
                </h3>
                <Link
                  to="/category/cot"
                  className="inline-flex items-center gap-2 text-primary-foreground font-medium hover:underline group/link"
                >
                  Explore Collection
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bestsellers */}
          <div className="mb-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
                  Customer Favorites
                </p>
                <h2 className="text-3xl font-semibold text-foreground">Bestsellers</h2>
              </div>
              <Link
                to="/shop"
                className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:underline group"
              >
                View All
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {premiumProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* New Arrivals */}
          <div>
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
                  Fresh Designs
                </p>
                <h2 className="text-3xl font-semibold text-foreground">New Arrivals</h2>
              </div>
              <Link
                to="/shop"
                className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:underline group"
              >
                View All
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collection;
