import { useState } from "react";
import { Calendar, Users, Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface Destination {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
}

interface BookingModalProps {
  destination: Destination | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingModal({ destination, open, onOpenChange }: BookingModalProps) {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [travelers, setTravelers] = useState(2);

  if (!destination) return null;

  const nights = startDate && endDate 
    ? Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    : 0;
  const totalPrice = destination.price * travelers + (nights * 50);

  const handleBooking = () => {
    if (!startDate || !endDate) {
      toast({
        title: "Please select dates",
        description: "Choose your travel dates to continue.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Booking Confirmed! 🎉",
      description: `Your trip to ${destination.name} has been booked.`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
        {/* Header Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-card" />
          <div className="absolute bottom-4 left-6 right-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display text-primary-foreground">
                {destination.name}
              </DialogTitle>
              <p className="text-primary-foreground/80">
                From <span className="text-accent font-bold">${destination.price}</span> / person
              </p>
            </DialogHeader>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Date Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Check-in</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "MMM dd, yyyy") : "Select date"}
                  </Button>
                </PopoverTrigger>
              <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Check-out</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "MMM dd, yyyy") : "Select date"}
                  </Button>
                </PopoverTrigger>
              <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    disabled={(date) => date < (startDate || new Date())}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Travelers */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Travelers</label>
            <div className="flex items-center justify-between p-3 rounded-xl border bg-secondary/50">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span className="text-foreground">{travelers} {travelers === 1 ? 'Guest' : 'Guests'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setTravelers(Math.max(1, travelers - 1))}
                  disabled={travelers <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-medium">{travelers}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setTravelers(Math.min(10, travelers + 1))}
                  disabled={travelers >= 10}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="rounded-xl border p-4 bg-secondary/30 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Base price × {travelers} guests</span>
              <span className="text-foreground">${destination.price * travelers}</span>
            </div>
            {nights > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Accommodation ({nights} nights)</span>
                <span className="text-foreground">${nights * 50}</span>
              </div>
            )}
            <div className="border-t pt-3 flex justify-between">
              <span className="font-semibold text-foreground">Total</span>
              <span className="font-bold text-xl text-primary">${totalPrice}</span>
            </div>
          </div>

          {/* Book Button */}
          <Button 
            variant="ocean" 
            size="xl" 
            className="w-full"
            onClick={handleBooking}
          >
            Confirm Booking
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
