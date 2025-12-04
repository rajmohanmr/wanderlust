import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield, Heart, Globe, Award, Users, Compass } from "lucide-react";

const teamMembers = [
  {
    name: "Alexandra Rivera",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "20+ years crafting unforgettable travel experiences worldwide.",
  },
  {
    name: "Marcus Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Expert in logistics, ensuring every trip runs flawlessly.",
  },
  {
    name: "Sofia Andersson",
    role: "Lead Travel Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    bio: "Creates personalized itineraries that exceed expectations.",
  },
  {
    name: "James Okonkwo",
    role: "Customer Experience",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Dedicated to making every traveler feel valued and supported.",
  },
];

const values = [
  {
    icon: Globe,
    title: "Global Expertise",
    description: "Deep knowledge of destinations spanning every continent, culture, and terrain.",
  },
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We don't just plan trips—we live and breathe the transformative power of exploration.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Your safety is paramount. We partner only with vetted, reliable local operators.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning service recognized by leading travel publications worldwide.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50K+", label: "Happy Travelers" },
  { value: "100+", label: "Destinations" },
  { value: "98%", label: "Satisfaction Rate" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-ocean relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Compass className="absolute top-20 right-20 h-64 w-64 text-primary-foreground" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our Story
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Born from a passion for exploration, Wanderlust has been transforming travel dreams 
            into reality since 2009. We believe every journey should be extraordinary.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <p className="text-accent font-semibold mb-2">WHO WE ARE</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Crafting Adventures Since 2009
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  What started as a small travel blog by founder Alexandra Rivera has grown into 
                  one of the most trusted names in experiential travel. Our journey began with a 
                  simple belief: travel should transform you.
                </p>
                <p>
                  Today, our team of passionate travel experts curates journeys to over 100 
                  destinations worldwide. We don't just book trips—we design experiences that 
                  connect you with local cultures, hidden gems, and moments that become lifelong memories.
                </p>
                <p>
                  Every itinerary is thoughtfully crafted, every detail meticulously planned, 
                  and every traveler treated like family. That's the Wanderlust promise.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-up stagger-1">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80"
                alt="Mountain landscape"
                className="rounded-2xl shadow-travel-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"
                alt="Beach sunset"
                className="rounded-2xl shadow-travel-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80"
                alt="Lake view"
                className="rounded-2xl shadow-travel-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=600&q=80"
                alt="Travel adventure"
                className="rounded-2xl shadow-travel-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-ocean-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`text-center animate-fade-up stagger-${index + 1}`}>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">OUR VALUES</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Why Choose Wanderlust
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center p-8 rounded-2xl bg-card shadow-travel-sm hover-lift animate-fade-up stagger-${index + 1}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">OUR TEAM</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate travelers who've turned their love for exploration into 
              helping others discover the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`group text-center animate-fade-up stagger-${index + 1}`}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
