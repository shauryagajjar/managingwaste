import { Leaf, Instagram, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full nature-gradient flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-serif font-bold text-foreground">
                Managing Waste Responsibly
              </span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              A school project by Amba School students.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-3">
            <h4 className="font-semibold text-foreground text-sm">Contact Us</h4>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://ambaschool.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                ambaschool.org
              </a>
              <a
                href="tel:+919924345200"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9924345200
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h4 className="font-semibold text-foreground text-sm">Follow Us</h4>
            <a
              href="https://instagram.com/ambaschool"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary text-sm font-medium transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @ambaschool
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Amba School for Excellence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
