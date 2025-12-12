import { Instagram, Phone, Globe } from "lucide-react";
import ambaLogo from "@/assets/amba-school-logo.jfif";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Gradient Background */}
      <div className="absolute inset-0 nature-gradient opacity-10" />
      <div className="absolute inset-0 mesh-gradient" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white/90 flex items-center justify-center p-2 shadow-lg">
              <img src={ambaLogo} alt="Amba School Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-serif text-xl font-bold text-foreground">
              Amba School project
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground">A school project by Amba School For Excellence Grades 7 and 8 students</p>

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
            © 2025 Amba School for Excellence. All rights reserved.
                         Built By Shaurya Gajjar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
