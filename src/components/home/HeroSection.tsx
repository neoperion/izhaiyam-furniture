import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-living-room.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern living room with elegant wooden furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-page relative z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-primary font-medium tracking-wider uppercase mb-4 text-sm">
            Handcrafted Excellence
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Furniture That
            <br />
            <span className="text-primary">Tells Your Story</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Discover timeless pieces crafted with passion. Each creation is a perfect blend of 
            traditional artistry and contemporary design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/collection"
              className="btn-outline inline-flex items-center justify-center"
            >
              Explore Premium
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
