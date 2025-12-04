import { useState } from "react";
import { Send, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome aboard!",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-gradient-ocean relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Plane className="h-24 w-24 text-primary-foreground rotate-45" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Plane className="h-32 w-32 text-primary-foreground -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Get Travel Inspiration
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Subscribe to our newsletter and receive exclusive deals, travel tips, 
            and destination guides straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-14 px-6 rounded-xl bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground transition-colors"
                required
              />
            </div>
            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="sm:w-auto"
            >
              Subscribe
              <Send className="h-5 w-5" />
            </Button>
          </form>

          <p className="text-sm text-primary-foreground/60 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
