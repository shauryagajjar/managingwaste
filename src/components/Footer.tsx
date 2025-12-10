import { Leaf, Instagram, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Gradient Background */}
      <div className="absolute inset-0 nature-gradient opacity-5" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl nature-gradient flex items-center justify-center glow">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-bold text-foreground">
              Managing Waste Responsibly
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground max-w-md">
            A school project by Amba School for Excellence students on responsible waste management.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a
              href="https://ambaschool.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-all"
            >
              <Globe className="w-4 h-4" />
              ambaschool.org
            </a>

            <a
              href="https://instagram.com/ambaschool"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-all"
            >
              <Instagram className="w-4 h-4" />
              @ambaschool
            </a>

            <a
              href="tel:+919924345200"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-all"
            >
              <Phone className="w-4 h-4" />
              +91 9924345200
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/70 mt-4">
            © 2024 Amba School for Excellence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
