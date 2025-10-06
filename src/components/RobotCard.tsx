import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RobotCardProps {
  name: string;
  description: string;
  image: string;
  tags: string[];
  onViewDetails: () => void;
}

export const RobotCard = ({ name, description, image, tags, onViewDetails }: RobotCardProps) => {
  return (
    <div className="group glass-panel p-6 hover:scale-[1.02] transition-all duration-500 hover:border-primary/50">
      {/* Robot image */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
        <img 
          src={image} 
          alt={name}
          className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-display font-bold text-foreground">
            {name}
          </h3>
          <p className="text-muted-foreground font-body">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action button */}
        <Button 
          onClick={onViewDetails}
          variant="glass"
          className="w-full group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};
