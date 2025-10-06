import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl font-display font-bold">
              Robo<span className="text-primary glow-text">Haus</span>
            </h3>
            <p className="text-sm text-muted-foreground font-body">
              The future of help, today
            </p>
          </div>

          {/* Contact */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground font-body">
              Support & Inquiries
            </p>
            <a 
              href="mailto:support@robohaus.ai" 
              className="text-primary hover:text-primary/80 transition-colors font-heading"
            >
              support@robohaus.ai
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {[
              { icon: Twitter, label: "Twitter" },
              { icon: Github, label: "GitHub" },
              { icon: Linkedin, label: "LinkedIn" }
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-card/40 backdrop-blur-xl border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Remix CTA */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center space-y-4">
          <p className="text-muted-foreground font-body">
            Remix this site to create your own robot brand
          </p>
          <a
            href="https://lovable.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-primary hover:text-primary/80 transition-colors font-heading"
          >
            Built with Lovable
          </a>
        </div>
      </div>
    </footer>
  );
};
