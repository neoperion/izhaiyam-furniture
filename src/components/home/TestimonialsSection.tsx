import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
            Customer Love
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background rounded-2xl p-6 md:p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-semibold text-secondary-foreground">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
