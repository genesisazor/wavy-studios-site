import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryCard from "@/components/GalleryCard";
import SectionDivider from "@/components/SectionDivider";
import dontLookDown from "@/assets/work/DontLookDown.jpg";
import unionTurnpike from "@/assets/work/UnionTurnpike.gif";

const categories = ["All", "Photography", "Illustration", "Animation", "Zines", "Cartoons"];

const wixImage = (id: string) =>
  `https://static.wixstatic.com/media/${id}~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/${id}~mv2.jpg`;

const workItems = [
  {
    id: 1,
    title: "Union Turnpike",
    category: "Animation",
    image: unionTurnpike,
    isVideo: false,
  },
  {
    id: 3,
    title: "Don't Look Down",
    category: "Illustration",
    image: dontLookDown,
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
];

const photographyGalleries = [
  {
    city: "New York City",
    neighborhoods: [
      {
        name: "Manhattan",
        images: [
          "0286ff_d00fe689f36e4b219e3928a468b3184a",
          "0286ff_9e9dfddb183b413d9279b0284800968d",
          "0286ff_1eb1793d7b974b7094598ba8becb0a23",
          "0286ff_88eabc4974b742f7a78e684704991ad5",
          "0286ff_f9248d1911b941a3a2d26de1c3fdc4c0",
          "0286ff_03a69bd7bf874bd48b8f949197895ce8",
          "0286ff_d93433b751e94ac8b21386601f81b4ed",
          "0286ff_81c067acd33547738aad8485038f712e",
          "0286ff_f12bff0152404317b0c90dd65be889ad",
        ].map(wixImage),
      },
      {
        name: "Brooklyn",
        images: [
          "0286ff_b083ab969fe94c86abf27cc6b84230b7",
          "0286ff_38c0c734e849472bb78a8a2ebcd5a00b",
          "0286ff_d8410ccd3c41497684048fe75d109897",
          "0286ff_144578b81a814f87bd1b0adf9a24e95a",
          "0286ff_963836d277014fbfa97884d5805eb65e",
          "0286ff_63ac2073cf334945b218e5367e0aee5c",
        ].map(wixImage),
      },
    ],
  },
  {
    city: "Atlanta",
    neighborhoods: [
      {
        name: "The West End",
        images: [
          "0286ff_80819139e004419c97dc73e0d258d852",
          "0286ff_fbbceba16a80408dac6b394db69fd024",
          "0286ff_cfbfb68e4adf4809b0a0d50ca22c164a",
          "0286ff_be992cf12925444b9e5daef0617d15cc",
          "0286ff_dca9f744cadf41caab8bb38529738712",
          "0286ff_469ebd2e6d9244e4b12b759e5de7433a",
        ].map(wixImage),
      },
      {
        name: "Inman Park",
        images: [
          "0286ff_c17cdce59883480fa5558b21497a99c1",
          "0286ff_806184dbaa4c4e788f51b499694278d2",
          "0286ff_eab8bd4ef62040f68787b40cae3ce91e",
          "0286ff_bbfb78cd9b154bc3b7e2401c77fb59dc",
          "0286ff_1a408e1b23034c0898620b8b316a62c3",
        ].map(wixImage),
      },
      {
        name: "Downtown Atlanta",
        images: [
          "0286ff_d7642de5f77b4a16b037ace97e616824",
          "0286ff_4bc83db94a5449a28cf6996b09d8dbcb",
          "0286ff_c991a392db4748e99edf4e1e86610b10",
          "0286ff_a0314afa0ecd4ae2acb6a4c58dd42e9f",
          "0286ff_4ac6fd371145415e99c241c19ee1eb49",
          "0286ff_b52acbf3d6044c869499132a4bd5e10e",
        ].map(wixImage),
      },
    ],
  },
];

const Work = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const initialCategory =
    categories.find((c) => c.toLowerCase() === categoryParam?.toLowerCase()) || "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredWork =
    activeCategory === "All"
      ? workItems
      : workItems.filter((item) => item.category === activeCategory);

  const isPhotography = activeCategory === "Photography";

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

      {isPhotography ? (
        <section className="px-6 pb-24">
          <div className="container mx-auto space-y-12">
            {photographyGalleries.map((gallery) => (
              <div key={gallery.city}>
                <h2 className="font-display text-3xl md:text-5xl mb-6">{gallery.city}</h2>

                <div className="space-y-8">
                  {gallery.neighborhoods.map((neighborhood) => (
                    <div key={neighborhood.name}>
                      <h3 className="font-body text-xs uppercase tracking-widest text-muted-foreground border-b border-foreground pb-2 mb-4">
                        {neighborhood.name}
                      </h3>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {neighborhood.images.map((image, index) => (
                          <div key={image} className="animate-fade-in">
                            <GalleryCard
                              title={`${neighborhood.name} No. ${index + 1}`}
                              category="Photography"
                              image={image}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
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
      )}

      <Footer />
    </div>
  );
};

export default Work;
