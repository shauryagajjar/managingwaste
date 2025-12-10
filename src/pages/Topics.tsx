import { useState } from "react";
import Layout from "@/components/Layout";
import TopicCard from "@/components/TopicCard";
import TopicModal from "@/components/TopicModal";
import { topics, Topic } from "@/data/topics";
import { BookOpen } from "lucide-react";
import patternBg from "@/assets/nature-bg-pattern.jpg";

const Topics = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-40">
          <img src={patternBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />

        {/* Decorative Blobs */}
        <div className="absolute top-10 right-20 w-64 h-64 decorative-blob opacity-20" />
        <div className="absolute bottom-10 left-10 w-48 h-48 decorative-blob opacity-20" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="section-badge mb-6 animate-fade-in">
            <BookOpen className="w-4 h-4" />
            <span>Research Topics</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in">
            Waste Management <span className="gradient-text">Topics</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Explore our research on different types of waste and learn how each impacts 
            our environment and health. Click on any topic to read the full essay.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div
                key={topic.id}
                style={{ animationDelay: `${index * 0.1}s` }}
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
