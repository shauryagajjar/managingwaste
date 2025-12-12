import Layout from "@/components/Layout";
import { Users, Sparkles, ImageIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import galleryPic1 from "@/assets/gallery-pic1.jpg";
import galleryPic2 from "@/assets/gallery-pic2.jpg";
import galleryPic4 from "@/assets/gallery-pic4.png";
import galleryPic5 from "@/assets/gallery-pic5.png";
import galleryPic6 from "@/assets/gallery-pic6.png";
import aboutTopImage from "@/assets/about-top-image.jpg";
import essayPic1 from "@/assets/essay-pic1.jpg";
import essayPic2 from "@/assets/essay-pic2.jpg";
import essayPic3 from "@/assets/essay-pic3.png";

const About = () => {
  const projectRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-start justify-center overflow-hidden pt-24 bg-muted/30">
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-[15%] w-40 h-40 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 text-center relative z-10 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Story</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
            About <span className="gradient-text animate-gradient">Us</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            A collaborative initiative by Amba School for Excellence students.
          </p>
          
          {/* Decorative Line */}
          <div className="mt-8 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-24 h-1 rounded-full nature-gradient" />
          </div>
        </div>
      </section>

      {/* Project Description Section */}
      <section 
        ref={projectRef.ref}
        className="py-12 md:py-20 relative overflow-hidden"
      >
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 hero-pattern opacity-30" />
        
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ease-out ${projectRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="card-enhanced p-8 md:p-12 backdrop-blur-sm bg-card/95 shadow-2xl">
              <div className="prose prose-lg max-w-none">
              {/* Top Image */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={aboutTopImage}
                  alt="Students at Gandhinagar Municipal Corporation Vermi Compost Plant"
                  className="w-full h-auto object-cover"
                />
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-bold gradient-text mb-6">
                  Managing Waste Responsibly
                </h3>
                
                <p className="text-foreground/85 leading-relaxed mb-5 text-base">
                  We, the students of Grades 7 and 8, began our inquiry with one important Driving Question:
                </p>
                
                <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 my-8 text-lg bg-primary/5 py-4 pr-4 rounded-r-xl">
                  "How can we, as responsible citizens, design solutions to reduce and manage waste in our community?"
                </blockquote>
                
                <p className="text-foreground/85 leading-relaxed mb-5 text-base">
                  This question guided our entire learning journey and helped us understand that waste management is not just the government's responsibility—it is ours too.
                </p>
                
                <p className="text-foreground/85 leading-relaxed mb-5 text-base">
                  We started by observing powerful images of overflowing landfills and using a See–Think–Wonder chart to record what we noticed, what we thought, and what we wondered. From this, we developed three guiding questions that shaped our inquiry:
                </p>
                
                <ol className="list-decimal list-inside text-foreground/85 leading-relaxed mb-5 text-base space-y-3 pl-4 bg-muted/30 p-4 rounded-xl">
                  <li>What types of waste are generated in our community, and how do they impact human health and the environment?</li>
                  <li>What are the waste management problems in our community?</li>
                  <li>What solutions and awareness strategies can make waste management more effective and sustainable?</li>
                </ol>

                {/* Essay Image 1 */}
                <div className="my-8 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src={essayPic1}
                    alt="Students visiting waste management facility"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <p className="text-foreground/85 leading-relaxed mb-5 text-base">
                  To answer our first guiding question, we researched different kinds of waste and visited the Gandhinagar Municipal Corporation to see how waste is collected and processed. We also met experts and studied agricultural waste, biomedical waste, e-waste, plastic waste, and paper waste in small groups. Presenting our findings helped us understand why proper waste management is essential.
                </p>

                {/* Essay Image 2 */}
                <div className="my-8 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src={essayPic2}
                    alt="Students discussing project in classroom"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <p className="text-foreground/85 leading-relaxed mb-5 text-base">
                  For our second guiding question, we explored the waste management challenges in our community. We created flowcharts to show what we thought happened to waste after it was thrown away. Then, we met the local maintenance team to learn about real issues. As a class, we decided to conduct a survey in three buildings as a pilot project. By interacting with residents and analysing the data, we identified problems as well as opportunities for improvement.
                </p>

                {/* Essay Image 3 */}
                <div className="my-8 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src={essayPic3}
                    alt="Expert session on agricultural waste management"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <p className="text-foreground/85 leading-relaxed mb-5 text-base">
                  Our third guiding question led us to design practical and meaningful solutions. We studied how countries like Japan, Singapore, the US, Ukraine, and South Korea manage waste and shared their innovative practices. Using our survey data, we created building profiles and prepared a proposal with realistic solutions, which we presented to the maintenance department. We then conducted awareness and training sessions for the residents of the surveyed buildings.
                </p>
                
                <p className="text-foreground/85 leading-relaxed mb-5 text-base">
                  The results were encouraging—residents have now begun segregating wet and dry waste regularly. What started as a school project has now become a collaborative effort between Amba School and the Sector 4 maintenance team.
                </p>
                
                <p className="text-foreground/85 leading-relaxed mb-5 text-base font-medium">
                  This journey taught us that informed citizens can create real change. We are proud of the impact we have made, and we hope our learning inspires others to take action too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        ref={galleryRef.ref}
        className="py-12 md:py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ease-out ${galleryRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Project <span className="gradient-text">Gallery</span>
            </h2>
            <p className="mt-3 text-muted-foreground">Moments from our waste management journey</p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 rounded-full nature-gradient" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { src: galleryPic6, alt: "Community pledge event for waste management" },
              { src: galleryPic1, alt: "Students in group discussion during project planning" },
              { src: galleryPic2, alt: "Students collaborating on research work" },
              { src: galleryPic4, alt: "Students presenting their findings" },
              { src: galleryPic5, alt: "Classroom session with teacher and students" },
              { src: galleryPic6, alt: "Students in meeting discussion" },
            ].map((img, index) => (
              <div 
                key={index}
                className="card-enhanced overflow-hidden group transition-all duration-500"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  opacity: galleryRef.isVisible ? 1 : 0,
                  transform: galleryRef.isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="aspect-[4/3] relative">
                  {img.src ? (
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted/50 flex flex-col items-center justify-center gap-3">
                      <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
                      <span className="text-sm text-muted-foreground">Photo Coming Soon</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
