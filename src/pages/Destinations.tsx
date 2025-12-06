import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Filter, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { BookingModal } from "@/components/home/BookingModal";

const allDestinations = [
  { id: 1, name: "Santorini, Greece", continent: "Europe", season: "Summer", price: 1299, rating: 4.9, reviews: 324, image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80", duration: "7 days" },
  { id: 2, name: "Bali, Indonesia", continent: "Asia", season: "All Year", price: 899, rating: 4.8, reviews: 512, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80", duration: "10 days" },
  { id: 3, name: "Machu Picchu, Peru", continent: "Americas", season: "Spring", price: 1599, rating: 4.9, reviews: 287, image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80", duration: "8 days" },
  { id: 4, name: "Maldives", continent: "Asia", season: "Winter", price: 2199, rating: 5.0, reviews: 456, image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80", duration: "7 days" },
  { id: 5, name: "Tokyo, Japan", continent: "Asia", season: "Spring", price: 1399, rating: 4.8, reviews: 678, image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80", duration: "12 days" },
  { id: 6, name: "Paris, France", continent: "Europe", season: "All Year", price: 999, rating: 4.7, reviews: 892, image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", duration: "5 days" },
  { id: 7, name: "Cape Town, South Africa", continent: "Africa", season: "Summer", price: 1199, rating: 4.6, reviews: 234, image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80", duration: "9 days" },
  { id: 8, name: "New York, USA", continent: "Americas", season: "All Year", price: 1099, rating: 4.5, reviews: 1023, image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80", duration: "6 days" },
  { id: 9, name: "Dubai, UAE", continent: "Asia", season: "Winter", price: 1499, rating: 4.7, reviews: 567, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", duration: "5 days" },
  { id: 10, name: "Sydney, Australia", continent: "Oceania", season: "Summer", price: 1899, rating: 4.8, reviews: 345, image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80", duration: "14 days" },
  { id: 11, name: "Barcelona, Spain", continent: "Europe", season: "Summer", price: 949, rating: 4.6, reviews: 789, image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80", duration: "6 days" },
  { id: 12, name: "Marrakech, Morocco", continent: "Africa", season: "Spring", price: 799, rating: 4.5, reviews: 432, image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80", duration: "5 days" },
];

const continents = ["All", "Europe", "Asia", "Americas", "Africa", "Oceania"];
const priceRanges = ["All", "Under $1000", "$1000-$1500", "$1500+"];
const seasons = ["All", "Spring", "Summer", "Winter", "All Year"];

const Destinations = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedSeason, setSelectedSeason] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<typeof allDestinations[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) setSearchQuery(search);
  }, [searchParams]);

  const handleBookNow = (destination: typeof allDestinations[0]) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const filteredDestinations = allDestinations.filter((dest) => {
    const searchMatch = !searchQuery || 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.continent.toLowerCase().includes(searchQuery.toLowerCase());
    const continentMatch = selectedContinent === "All" || dest.continent === selectedContinent;
    const seasonMatch = selectedSeason === "All" || dest.season === selectedSeason;
    let priceMatch = true;
    if (selectedPrice === "Under $1000") priceMatch = dest.price < 1000;
    else if (selectedPrice === "$1000-$1500") priceMatch = dest.price >= 1000 && dest.price <= 1500;
    else if (selectedPrice === "$1500+") priceMatch = dest.price > 1500;
    return searchMatch && continentMatch && seasonMatch && priceMatch;
  });

  const activeFilters = [selectedContinent, selectedPrice, selectedSeason].filter(f => f !== "All").length + (searchQuery ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Explore Destinations
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Discover amazing places around the world and start planning your next adventure
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-card/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4">
          {/* Search Input */}
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2 md:hidden"
            >
              <Filter className="h-4 w-4" />
              Filters
              {activeFilters > 0 && (
                <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">
                  {activeFilters}
                </span>
              )}
            </Button>
          </div>

          {/* Filter Controls */}
          <div className={cn(
            "grid gap-4 md:grid-cols-4 transition-all duration-300",
            showFilters ? "grid-rows-[1fr] opacity-100" : "md:grid-rows-[1fr] md:opacity-100 grid-rows-[0fr] opacity-0 overflow-hidden"
          )}>
            <div className="min-h-0 md:min-h-auto">
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Continent</label>
              <div className="flex flex-wrap gap-2">
                {continents.map((continent) => (
                  <button
                    key={continent}
                    onClick={() => setSelectedContinent(continent)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                      selectedContinent === continent
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    {continent}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-0 md:min-h-auto">
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Price Range</label>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setSelectedPrice(range)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                      selectedPrice === range
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-0 md:min-h-auto">
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Season</label>
              <div className="flex flex-wrap gap-2">
                {seasons.map((season) => (
                  <button
                    key={season}
                    onClick={() => setSelectedSeason(season)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                      selectedSeason === season
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    {season}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-end">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredDestinations.length}</span> destinations
              </p>
            </div>
          </div>

          {/* Active Filters */}
          {activeFilters > 0 && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {selectedContinent !== "All" && (
                <button
                  onClick={() => setSelectedContinent("All")}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-sm"
                >
                  {selectedContinent}
                  <X className="h-3 w-3" />
                </button>
              )}
              {selectedPrice !== "All" && (
                <button
                  onClick={() => setSelectedPrice("All")}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-sm"
                >
                  {selectedPrice}
                  <X className="h-3 w-3" />
                </button>
              )}
              {selectedSeason !== "All" && (
                <button
                  onClick={() => setSelectedSeason("All")}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-sm"
                >
                  {selectedSeason}
                  <X className="h-3 w-3" />
                </button>
              )}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-sm"
                >
                  "{searchQuery}"
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className={cn(
                  "group bg-card rounded-2xl overflow-hidden shadow-travel-sm hover-lift animate-fade-up",
                  `stagger-${(index % 4) + 1}`
                )}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{destination.continent}</span>
                    <span className="mx-1">•</span>
                    <span>{destination.duration}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {destination.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-accent font-bold text-xl">${destination.price}</span>
                      <span className="text-muted-foreground text-sm"> / person</span>
                    </div>
                    <Button variant="default" size="sm" onClick={() => handleBookNow(destination)}>
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No destinations match your filters.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedContinent("All");
                  setSelectedPrice("All");
                  setSelectedSeason("All");
                  setSearchQuery("");
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <BookingModal
        destination={selectedDestination}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />

      <Footer />
    </div>
  );
};

export default Destinations;
