import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, User, ShoppingBag, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.jpg';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Collection', href: '/collection' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <nav className="container-page">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Woodcraft Logo" className="h-10 md:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-semibold transition-colors duration-200',
                  location.pathname === link.href
                    ? 'text-primary-foreground border-b-2 border-primary-foreground pb-1'
                    : 'text-primary-foreground/80 hover:text-primary-foreground'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 md:gap-6">
            <button className="p-2 rounded-lg hover:bg-primary/80 transition-colors hidden md:flex">
              <Search className="w-5 h-5 text-primary-foreground" />
            </button>
            <Link to="/wishlist" className="p-2 rounded-lg hover:bg-primary/80 transition-colors">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </Link>
            <Link to="/account" className="p-2 rounded-lg hover:bg-primary/80 transition-colors hidden md:flex">
              <User className="w-5 h-5 text-primary-foreground" />
            </Link>
            <Link to="/cart" className="p-2 rounded-lg hover:bg-primary/80 transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-foreground text-xs rounded-lg flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-primary/80 transition-colors md:hidden"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-primary-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-primary-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 bg-primary animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-lg text-sm font-semibold transition-colors',
                    location.pathname === link.href
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'text-primary-foreground/80 hover:bg-primary/90 hover:text-primary-foreground'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/account"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-semibold text-primary-foreground/80 hover:bg-primary/90 hover:text-primary-foreground flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Account
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
