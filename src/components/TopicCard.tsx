import { Topic } from "@/data/topics";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TopicCardProps {
  topic: Topic;
  onReadMore: (topic: Topic) => void;
}

const TopicCard = ({ topic, onReadMore }: TopicCardProps) => {
  return (
    <div className="card-enhanced group animate-fade-in">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={topic.image}
          alt={topic.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {topic.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {topic.essay.substring(0, 120)}...
        </p>

        <Button
          onClick={() => onReadMore(topic)}
          className="w-full mt-5 gap-2 rounded-xl transition-all group-hover:shadow-lg"
        >
          Read Full Essay
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default TopicCard;
