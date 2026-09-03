import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
  onAddToCart?: () => void;
}

const ProductCard = ({ name, price, image, category, onAddToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-secondary/30 p-4 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? "var(--sky-glow)" : "none",
      }}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain float-animation transition-transform duration-500 group-hover:scale-105"
          style={{
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">
          {category}
        </span>
        <h3 className="font-display text-xl">{name}</h3>
        <p className="font-body text-lg font-semibold">${price.toFixed(2)}</p>
      </div>

      {/* Add to Cart Button */}
      <div
        className={`mt-4 transition-all duration-500 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Button variant="bumper" size="sm" className="w-full" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
