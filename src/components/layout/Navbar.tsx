import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isHome ? "bg-transparent" : "bg-card/95 backdrop-blur-md shadow-travel-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={cn(
              "p-2 rounded-lg transition-colors duration-300",
              isHome ? "bg-primary-foreground/20" : "bg-primary/10"
            )}>
              <Plane className={cn(
                "h-6 w-6 transition-transform duration-300 group-hover:rotate-12",
                isHome ? "text-primary-foreground" : "text-primary"
              )} />
            </div>
            <span className={cn(
              "font-display text-2xl font-bold",
              isHome ? "text-primary-foreground" : "text-foreground"
            )}>
              Wanderlust
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative font-medium transition-colors duration-300 py-2",
                  isHome 
                    ? "text-primary-foreground/90 hover:text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground",
                  location.pathname === link.href && (isHome ? "text-primary-foreground" : "text-foreground")
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 transition-transform duration-300",
                    location.pathname === link.href && "scale-x-100"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant={isHome ? "hero" : "default"} size="lg">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={cn("h-6 w-6", isHome ? "text-primary-foreground" : "text-foreground")} />
            ) : (
              <Menu className={cn("h-6 w-6", isHome ? "text-primary-foreground" : "text-foreground")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-card shadow-travel-lg overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-2 font-medium transition-colors",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="hero" className="w-full" size="lg">
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
