import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full nature-gradient flex items-center justify-center">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-serif font-bold text-foreground">
              Managing Waste Responsibly
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            A school project by Amba School students on responsible waste management.
          </p>
          <p className="text-xs text-muted-foreground">
            © 2024 Amba School for Excellence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
