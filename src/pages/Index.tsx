import { useState } from "react";
import { Hero } from "@/components/Hero";
import { RobotCard } from "@/components/RobotCard";
import { RobotDetails } from "@/components/RobotDetails";
import { TechFeatures } from "@/components/TechFeatures";
import { Footer } from "@/components/Footer";

import robotAura from "@/assets/robot-aura.jpg";
import robotClio from "@/assets/robot-clio.jpg";
import robotChef from "@/assets/robot-chef.jpg";
import robotGuardian from "@/assets/robot-guardian.jpg";
import robotMuse from "@/assets/robot-muse.jpg";

const robots = [
  {
    name: "AURA",
    description: "Your personal assistant for scheduling and home management.",
    image: robotAura,
    tags: ["Productivity", "Smart Home", "AI Assistant"],
    fullDescription: "AURA is your intelligent companion designed to seamlessly manage your daily life. With advanced AI capabilities, AURA learns your preferences, anticipates your needs, and keeps your home running smoothly. From scheduling appointments to controlling smart home devices, AURA is always one step ahead.",
    specs: [
      { label: "Processor", value: "Quantum Neural Core X1" },
      { label: "Memory", value: "512TB Cloud Sync" },
      { label: "Battery", value: "72 Hours Active" },
      { label: "Connectivity", value: "5G + WiFi 7" }
    ],
    features: [
      "Predictive scheduling with calendar integration",
      "Natural language conversation in 50+ languages",
      "Smart home ecosystem control",
      "Personal preference learning"
    ],
    personality: "Efficient, Professional, Anticipatory"
  },
  {
    name: "CLIO",
    description: "Smart cleaning robot that keeps your space pristine.",
    image: robotClio,
    tags: ["Cleaning", "Autonomous", "Quiet"],
    fullDescription: "CLIO revolutionizes home cleaning with its advanced navigation and cleaning algorithms. Whisper-quiet operation combined with powerful suction and intelligent mapping ensures every corner of your home stays spotless without disrupting your daily activities.",
    specs: [
      { label: "Cleaning Mode", value: "5-Stage Purification" },
      { label: "Navigation", value: "LiDAR Precision Mapping" },
      { label: "Runtime", value: "4 Hours Continuous" },
      { label: "Noise Level", value: "35dB Ultra-Quiet" }
    ],
    features: [
      "Self-emptying dust bin with UV sterilization",
      "Obstacle avoidance with AI vision",
      "Multi-surface cleaning adaptation",
      "Scheduled cleaning routines"
    ],
    personality: "Thorough, Quiet, Reliable"
  },
  {
    name: "CHEF-X",
    description: "Your culinary companion for perfect meals every time.",
    image: robotChef,
    tags: ["Cooking", "Nutrition", "Creative"],
    fullDescription: "CHEF-X brings restaurant-quality cooking to your home kitchen. With an extensive recipe database and precise cooking techniques, CHEF-X can prepare anything from simple breakfasts to elaborate multi-course dinners. It learns your taste preferences and dietary requirements to suggest and prepare personalized meals.",
    specs: [
      { label: "Recipe Database", value: "10,000+ Recipes" },
      { label: "Precision", value: "±0.1g Measurement" },
      { label: "Temperature Control", value: "±1°C Accuracy" },
      { label: "Arms", value: "8-DOF Dexterity" }
    ],
    features: [
      "Automated ingredient prep and cooking",
      "Nutritional analysis and meal planning",
      "Dietary restriction accommodation",
      "Real-time cooking tutorials"
    ],
    personality: "Creative, Precise, Passionate"
  },
  {
    name: "GUARDIAN",
    description: "Advanced home security and monitoring system.",
    image: robotGuardian,
    tags: ["Security", "Monitoring", "Emergency"],
    fullDescription: "GUARDIAN provides comprehensive home security through intelligent monitoring and threat detection. With 360-degree awareness and emergency response protocols, GUARDIAN ensures your home and family are protected 24/7. It can identify potential threats, alert authorities, and provide detailed security reports.",
    specs: [
      { label: "Sensors", value: "360° Multi-Spectrum" },
      { label: "Recognition", value: "Facial + Behavioral AI" },
      { label: "Response Time", value: "<0.5 Seconds" },
      { label: "Range", value: "200m Detection Radius" }
    ],
    features: [
      "Intelligent intrusion detection",
      "Family member recognition",
      "Emergency service integration",
      "Environmental hazard monitoring"
    ],
    personality: "Vigilant, Protective, Calm"
  },
  {
    name: "MUSE",
    description: "Creative and emotional support companion.",
    image: robotMuse,
    tags: ["Wellness", "Creativity", "Companion"],
    fullDescription: "MUSE is designed to nurture your emotional wellbeing and creative spirit. Through empathetic AI and emotional intelligence, MUSE provides companionship, creative inspiration, and mental wellness support. Whether you need someone to talk to or help with a creative project, MUSE is here for you.",
    specs: [
      { label: "Emotion AI", value: "Deep Learning Neural Net" },
      { label: "Voice Quality", value: "Human-Level Prosody" },
      { label: "Creative Database", value: "Unlimited Cloud Access" },
      { label: "Interaction", value: "Multi-Modal Expression" }
    ],
    features: [
      "Empathetic conversation and active listening",
      "Creative brainstorming and inspiration",
      "Mood tracking and wellness suggestions",
      "Artistic collaboration tools"
    ],
    personality: "Empathetic, Creative, Supportive"
  }
];

const Index = () => {
  const [selectedRobot, setSelectedRobot] = useState<typeof robots[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <Hero />

      {/* Robots catalog */}
      <section id="robots" className="py-32 relative">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16 space-y-4 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Choose Your <span className="text-primary glow-text">Companion</span>
            </h2>
            <p className="text-xl text-muted-foreground font-heading max-w-2xl mx-auto">
              Every model. Every purpose. Every moment.
            </p>
          </div>

          {/* Robot grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {robots.map((robot, index) => (
              <div 
                key={robot.name}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <RobotCard
                  name={robot.name}
                  description={robot.description}
                  image={robot.image}
                  tags={robot.tags}
                  onViewDetails={() => setSelectedRobot(robot)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Features */}
      <TechFeatures />

      {/* Footer */}
      <Footer />

      {/* Robot details modal */}
      <RobotDetails
        robot={selectedRobot}
        open={!!selectedRobot}
        onClose={() => setSelectedRobot(null)}
      />
    </div>
  );
};

export default Index;
