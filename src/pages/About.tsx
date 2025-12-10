import { Layout } from '@/components/layout/Layout';
import { Award, Leaf, Heart, Users } from 'lucide-react';
import heroImage from '@/assets/hero-living-room.jpg';
import promoDining from '@/assets/promo-dining.jpg';

const values = [
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description: 'Every piece is meticulously crafted by skilled artisans using traditional techniques passed down through generations.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    description: 'We source responsibly harvested wood and eco-friendly materials to minimize our environmental footprint.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Our passion for furniture making shows in every detail, from the selection of wood grain to the final finish.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'We believe in building lasting relationships with our customers through exceptional service and quality.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Our workshop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container-page relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4">
            Our Story
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Crafting furniture that transforms houses into homes since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                About Woodcraft
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Where Tradition Meets Modern Design
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Woodcraft began as a small family workshop in the heart of India's 
                  furniture district. What started as a passion project by our founder has grown into 
                  one of the most trusted names in premium furniture.
                </p>
                <p>
                  Our journey is rooted in the belief that furniture should be more than functional—it 
                  should be an expression of art, comfort, and sustainability. Every piece that leaves 
                  our workshop carries the legacy of traditional Indian craftsmanship combined with 
                  contemporary design sensibilities.
                </p>
                <p>
                  Today, we continue to honor our heritage while embracing innovation. Our team of 
                  skilled artisans, designers, and wood experts work together to create furniture 
                  that stands the test of time.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={promoDining}
                alt="Our craftsmanship"
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
              What We Believe
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-semibold text-primary mb-2">14+</p>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-semibold text-primary mb-2">50K+</p>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-semibold text-primary mb-2">200+</p>
              <p className="text-muted-foreground">Unique Designs</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-semibold text-primary mb-2">100+</p>
              <p className="text-muted-foreground">Skilled Artisans</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our collection and find the perfect pieces for your home. 
            Our team is here to help you every step of the way.
          </p>
          <a href="/shop" className="btn-primary inline-flex items-center">
            Explore Collection
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
