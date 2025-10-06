import { Eye, Mic, Heart, Zap } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "AI Vision",
    description: "Advanced computer vision recognizes faces, objects, and understands your environment in real-time."
  },
  {
    icon: Mic,
    title: "Voice Sync",
    description: "Natural language processing enables fluid conversation and voice command understanding."
  },
  {
    icon: Heart,
    title: "Emotion Engine",
    description: "Sophisticated emotional intelligence adapts responses based on your mood and tone."
  },
  {
    icon: Zap,
    title: "Wireless Energy",
    description: "Self-charging wireless energy system ensures your robot is always ready when you need it."
  }
];

export const TechFeatures = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Powered by <span className="text-primary glow-text">Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground font-heading max-w-2xl mx-auto">
            Cutting-edge technology that brings science fiction to your home
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={feature.title}
                className="glass-panel p-6 group hover:border-primary/50 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-glow-pulse" />
                  <div className="relative w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>

                {/* Connection line effect */}
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
