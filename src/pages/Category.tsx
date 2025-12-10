import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/ui/ProductCard';
import { products, categories } from '@/data/products';

const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-20000', label: 'Under ₹20,000' },
  { value: '20000-40000', label: '₹20,000 - ₹40,000' },
  { value: '40000-60000', label: '₹40,000 - ₹60,000' },
  { value: '60000+', label: 'Above ₹60,000' },
];

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = useMemo(() => {
    let filtered = products.filter((p) => p.category === slug);

    // Apply price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter((p) => {
        if (priceRange === '60000+') return p.price >= 60000;
        return p.price >= min && p.price <= max;
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        return filtered.reverse();
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      default:
        return [...filtered].sort((a, b) => b.reviews - a.reviews);
    }
  }, [slug, sortBy, priceRange]);

  if (!category) {
    return (
      <Layout>
        <div className="container-page section-padding text-center">
          <h1 className="text-2xl font-semibold mb-4">Category not found</h1>
          <Link to="/shop" className="text-primary hover:underline">
            Browse all products
          </Link>
        </div>
      </Layout>
    );
  }

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
            <Link to="/shop" className="hover:text-foreground transition-colors">
              Shop
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <section className="section-padding pb-8">
        <div className="container-page">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
            {category.name}
          </h1>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="container-page pb-16 md:pb-24">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
          <p className="text-muted-foreground">
            Showing <span className="text-foreground font-medium">{categoryProducts.length}</span> products
          </p>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors sm:hidden"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label
                    key={range.value}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="price"
                      value={range.value}
                      checked={priceRange === range.value}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.slug}`}
                      className={`block text-sm transition-colors ${
                        cat.slug === slug
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {cat.name} ({products.filter((p) => p.category === cat.slug).length})
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filters Overlay */}
          {showFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-foreground/50" onClick={() => setShowFilters(false)} />
              <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-background p-6 overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-foreground">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <label
                        key={range.value}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="price-mobile"
                          value={range.value}
                          checked={priceRange === range.value}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm text-muted-foreground">
                          {range.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full btn-primary"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {categoryProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setPriceRange('all');
                    setSortBy('popular');
                  }}
                  className="text-primary hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Category;
