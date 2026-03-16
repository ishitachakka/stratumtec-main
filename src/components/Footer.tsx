const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border px-6 md:px-12 py-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <span className="font-display italic text-2xl text-foreground">Monolith Studio</span>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-4">
            Architectural Visualization
          </p>
        </div>
        <div className="col-span-6 md:col-span-2 md:col-start-7">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-4">Links</span>
          <a href="#work" className="font-mono text-xs uppercase tracking-widest text-foreground block mb-2 hover:text-primary transition-colors">Work</a>
          <a href="#about" className="font-mono text-xs uppercase tracking-widest text-foreground block mb-2 hover:text-primary transition-colors">Studio</a>
          <a href="#contact" className="font-mono text-xs uppercase tracking-widest text-foreground block hover:text-primary transition-colors">Contact</a>
        </div>
        <div className="col-span-6 md:col-span-3 md:col-start-10">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-4">Inquiries</span>
          <a href="mailto:hello@monolith.studio" className="font-mono text-xs uppercase tracking-widest text-foreground block hover:text-primary transition-colors">
            hello@monolith.studio
          </a>
        </div>
        <div className="col-span-12 mt-16 pt-8 border-t border-border">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            © 2024 Monolith Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
