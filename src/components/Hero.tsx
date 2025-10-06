import { Button } from "@/components/ui/button";
import heroRobot from "@/assets/hero-robot.jpg";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToRobots = () => {
    document.getElementById("robots")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
              Meet the <span className="text-primary glow-text">future</span> of help.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-heading">
              Technology designed to understand you.
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl font-body">
            Your home deserves intelligent company. Every model. Every purpose. Every moment.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              variant="hero"
              onClick={scrollToRobots}
              className="rounded-full px-8"
            >
              Choose Your Robot
            </Button>
            <Button 
              size="lg" 
              variant="glass"
              className="rounded-full px-8"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Robot image */}
        <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 bg-gradient-radial from-primary/30 to-transparent blur-3xl animate-glow-pulse" />
          <img 
            src={heroRobot} 
            alt="Futuristic humanoid robot" 
            className="relative z-10 w-full h-auto rounded-2xl animate-float"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToRobots}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce cursor-pointer"
        aria-label="Scroll to robots"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};
