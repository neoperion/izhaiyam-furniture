import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, User, ShoppingBag, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/logo.jpg';

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
    <header className="sticky top-0 z-50 bg-[hsl(var(--wood-header))] backdrop-blur-md border-b border-[hsl(var(--wood-medium)/0.2)] shadow-sm">
      <nav className="container-page">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logoImage} 
              alt="Logo" 
              className="h-16 md:h-18 w-auto object-contain brightness-0 saturate-100"
              style={{ filter: 'brightness(0) saturate(100%) invert(17%) sepia(15%) saturate(1200%) hue-rotate(356deg) brightness(92%) contrast(90%)' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 link-underline',
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 rounded-full hover:bg-secondary transition-colors hidden md:flex">
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>
            <Link to="/wishlist" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Heart className="w-5 h-5 text-muted-foreground" />
            </Link>
            <Link to="/account" className="p-2 rounded-full hover:bg-secondary transition-colors hidden md:flex">
              <User className="w-5 h-5 text-muted-foreground" />
            </Link>
            <Link to="/cart" className="p-2 rounded-full hover:bg-secondary transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-secondary transition-colors md:hidden"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    location.pathname === link.href
                      ? 'bg-secondary text-primary'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/account"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground flex items-center gap-2"
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
