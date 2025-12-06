import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "./BookingModal";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    price: 1299,
    rating: 4.9,
    reviews: 324,
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    price: 899,
    rating: 4.8,
    reviews: 512,
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
    price: 1599,
    rating: 4.9,
    reviews: 287,
  },
  {
    id: 4,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    price: 2199,
    rating: 5.0,
    reviews: 456,
  },
  {
    id: 5,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    price: 1399,
    rating: 4.8,
    reviews: 678,
  },
  {
    id: 6,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    price: 999,
    rating: 4.7,
    reviews: 892,
  },
];

export function DestinationsSection() {
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = (e: React.MouseEvent, destination: typeof destinations[0]) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-accent font-semibold mb-2">EXPLORE THE WORLD</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Popular Destinations
            </h2>
          </div>
          <Link to="/destinations">
            <Button variant="ghost" className="mt-4 md:mt-0 group">
              View All Destinations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className={`group relative overflow-hidden rounded-2xl shadow-travel-md hover-lift animate-fade-up stagger-${index + 1}`}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-card opacity-60" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-primary-foreground font-medium">{destination.rating}</span>
                  <span className="text-primary-foreground/70 text-sm">({destination.reviews})</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-1">
                  {destination.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-primary-foreground/80">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">7 days trip</span>
                  </div>
                  <p className="text-primary-foreground">
                    <span className="text-accent font-bold text-xl">${destination.price}</span>
                    <span className="text-sm opacity-70"> / person</span>
                  </p>
                </div>

                {/* Book Now Button - appears on hover */}
                <Button
                  variant="hero"
                  size="sm"
                  className="mt-4 w-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  onClick={(e) => handleBookNow(e, destination)}
                >
                  Book Now
                </Button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        destination={selectedDestination}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
}
