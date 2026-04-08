import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="flex items-center gap-3 group mb-2">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-secondary overflow-hidden border border-border group-hover:border-primary/50 transition-all duration-300">
              <img
                src="/CLOUDEXORAnobackground.png"
                alt="CloudExora Logo"
                className="object-contain w-10 h-10 scale-[1.5] group-hover:scale-[1.6] transition-transform duration-500"
              />
            </div>
            <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
              Cloud<span className="gradient-text">Exora</span>
            </span>
          </a>
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
        © {new Date().getFullYear()} CloudExora. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
