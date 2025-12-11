import { useState } from "react";
import Layout from "@/components/Layout";
import TopicCard from "@/components/TopicCard";
import TopicModal from "@/components/TopicModal";
import { topics, Topic } from "@/data/topics";
import { BookOpen, Leaf, Recycle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
      {/* Header Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

        {/* Animated Decorative Elements */}
        <div className="absolute top-10 right-10 w-72 h-72 decorative-blob opacity-25" />
        <div className="absolute bottom-20 left-10 w-56 h-56 decorative-blob opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 decorative-blob opacity-10" />
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-[15%] floating opacity-20">
          <Leaf className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute bottom-32 right-[20%] floating opacity-20" style={{ animationDelay: '-2s' }}>
          <Recycle className="w-10 h-10 text-accent" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 page-transition">
          <div className="section-badge mb-6 animate-pulse-glow">
            <BookOpen className="w-4 h-4" />
            <span>Research Topics</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Amba School Project <span className="gradient-text animate-gradient">Topics</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our research on different types of waste and learn how each impacts 
            our environment and health. Click on any topic to read the full essay.
          </p>
          
          {/* Decorative Line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 rounded-full nature-gradient animate-shimmer" />
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section 
        ref={gridRef.ref}
        className="py-16 md:py-24 relative"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${gridRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div 
                key={topic.id}
                className="transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
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
