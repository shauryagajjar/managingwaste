import { Topic } from "@/data/topics";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

interface TopicCardProps {
  topic: Topic;
  onReadMore: (topic: Topic) => void;
}

const TopicCard = ({ topic, onReadMore }: TopicCardProps) => {
  return (
    <div className="card-enhanced group">
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={topic.image}
          alt={topic.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Icon */}
        <div className="absolute top-4 right-4 p-2 rounded-full bg-primary/90 text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <BookOpen className="w-4 h-4" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        {/* Decorative Line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {topic.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {topic.essay.substring(0, 120)}...
        </p>

        <Button
          onClick={() => onReadMore(topic)}
          className="w-full mt-5 gap-2 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Read Full Essay</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default TopicCard;
