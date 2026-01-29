import Image from "next/image";

interface GameCardProps {
  title: string;
  developer: string;
  image: string;
  description: string;
}

export default function GameCard({
  title,
  developer,
  image,
  description,
}: GameCardProps) {
  return (
    <div className="bg-pc-gray rounded-xl overflow-hidden">
      <div className="aspect-video relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized={image.endsWith('.gif')}
        />
      </div>
      <div className="p-5">
        <h4 className="text-lg font-bold text-pc-light mb-1">{title}</h4>
        <p className="text-caption text-pc-pink mb-3">by {developer}</p>
        <p className="text-small text-pc-light/70 line-clamp-3">{description}</p>
      </div>
    </div>
  );
}
