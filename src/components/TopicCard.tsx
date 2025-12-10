import { Topic } from "@/data/topics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface TopicCardProps {
  topic: Topic;
  onReadMore: (topic: Topic) => void;
}

const TopicCard = ({ topic, onReadMore }: TopicCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group animate-fade-in">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {topic.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {topic.essay.substring(0, 120)}...
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button
          onClick={() => onReadMore(topic)}
          variant="default"
          className="w-full"
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TopicCard;
