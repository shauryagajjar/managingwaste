import { Topic } from "@/data/topics";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <DialogContent className="max-w-3xl max-h-[85vh] p-0 overflow-hidden">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <DialogHeader className="absolute bottom-0 left-0 right-0 p-6">
            <DialogTitle className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              {topic.title}
            </DialogTitle>
          </DialogHeader>
        </div>
        <ScrollArea className="max-h-[50vh] px-6 pb-6">
          <div className="prose prose-sm max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-foreground/90 leading-relaxed mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TopicModal;
