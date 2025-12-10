import Layout from "@/components/Layout";
import { ExternalLink, Instagram, Phone, Globe, Users, Award } from "lucide-react";
import ambaLogo from "@/assets/amba-school-logo.svg";
import studentsImage from "@/assets/students-project.jpg";
import patternBg from "@/assets/nature-bg-pattern.jpg";

const About = () => {
  const projectDescription = `Managing Waste Responsibly
We, the students of Grades 7 and 8, began our inquiry with one important Driving Question:
"How can we, as responsible citizens, design solutions to reduce and manage waste in our community?"
This question guided our entire learning journey and helped us understand that waste management is not just the government's responsibility—it is ours too.
We started by observing powerful images of overflowing landfills and using a See–Think–Wonder chart to record what we noticed, what we thought, and what we wondered. From this, we developed three guiding questions that shaped our inquiry:
What types of waste are generated in our community, and how do they impact human health and the environment?
What are the waste management problems in our community?
What solutions and awareness strategies can make waste management more effective and sustainable?
To answer our first guiding question, we researched different kinds of waste and visited the Gandhinagar Municipal Corporation to see how waste is collected and processed. We also met experts and studied agricultural waste, biomedical waste, e-waste, plastic waste, and paper waste in small groups. Presenting our findings helped us understand why proper waste management is essential.
For our second guiding question, we explored the waste management challenges in our community. We created flowcharts to show what we thought happened to waste after it was thrown away. Then, we met the local maintenance team to learn about real issues. As a class, we decided to conduct a survey in three buildings as a pilot project. By interacting with residents and analysing the data, we identified problems as well as opportunities for improvement.
Our third guiding question led us to design practical and meaningful solutions. We studied how countries like Japan, Singapore, the US, Ukraine, and South Korea manage waste and shared their innovative practices. Using our survey data, we created building profiles and prepared a proposal with realistic solutions, which we presented to the maintenance department. We then conducted awareness and training sessions for the residents of the surveyed buildings.
The results were encouraging—residents have now begun segregating wet and dry waste regularly. What started as a school project has now become a collaborative effort between Amba School and the Sector 4 maintenance team.
This journey taught us that informed citizens can create real change. We are proud of the impact we have made, and we hope our learning inspires others to take action too.`;

  const paragraphs = projectDescription.split("\n").filter(p => p.trim());

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
        <div className="absolute top-10 left-20 w-64 h-64 decorative-blob opacity-20" />
        <div className="absolute bottom-10 right-10 w-48 h-48 decorative-blob opacity-20" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="section-badge mb-6 animate-fade-in">
            <Users className="w-4 h-4" />
            <span>Our Story</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in">
            About This <span className="gradient-text">Project</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A collaborative initiative by Amba School for Excellence students.
          </p>
        </div>
      </section>

      {/* School Info Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="card-enhanced p-8 md:p-12 max-w-4xl mx-auto animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4 glow">
                  <img
                    src={ambaLogo}
                    alt="Amba School for Excellence Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* School Details */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Amba School for Excellence
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  A new age school grounded in values and tradition, dedicated to nurturing 
                  well-rounded individuals who make a difference in the world.
                </p>

                {/* Contact Links */}
                <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
                  <a
                    href="https://ambaschool.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-primary/10 hover:bg-primary/20 rounded-xl text-primary text-sm font-medium transition-all hover:scale-105"
                  >
                    <Globe className="w-4 h-4" />
                    ambaschool.org
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href="https://instagram.com/ambaschool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-accent/10 hover:bg-accent/20 rounded-xl text-accent text-sm font-medium transition-all hover:scale-105"
                  >
                    <Instagram className="w-4 h-4" />
                    @ambaschool
                  </a>

                  <a
                    href="tel:+919924345200"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-muted hover:bg-muted/80 rounded-xl text-muted-foreground text-sm font-medium transition-all hover:scale-105"
                  >
                    <Phone className="w-4 h-4" />
                    +91 9924345200
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 nature-gradient opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="section-badge mb-4 animate-fade-in">
                <Award className="w-4 h-4" />
                <span>Project Journey</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground animate-fade-in">
                About This Project
              </h2>
            </div>

            <div className="card-enhanced p-8 md:p-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="prose prose-lg max-w-none">
                {paragraphs.map((paragraph, index) => {
                  if (index === 0) {
                    return (
                      <h3 key={index} className="font-serif text-2xl font-bold gradient-text mb-6">
                        {paragraph}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
                    return (
                      <blockquote key={index} className="border-l-4 border-primary pl-6 italic text-foreground/80 my-8 text-lg">
                        {paragraph}
                      </blockquote>
                    );
                  }
                  return (
                    <p key={index} className="text-foreground/85 leading-relaxed mb-5 text-base">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground animate-fade-in">
              Project Gallery
            </h2>
            <p className="mt-3 text-muted-foreground">Moments from our waste management journey</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Student Project Image */}
            <div className="card-enhanced overflow-hidden animate-fade-in">
              <div className="aspect-[4/3]">
                <img
                  src={studentsImage}
                  alt="Students working on waste management project"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            {/* Placeholder Images */}
            {[2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="card-enhanced overflow-hidden animate-fade-in"
                style={{ animationDelay: `${num * 0.1}s` }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="text-center text-muted-foreground p-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">📷</span>
                    </div>
                    <p className="text-sm font-medium">Project Photo {num}</p>
                  </div>
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
