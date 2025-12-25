import { useState } from "react";

interface GalleryCardProps {
  title: string;
  category: string;
  image: string;
  isVideo?: boolean;
  videoSrc?: string;
}

const GalleryCard = ({ title, category, image, isVideo, videoSrc }: GalleryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative cursor-pointer overflow-hidden border border-foreground transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? "var(--sky-glow-strong)" : "none",
      }}
    >
      {/* Media Container */}
      <div className="aspect-square overflow-hidden bg-muted">
        {isVideo && videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-background/90 flex flex-col justify-end p-6 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-body text-xs uppercase tracking-widest text-primary mb-2">
          {category}
        </span>
        <h3 className="font-display text-2xl">{title}</h3>
      </div>

      {/* Corner Accent */}
      <div
        className={`absolute top-0 right-0 w-8 h-8 bg-primary transition-all duration-500 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
    </div>
  );
};

export default GalleryCard;
