import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import promoDining from '@/assets/promo-dining.jpg';
import promoBedroom from '@/assets/promo-bedroom.jpg';

export function PromoSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-page">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Promo 1 */}
          <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto md:min-h-[400px]">
            <img
              src={promoDining}
              alt="Premium dining furniture collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">
                New Arrivals
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
                Premium Dining Collection
              </h3>
              <Link
                to="/collection"
                className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-6 py-3 rounded-lg font-medium transition-all hover:bg-primary-foreground/90 group/btn"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Promo 2 */}
          <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto md:min-h-[400px]">
            <img
              src={promoBedroom}
              alt="Bedroom furniture collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">
                Up to 30% Off
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
                Bedroom Essentials
              </h3>
              <Link
                to="/category/cot"
                className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-6 py-3 rounded-lg font-medium transition-all hover:bg-primary-foreground/90 group/btn"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
