import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import GalleryCard from "@/components/GalleryCard";
import { ArrowDown, ArrowRight } from "lucide-react";
import SineWave from "@/components/SineWave";

const featuredWork = [
  {
    title: "Midnight Static",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=600&fit=crop",
    isVideo: false,
  },
  {
    title: "Void Portrait No. 3",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=600&fit=crop",
    isVideo: false,
  },
  {
    title: "Electric Dreams",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop",
    isVideo: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - "Bumper" Style */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Main Bumper Text */}
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="space-y-4 mb-8">
            <span className="font-body text-sm uppercase tracking-[0.5em] text-muted-foreground block animate-fade-in">
              Multimedia Studio
            </span>
            <h1 className="bumper-text leading-none animate-fade-in" style={{ animationDelay: "0.1s" }}>
              ALWAYS
            </h1>
            <h1
              className="bumper-text leading-none text-primary animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              IN
            </h1>
            <h1
              className="bumper-text leading-none glitch-text animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              MOTION.
            </h1>
          </div>

          <SineWave />

          <p
            className="font-body text-lg text-muted-foreground max-w-md mx-auto mb-12 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Photography. Illustration. Animation. Weird things for your walls.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Link to="/work">
              <Button variant="bumper" size="xl">
                View Work
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="sky" size="xl">
                Shop
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-8 w-px h-32 bg-primary opacity-50" />
        <div className="absolute top-1/3 right-8 w-32 h-px bg-primary opacity-50" />
        <div className="absolute bottom-1/4 left-16 w-4 h-4 border border-primary opacity-50" />
      </section>

      {/* Featured Work Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <SectionDivider text="FEATURED" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {featuredWork.map((work, index) => (
              <div
                key={work.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GalleryCard {...work} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/work">
              <Button variant="outline" size="lg">
                See All Work
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-24 px-6 border-y border-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="font-display text-4xl md:text-6xl leading-tight">
            "CREATE LIKE NO ONE'S{" "}
            <span className="text-primary">WATCHING</span>. SELL LIKE{" "}
            <span className="text-primary">EVERYONE</span> IS."
          </blockquote>
          <p className="font-body text-muted-foreground mt-8 text-lg">
            — Late night philosophy
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Photography", "Illustration", "Animation", "Zines", "Cartoons"].map(
              (category, index) => (
                <Link
                  key={category}
                  to={`/work?category=${category.toLowerCase()}`}
                  className="group border border-foreground p-6 text-center transition-all duration-300 hover:bg-primary hover:border-primary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-display text-xl md:text-2xl group-hover:text-primary-foreground transition-colors">
                    {category}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
