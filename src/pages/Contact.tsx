import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const offices = [
  {
    city: "New York",
    address: "123 Travel Street, Manhattan",
    zip: "NY 10001, USA",
    phone: "+1 (555) 123-4567",
    email: "newyork@wanderlust.com",
  },
  {
    city: "London",
    address: "45 Explorer Lane, Westminster",
    zip: "London SW1A 1AA, UK",
    phone: "+44 20 7123 4567",
    email: "london@wanderlust.com",
  },
  {
    city: "Singapore",
    address: "78 Adventure Road, Marina Bay",
    zip: "Singapore 018956",
    phone: "+65 6123 4567",
    email: "singapore@wanderlust.com",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions about your next adventure? We're here to help you plan 
            the perfect trip.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  >
                    <option value="">Select a topic</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="custom">Custom Trip Request</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
                    placeholder="Tell us about your dream trip..."
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  Send Message
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-up stagger-1">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              
              {/* Quick Contact */}
              <div className="bg-ocean-light rounded-2xl p-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call us</p>
                      <p className="font-semibold text-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email us</p>
                      <p className="font-semibold text-foreground">hello@wanderlust.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Working hours</p>
                      <p className="font-semibold text-foreground">Mon - Fri: 9AM - 6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors duration-300"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Link */}
              <div className="p-6 rounded-2xl border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="text-muted-foreground mb-4">
                  Find quick answers to common questions about bookings, cancellations, and travel tips.
                </p>
                <Button variant="outline">
                  Visit FAQ Page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">OUR OFFICES</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Visit Us Worldwide
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={office.city}
                className={`bg-card rounded-2xl p-8 shadow-travel-sm hover-lift animate-fade-up stagger-${index + 1}`}
              >
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p>{office.address}</p>
                      <p>{office.zip}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <p>{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <p>{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
