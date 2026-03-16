const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background flex items-center justify-between px-6 md:px-12">
      <span className="font-mono text-xs uppercase tracking-widest text-foreground">
        Monolith Studio
      </span>
      <div className="hidden md:flex items-center gap-8">
        <a href="#work" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200">
          Work
        </a>
        <a href="#about" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200">
          Studio
        </a>
        <a href="#contact" className="font-mono text-xs uppercase tracking-widest text-primary hover:text-foreground transition-colors duration-200">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
