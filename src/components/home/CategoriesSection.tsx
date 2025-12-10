import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className={`group relative overflow-hidden rounded-xl aspect-square animate-fade-in-up stagger-${index + 1}`}
              style={{ opacity: 0, animationFillMode: 'forwards' }}
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
      </div>
    </section>
  );
}
