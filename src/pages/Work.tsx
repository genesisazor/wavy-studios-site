import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryCard from "@/components/GalleryCard";
import SectionDivider from "@/components/SectionDivider";
import dontLookDown from "@/assets/work/DontLookDown.jpg";
import unionTurnpike from "@/assets/work/UnionTurnpike.gif";

const categories = ["All", "Photography", "Illustration", "Animation", "Zines", "Cartoons"];

const workItems = [
  {
    id: 1,
    title: "Union Turnpike",
    category: "Animation",
    image: unionTurnpike,
    isVideo: false,
  },
  {
    id: 2,
    title: "Void Portrait No. 3",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Don't Look Down",
    category: "Illustration",
    image: dontLookDown,
  },
  {
    id: 4,
    title: "Neon Decay",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Issue #12: Chaos Theory",
    category: "Zines",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop",
  },
  {
    id: 6,
    title: "The Last Broadcast",
    category: "Cartoons",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Abstract Form No. 7",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=600&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Loop #45",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&h=600&fit=crop",
    isVideo: false,
  },
  {
    id: 9,
    title: "Fragments",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1506792006437-256b665541e2?w=600&h=600&fit=crop",
  },
];

const Work = () => {
  const [searchParams] = useSearchParams(); const categoryParam = searchParams.get("category"); const initialCategory = categories.find((c) => c.toLowerCase() === categoryParam?.toLowerCase()) || "All"; const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredWork =
    activeCategory === "All"
      ? workItems
      : workItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <h1 className="font-display text-[12vw] md:text-[8vw] leading-none">WORK</h1>
          <p className="font-body text-muted-foreground text-lg mt-4 max-w-md">
            A collection of visual experiments, commissioned pieces, and personal obsessions.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-body text-sm uppercase tracking-widest border transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Gallery Grid */}
      <section className="px-6 pb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWork.map((work, index) => (
              <div
                key={work.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <GalleryCard
                  title={work.title}
                  category={work.category}
                  image={work.image}
                  isVideo={work.isVideo}
                />
              </div>
            ))}
          </div>

          {filteredWork.length === 0 && (
            <div className="text-center py-24">
              <p className="font-display text-2xl text-muted-foreground">
                No work found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
