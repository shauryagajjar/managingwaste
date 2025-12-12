import { Topic } from "@/data/topics";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Users } from "lucide-react";

interface TopicModalProps {
  topic: Topic | null;
  isOpen: boolean;
  onClose: () => void;
}

const TopicModal = ({ topic, isOpen, onClose }: TopicModalProps) => {
  if (!topic) return null;

  const paragraphs = topic.essay.split("\n\n");

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden border-primary/20 shadow-2xl">
        {/* Hero Image Section */}
        <div className="relative h-56 md:h-64 overflow-hidden">
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
          
          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 p-2 rounded-full bg-primary/90 text-primary-foreground">
            <BookOpen className="w-5 h-5" />
          </div>
          
          {/* Title Section */}
          <DialogHeader className="absolute bottom-0 left-0 right-0 p-6">
            <DialogTitle className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground drop-shadow-lg">
              {topic.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="font-medium">By: {topic.authors}</span>
            </DialogDescription>
          </DialogHeader>
        </div>
        
        {/* Content Section */}
        <ScrollArea className="max-h-[50vh] px-6 pb-6">
          {/* Decorative Line */}
          <div className="w-16 h-1 rounded-full nature-gradient mb-6" />

          {/* Students Image */}
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
            <img
              src={topic.studentsImage}
              alt={`Students who wrote the ${topic.title} essay`}
              className="w-full h-auto object-cover"
            />
            <div className="bg-muted/50 p-3 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Essay Authors:</span> {topic.authors}
              </p>
            </div>
          </div>
          
          <div className="prose prose-sm max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-foreground/90 leading-relaxed mb-4 last:mb-0 text-base"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center">
              Amba School • Waste Management Project
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TopicModal;
