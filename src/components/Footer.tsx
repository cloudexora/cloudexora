import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-lg font-bold gradient-text">Deepak Tech Solutions</span>
          <p className="text-muted-foreground text-sm mt-1">Building Future-Ready Digital Solutions</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-muted-foreground text-sm hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-muted-foreground text-sm hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="text-muted-foreground text-sm hover:text-primary transition-colors">Portfolio</a>
          <a href="#contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub"><Github size={18} /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter"><Twitter size={18} /></a>
        </div>
      </div>
      <div className="text-center mt-8 text-muted-foreground text-xs">
        © {new Date().getFullYear()} Deepak Tech Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
