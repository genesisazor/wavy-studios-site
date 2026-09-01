import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-foreground bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-3xl tracking-tight">
              [WAVY]
            </Link>
            <p className="font-body text-sm text-muted-foreground mt-4 max-w-xs">
              Multimedia art, prints, and weird things for your walls and wardrobe.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <span className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Navigate
            </span>
            <Link to="/work" className="font-body text-sm hover:text-primary transition-colors">
              Work
            </Link>
            <Link to="/shop" className="font-body text-sm hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/about" className="font-body text-sm hover:text-primary transition-colors">
              About
            </Link>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <span className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Connect
            </span>
            <a href="#" className="font-body text-sm hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="font-body text-sm hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="mailto:gazor.art@gmail.com" className="font-body text-sm hover:text-primary transition-colors">
              Email
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} [WAVY]. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Made with controlled chaos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
