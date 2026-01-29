interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-pc-light" : "text-pc-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-body max-w-3xl ${centered ? "mx-auto" : ""} ${
            light ? "text-pc-light/80" : "text-pc-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
