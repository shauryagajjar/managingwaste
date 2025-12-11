import { useState } from "react";
import Layout from "@/components/Layout";
import TopicCard from "@/components/TopicCard";
import TopicModal from "@/components/TopicModal";
import { topics, Topic } from "@/data/topics";
import { BookOpen, Leaf, Recycle, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import topicsHeroBg from "@/assets/topics-hero-bg.jpg";

const Topics = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gridRef = useScrollAnimation();

  const handleReadMore = (topic: Topic) => {
    setSelectedTopic(topic);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTopic(null);
  };

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={topicsHeroBg} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>

        {/* Animated Decorative Elements */}
        <div className="absolute top-16 left-[10%] w-40 h-40 rounded-full bg-green-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-[10%] w-48 h-48 rounded-full bg-blue-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Icons */}
        <div className="absolute top-24 left-[15%] floating opacity-40">
          <div className="p-3 rounded-full bg-primary/30 backdrop-blur-sm">
            <Leaf className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-32 right-[20%] floating opacity-40" style={{ animationDelay: '-2s' }}>
          <div className="p-3 rounded-full bg-accent/30 backdrop-blur-sm">
            <Recycle className="w-7 h-7 text-accent" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 py-20 page-transition">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Research Topics</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Amba School Project <span className="gradient-text animate-gradient">Topics</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore our research on different types of waste and learn how each impacts 
            our environment and health. Click on any topic to read the full essay.
          </p>
          
          {/* Decorative Line */}
          <div className="mt-8 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-24 h-1 rounded-full nature-gradient animate-shimmer" />
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section 
        ref={gridRef.ref}
        className="py-16 md:py-24 relative"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 hero-pattern opacity-40" />
        
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ease-out ${gridRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div 
                key={topic.id}
                className="transition-all duration-700 ease-out"
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  opacity: gridRef.isVisible ? 1 : 0,
                  transform: gridRef.isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'
                }}
              >
                <TopicCard topic={topic} onReadMore={handleReadMore} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Modal */}
      <TopicModal
        topic={selectedTopic}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Layout>
  );
};

export default Topics;
