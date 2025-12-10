import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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

const Shop = () => {
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

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
  }, [sortBy, priceRange, selectedCategory]);

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
            <span className="text-foreground">Shop</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section className="section-padding pb-8">
        <div className="container-page">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
            All Products
          </h1>
          <p className="text-muted-foreground">
            Explore our complete collection of handcrafted furniture
          </p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="container-page pb-16 md:pb-24">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
          <p className="text-muted-foreground">
            Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> products
          </p>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors lg:hidden"
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
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-2 mb-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="category"
                    value="all"
                    checked={selectedCategory === 'all'}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    All Categories ({products.length})
                  </span>
                </label>
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      value={cat.slug}
                      checked={selectedCategory === cat.slug}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {cat.name} ({products.filter((p) => p.category === cat.slug).length})
                    </span>
                  </label>
                ))}
              </div>

              <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
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
            </div>
          </aside>

          {/* Mobile Filters Overlay */}
          {showFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-foreground/50" onClick={() => setShowFilters(false)} />
              <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-background p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-foreground">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Categories</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category-mobile"
                        value="all"
                        checked={selectedCategory === 'all'}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-sm text-muted-foreground">All Categories</span>
                    </label>
                    {categories.map((cat) => (
                      <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="category-mobile"
                          value={cat.slug}
                          checked={selectedCategory === cat.slug}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm text-muted-foreground">{cat.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <label key={range.value} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="price-mobile"
                          value={range.value}
                          checked={priceRange === range.value}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm text-muted-foreground">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button onClick={() => setShowFilters(false)} className="w-full btn-primary">
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setPriceRange('all');
                    setSelectedCategory('all');
                    setSortBy('popular');
                  }}
                  className="text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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

export default Shop;
