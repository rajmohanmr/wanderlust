import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Calendar, Users, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useParallax } from "@/hooks/useParallax";
import heroImage from "@/assets/hero-beach.jpg";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const parallaxOffset = useParallax(0.4);
  const navigate = useNavigate();
  
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState(2);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) params.set("search", destination);
    if (date) params.set("date", format(date, "yyyy-MM-dd"));
    if (guests) params.set("guests", guests.toString());
    navigate(`/destinations?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px) scale(1.1)` }}
      >
        <img
          src={heroImage}
          alt="Tropical beach paradise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating Elements - Parallax layers */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
      >
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float stagger-2" />
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-ocean-light/30 rounded-full blur-2xl animate-float stagger-3" />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 container mx-auto px-4 pt-20"
        style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}
      >
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
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-left flex-1">
                  <p className="text-xs text-muted-foreground">Where to?</p>
                  <Input
                    type="text"
                    placeholder="Search destinations"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="border-0 p-0 h-auto text-base font-medium bg-transparent focus-visible:ring-0 placeholder:text-foreground/50"
                  />
                </div>
              </div>

              {/* Date */}
              <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
                <PopoverTrigger asChild>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">When?</p>
                      <p className={cn("font-medium", date ? "text-foreground" : "text-foreground/50")}>
                        {date ? format(date, "MMM dd, yyyy") : "Select dates"}
                      </p>
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={(d) => {
                      setDate(d);
                      setIsDateOpen(false);
                    }}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              {/* Travelers */}
              <Popover open={isGuestsOpen} onOpenChange={setIsGuestsOpen}>
                <PopoverTrigger asChild>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer">
                    <Users className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Who?</p>
                      <p className="font-medium text-foreground">
                        {guests} {guests === 1 ? "Guest" : "Guests"}
                      </p>
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-48 pointer-events-auto" align="start">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Guests</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        disabled={guests <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{guests}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setGuests(Math.min(10, guests + 1))}
                        disabled={guests >= 10}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Search Button */}
              <Button variant="hero" size="xl" className="w-full" onClick={handleSearch}>
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
