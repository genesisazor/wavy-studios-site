import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <h1 className="font-display text-[12vw] md:text-[8vw] leading-none">ABOUT</h1>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-6">
                <p className="font-body text-xl leading-relaxed">
                  [WAVY] is a multimedia creative practice operating at the intersection of fine
                  art, commercial work, and late-night experiments gone too far.
                </p>
              </div>

              <div className="space-y-6 font-body text-muted-foreground">
                <p>
                  Founded in the quiet hours between midnight and 4 AM, this studio exists to create
                  work that refuses to fit neatly into categories. Photography that feels like
                  dreams. Illustrations that talk back. Animations that loop forever in your mind.
                </p>

                <p>
                  We believe in controlled chaos, intentional imperfection, and the power of a
                  well-placed void. Every piece in our gallery and every product in our shop comes
                  from the same place: an obsessive need to make something that didn't exist before.
                </p>

                <p>
                  Whether you're here to browse the gallery, pick up a print, or just stare into the
                  aesthetic void for a while — welcome. Stay as long as you like.
                </p>
              </div>

              <div className="pt-8">
                <a href="mailto:hello@studio.com">
                  <Button variant="bumper" size="lg">
                    Get in Touch
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square border border-foreground overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                  alt="Studio portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-foreground py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="font-display text-5xl md:text-7xl block">47</span>
              <span className="font-body text-sm uppercase tracking-widest text-muted-foreground">
                Projects
              </span>
            </div>
            <div>
              <span className="font-display text-5xl md:text-7xl block text-primary">∞</span>
              <span className="font-body text-sm uppercase tracking-widest text-muted-foreground">
                Ideas
              </span>
            </div>
            <div>
              <span className="font-display text-5xl md:text-7xl block">3AM</span>
              <span className="font-body text-sm uppercase tracking-widest text-muted-foreground">
                Peak Hours
              </span>
            </div>
            <div>
              <span className="font-display text-5xl md:text-7xl block">1</span>
              <span className="font-body text-sm uppercase tracking-widest text-muted-foreground">
                Vision
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl md:text-6xl mb-12">SERVICES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Commercial Photography", desc: "Brand campaigns, product shots, editorial work" },
              { title: "Custom Illustration", desc: "From concept to final artwork, any style" },
              { title: "Motion & Animation", desc: "Loops, bumpers, explainers, music videos" },
              { title: "Art Direction", desc: "Visual strategy and creative direction for brands" },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group border border-foreground p-8 transition-all duration-300 hover:bg-primary hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-display text-2xl mb-2 group-hover:text-primary-foreground transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
