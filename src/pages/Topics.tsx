import { useState } from "react";
import Layout from "@/components/Layout";
import TopicCard from "@/components/TopicCard";
import TopicModal from "@/components/TopicModal";
import { topics, Topic } from "@/data/topics";

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
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground animate-fade-in">
            Waste Management Topics
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Explore our research on different types of waste and learn how each impacts 
            our environment and health. Click on any topic to read the full essay.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
