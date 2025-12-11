import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Recycle, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-waste-management.jpg";
import patternBg from "@/assets/nature-bg-pattern.jpg";
import ambaLogo from "@/assets/amba-school-logo.svg";

const Index = () => {
  const featuresRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Waste Management Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 decorative-blob animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 decorative-blob animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="section-badge mb-6 animate-fade-in">
              <img src={ambaLogo} alt="Amba School" className="w-5 h-5" />
              <span>School Project by Amba School</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in">
              Managing Waste{" "}
              <span className="gradient-text">Responsibly</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.15s" }}>
              A school project on responsible waste management created by Amba School students. 
              Explore topics, learn real impacts, and understand how responsible waste disposal 
              protects our environment.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="gap-2 text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Link to="/topics">
                  <BookOpen className="w-5 h-5" />
                  Explore Topics
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="gap-2 text-base px-8 py-6 rounded-xl glass">
                <Link to="/about">
                  <Users className="w-5 h-5" />
                  About the Project
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef.ref}
        className="py-20 md:py-32 relative overflow-hidden"
      >
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <img src={patternBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${featuresRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-badge mb-4">
              <Recycle className="w-4 h-4" />
              <span>Learn & Discover</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
              What You'll Learn
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore different types of waste and their impact on our world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Environmental Impact",
                description:
                  "Understand how different types of waste affect our ecosystems, wildlife, and planet.",
                color: "from-emerald-500/20 to-teal-500/20",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Human Health",
                description:
                  "Learn about the health risks associated with improper waste management.",
                color: "from-rose-500/20 to-orange-500/20",
              },
              {
                icon: <Recycle className="w-8 h-8" />,
                title: "Solutions",
                description:
                  "Discover practical solutions and strategies for responsible waste management.",
                color: "from-blue-500/20 to-cyan-500/20",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`card-enhanced p-8 text-center transition-all duration-700 delay-${index * 150}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-6 text-primary`}>
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef.ref}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 nature-gradient opacity-10" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${ctaRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto glow">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start exploring our research on waste management and learn how small changes can create big impact.
            </p>
            <Button asChild size="lg" className="gap-2 text-base px-8 py-6 rounded-xl">
              <Link to="/topics">
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
