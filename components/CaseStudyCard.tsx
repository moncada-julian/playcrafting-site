import Image from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  slug: string;
  image: string;
  description: string;
}

export default function CaseStudyCard({
  title,
  slug,
  image,
  description,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group block bg-pc-gray rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
    >
      <div className="aspect-video relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
              </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-pc-light mb-2 group-hover:text-pc-pink transition-colors">
          {title}
        </h3>
        <p className="text-small text-pc-light/70 line-clamp-2">{description}</p>
        <div className="mt-4 text-pc-pink font-medium text-small group-hover:translate-x-2 transition-transform">
          Explore &gt;&gt;
        </div>
      </div>
    </Link>
  );
}
