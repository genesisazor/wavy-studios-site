import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import SectionDivider from "@/components/SectionDivider";
import ComingSoonDialog from "@/components/ComingSoonDialog";

const categories = ["All", "Apparel", "Prints", "Stickers", "Collectibles"];

const products = [
  {
    id: 1,
    name: "Void Tee",
    price: 35,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Midnight Static Print",
    price: 45,
    category: "Prints",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Chaos Pack (6 Stickers)",
    price: 12,
    category: "Stickers",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Electric Dreams Poster",
    price: 55,
    category: "Prints",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Studio Hoodie",
    price: 75,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Zine Bundle Vol. 1-3",
    price: 28,
    category: "Collectibles",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Neon Skull Pin",
    price: 15,
    category: "Collectibles",
    image: "https://images.unsplash.com/photo-1613826877479-8d08c0e00e63?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Glitch Sticker Set",
    price: 8,
    category: "Stickers",
    image: "https://images.unsplash.com/photo-1589810635657-232948472d98?w=400&h=400&fit=crop",
  },
  {
    id: 9,
    name: "Limited Edition Print #12",
    price: 120,
    category: "Prints",
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=400&h=400&fit=crop",
  },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <h1 className="font-display text-[12vw] md:text-[8vw] leading-none">SHOP</h1>
          <p className="font-body text-muted-foreground text-lg mt-4 max-w-md">
            Original prints, apparel, and weird collectibles. Each item ships with a piece of our
            soul (metaphorically).
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

      {/* Products Grid */}
      <section className="px-6 pb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  onAddToCart={() => setComingSoonOpen(true)}
                />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="font-display text-2xl text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Shipping Info */}
      <section className="border-t border-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-display text-xl mb-2">FREE SHIPPING</h3>
              <p className="font-body text-sm text-muted-foreground">On orders over $50</p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-2">SECURE CHECKOUT</h3>
              <p className="font-body text-sm text-muted-foreground">Protected payments</p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-2">LIMITED EDITIONS</h3>
              <p className="font-body text-sm text-muted-foreground">When they're gone, they're gone</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ComingSoonDialog open={comingSoonOpen} onOpenChange={setComingSoonOpen} />
    </div>
  );
};

export default Shop;
