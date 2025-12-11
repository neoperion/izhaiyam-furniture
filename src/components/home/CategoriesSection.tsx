import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { categories } from '@/data/products';

import categoryCot from '@/assets/category-cot.jpg';
import categorySofa from '@/assets/category-sofa.jpg';
import categoryDiwan from '@/assets/category-diwan.jpg';
import categoryChair from '@/assets/category-chair.jpg';
import categoryBalcony from '@/assets/category-balcony.jpg';
import categorySwing from '@/assets/category-swing.jpg';

const categoryImages: Record<string, string> = {
  cot: categoryCot,
  sofa: categorySofa,
  diwan: categoryDiwan,
  chair: categoryChair,
  balcony: categoryBalcony,
  swing: categorySwing,
};

export function CategoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left, move to next
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(categories.length / 2));
      } else {
        // Swiped right, move to previous
        setCurrentIndex((prev) => (prev - 1 + Math.ceil(categories.length / 2)) % Math.ceil(categories.length / 2));
      }
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(categories.length / 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(categories.length / 2)) % Math.ceil(categories.length / 2));
  };

  const itemsPerPage = 3;
  const visibleCategories = categories.slice(currentIndex * itemsPerPage, currentIndex * itemsPerPage + itemsPerPage);
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  return (
    <section className="section-padding bg-background">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
            Browse Categories
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Shop By Category
          </h2>
        </div>

        {/* Categories Carousel */}
        <div className="relative">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 transition-all duration-500"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {visibleCategories.map((category, index) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className={`group relative overflow-hidden rounded-lg aspect-square animate-fade-in-up`}
              >
                <img
                  src={categoryImages[category.slug]}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-primary-foreground mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-primary-foreground/70 hidden md:block">
                    {category.productCount} Products
                  </p>
                  <div className="flex items-center gap-1 text-primary-foreground/80 mt-2 text-sm group-hover:text-primary-foreground transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-all duration-200 shadow-lg hidden md:flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-all duration-200 shadow-lg hidden md:flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 w-2 hover:bg-primary/60'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
