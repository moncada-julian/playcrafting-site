import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/constants";

interface ClientLogoGridProps {
  title?: string;
}

export default function ClientLogoGrid({ title = "Our Clients Include" }: ClientLogoGridProps) {
  return (
    <section className="py-16 bg-pc-dark">
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h3 className="text-heading font-medium text-pc-light/80 text-center mb-10">
            {title}
          </h3>
        )}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="w-20 h-16 md:w-24 md:h-20 relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.src}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
