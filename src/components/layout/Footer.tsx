import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'Cots & Beds', href: '/category/cot' },
    { name: 'Sofas', href: '/category/sofa' },
    { name: 'Diwans', href: '/category/diwan' },
    { name: 'Chairs', href: '/category/chair' },
    { name: 'Balcony Furniture', href: '/category/balcony' },
    { name: 'Swings', href: '/category/swing' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/about' },
    { name: 'Craftsmanship', href: '/about' },
    { name: 'Careers', href: '/contact' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/contact' },
    { name: 'Shipping Info', href: '/contact' },
    { name: 'Returns', href: '/contact' },
    { name: 'Track Order', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight text-primary-foreground">IZHAYAM HANDLOOM FURNITURE</span>
            </Link>
            <p className="text-primary-foreground/85 text-sm leading-relaxed mb-6 max-w-sm">
              Crafting timeless furniture with passion and precision. Every piece tells a story of 
              quality craftsmanship and sustainable materials.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-11 h-11 rounded-lg bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold mb-5 text-primary-foreground text-base">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/85 hover:text-primary-foreground/95 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-5 text-primary-foreground text-base">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/85 hover:text-primary-foreground/95 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold mb-5 text-primary-foreground text-base">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/85 hover:text-primary-foreground/95 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/30">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-primary-foreground flex-shrink-0" />
              <span className="text-sm text-primary-foreground/85 font-medium">
                123 Furniture Lane, Design District, Mumbai 400001
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-primary-foreground flex-shrink-0" />
              <span className="text-sm text-primary-foreground/85 font-medium">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary-foreground flex-shrink-0" />
              <span className="text-sm text-primary-foreground/85 font-medium">hello@izhayamfurniture.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/30 bg-primary/95">
        <div className="container-page py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80 font-medium">
            © 2024 IZHAYAM HANDLOOM FURNITURE. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
