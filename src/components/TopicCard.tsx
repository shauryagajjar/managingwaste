import { useState, useRef } from "react";
import { Topic } from "@/data/topics";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

interface TopicCardProps {
  topic: Topic;
  onReadMore: (topic: Topic) => void;
}

const TopicCard = ({ topic, onReadMore }: TopicCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlarePosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      className="relative group cursor-pointer"
      onClick={() => onReadMore(topic)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Card Container */}
      <div className="card-enhanced overflow-hidden relative">
        {/* Glare Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none z-20"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          }}
        />

        {/* Animated Border Glow */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-muted-foreground/30 via-muted-foreground/50 to-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

        {/* Image Container */}
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110"
            style={{ transform: "translateZ(20px)" }}
          />
          
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          
          {/* Floating Icon */}
          <div className="absolute top-4 right-4 p-2.5 rounded-full bg-muted text-foreground opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
            <BookOpen className="w-4 h-4" />
          </div>

          {/* Bottom Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center gap-2 text-foreground/90">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Click to explore</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative" style={{ transform: "translateZ(30px)" }}>
          {/* Animated Decorative Line */}
          <div className="absolute top-0 left-6 right-6 h-px overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </div>
          
          <h3 className="font-serif text-xl font-bold text-foreground transition-all duration-300 transform group-hover:translate-x-1">
            {topic.title}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed transition-all duration-300 group-hover:text-foreground/70">
            {topic.essay.substring(0, 120)}...
          </p>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              onReadMore(topic);
            }}
            className="w-full mt-5 gap-2 rounded-xl transition-all duration-300 group-hover:shadow-xl hover:scale-[1.03] active:scale-[0.97] overflow-hidden relative bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <span className="relative z-10">Read Full Essay</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
          </Button>

          {/* Authors */}
          <div className="mt-4 pt-3 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center transition-all duration-300 group-hover:text-foreground/60">
              <span className="font-semibold">Authors:</span> {topic.authors}
            </p>
          </div>
        </div>
      </div>

      {/* Shadow Effect */}
      <div 
        className="absolute inset-0 rounded-2xl bg-muted-foreground/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-20"
        style={{ transform: "translateY(20px) translateZ(-50px)" }}
      />
    </div>
  );
};

export default TopicCard;
