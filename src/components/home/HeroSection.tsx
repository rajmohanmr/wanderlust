import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beach.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tropical beach paradise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up">
            Discover Your Next
            <span className="block mt-2 text-accent">Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto animate-fade-up stagger-1">
            Explore breathtaking destinations around the world. 
            Create memories that last a lifetime.
          </p>

          {/* Search Card */}
          <div className="bg-card/95 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-travel-lg animate-fade-up stagger-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Destination */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Where to?</p>
                  <p className="font-medium text-foreground">Search destinations</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer">
                <Calendar className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">When?</p>
                  <p className="font-medium text-foreground">Select dates</p>
                </div>
              </div>

              {/* Travelers */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer">
                <Users className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Who?</p>
                  <p className="font-medium text-foreground">Add guests</p>
                </div>
              </div>

              {/* Search Button */}
              <Button variant="hero" size="xl" className="w-full">
                <Search className="h-5 w-5" />
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 animate-fade-up stagger-3">
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">500+</p>
              <p className="text-primary-foreground/70">Destinations</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">50K+</p>
              <p className="text-primary-foreground/70">Happy Travelers</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">4.9</p>
              <p className="text-primary-foreground/70">Star Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
