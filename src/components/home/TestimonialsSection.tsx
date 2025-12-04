import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Adventure Enthusiast",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content: "Wanderlust made our dream trip to Japan absolutely seamless. From booking to the actual experience, everything was perfectly organized. We can't wait to book our next adventure!",
    rating: 5,
    destination: "Tokyo, Japan",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Photographer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content: "The attention to detail is remarkable. They found hidden gems I never would have discovered on my own. The photography opportunities in Santorini were beyond amazing.",
    rating: 5,
    destination: "Santorini, Greece",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Travel Blogger",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    content: "As someone who travels frequently, I'm incredibly picky about tour operators. Wanderlust exceeded all my expectations. Their local guides were knowledgeable and passionate.",
    rating: 5,
    destination: "Machu Picchu, Peru",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-ocean-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">TESTIMONIALS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from travelers who have experienced 
            unforgettable journeys with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "bg-card rounded-2xl p-8 shadow-travel-md hover-lift relative animate-fade-up",
                `stagger-${index + 1}`
              )}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-ocean-light">
                <Quote className="h-12 w-12 fill-current" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-ocean-light"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.destination}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
