import Layout from "@/components/Layout";
import { ExternalLink, Instagram, Phone, Globe } from "lucide-react";
import ambaLogo from "@/assets/amba-school-logo.svg";
import studentsImage from "@/assets/students-project.jpg";

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
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground animate-fade-in">
            About This Project
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A collaborative initiative by Amba School for Excellence students.
          </p>
        </div>
      </section>

      {/* School Info Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-card p-6 md:p-10 max-w-4xl mx-auto animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src={ambaLogo}
                  alt="Amba School for Excellence Logo"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>

              {/* School Details */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Amba School for Excellence
                </h2>
                <p className="mt-2 text-muted-foreground">
                  A new age school grounded in values and tradition, dedicated to nurturing 
                  well-rounded individuals.
                </p>

                {/* Contact Links */}
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href="https://ambaschool.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary text-sm font-medium transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    ambaschool.org
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href="https://instagram.com/ambaschool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-lg text-accent text-sm font-medium transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    @ambaschool
                  </a>

                  <a
                    href="tel:+919924345200"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-muted-foreground text-sm font-medium transition-colors"
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
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8 animate-fade-in">
              About This Project
            </h2>

            <div className="bg-card rounded-2xl shadow-card p-6 md:p-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="prose prose-lg max-w-none">
                {paragraphs.map((paragraph, index) => {
                  if (index === 0) {
                    return (
                      <h3 key={index} className="font-serif text-xl font-bold text-primary mb-4">
                        {paragraph}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
                    return (
                      <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-foreground/80 my-6">
                        {paragraph}
                      </blockquote>
                    );
                  }
                  return (
                    <p key={index} className="text-foreground/90 leading-relaxed mb-4">
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
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8 animate-fade-in">
            Project Gallery
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Student Project Image */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-card animate-fade-in">
              <img
                src={studentsImage}
                alt="Students working on waste management project"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Placeholder Images */}
            {[2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="aspect-[4/3] rounded-xl overflow-hidden shadow-card bg-muted flex items-center justify-center animate-fade-in"
                style={{ animationDelay: `${num * 0.1}s` }}
              >
                <div className="text-center text-muted-foreground p-4">
                  <div className="w-16 h-16 rounded-full bg-muted-foreground/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📷</span>
                  </div>
                  <p className="text-sm">Project Photo {num}</p>
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
