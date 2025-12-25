interface SectionDividerProps {
  text?: string;
}

const SectionDivider = ({ text }: SectionDividerProps) => {
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-foreground" />
      </div>
      {text && (
        <div className="relative flex justify-center">
          <span className="bg-background px-6 font-display text-lg tracking-widest text-primary">
            {text}
          </span>
        </div>
      )}
    </div>
  );
};

export default SectionDivider;
