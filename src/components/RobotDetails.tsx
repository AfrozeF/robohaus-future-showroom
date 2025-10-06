import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Cpu, Zap, Brain, Wifi } from "lucide-react";

interface RobotDetailsProps {
  robot: {
    name: string;
    description: string;
    image: string;
    fullDescription: string;
    specs: { label: string; value: string }[];
    features: string[];
    personality: string;
  } | null;
  open: boolean;
  onClose: () => void;
}

export const RobotDetails = ({ robot, open, onClose }: RobotDetailsProps) => {
  if (!robot) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl glass-panel border-primary/30 p-0 overflow-hidden">
        {/* Header with image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={robot.image} 
            alt={robot.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          <DialogHeader className="absolute bottom-6 left-6 right-6 space-y-2">
            <DialogTitle className="text-4xl font-display font-bold text-foreground">
              {robot.name}
            </DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground font-heading">
              {robot.description}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Full description */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-3">About</h3>
            <p className="text-muted-foreground leading-relaxed font-body">
              {robot.fullDescription}
            </p>
          </div>

          {/* Personality */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-3">Personality</h3>
            <Badge variant="secondary" className="bg-secondary/20 text-secondary text-base px-4 py-2">
              {robot.personality}
            </Badge>
          </div>

          {/* Technical specs */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-3">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {robot.specs.map((spec) => (
                <div key={spec.label} className="glass-panel p-4 border-border/30">
                  <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                  <div className="font-heading font-semibold">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key features */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-3">Key Features</h3>
            <div className="grid gap-3">
              {robot.features.map((feature, index) => {
                const icons = [Cpu, Zap, Brain, Wifi];
                const Icon = icons[index % icons.length];
                
                return (
                  <div key={feature} className="flex items-center gap-3 glass-panel p-3 border-border/30">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-body">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action button */}
          <Button 
            size="lg"
            variant="hero"
            className="w-full rounded-full"
          >
            Activate {robot.name}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
