import Image from "next/image";
import Button from "@/components/Button";
import ClientLogoGrid from "@/components/ClientLogoGrid";
import CaseStudyCard from "@/components/CaseStudyCard";
import StatCard from "@/components/StatCard";
import { CASE_STUDIES } from "@/lib/constants";

export const metadata = {
  title: "Our Work - Playcrafting",
  description: "See how Playcrafting helps leading brands leverage the power of play through games, events, and developer engagement.",
};

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/misc/work-bg.png"
            alt="Work background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pc-dark/30 to-pc-dark" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-pc-light mb-6">
            The Power of Play.
          </h1>
          <p className="text-body md:text-xl text-pc-light/80 max-w-3xl mx-auto">
            We create games, host exclusive events, and evangelize exciting new technologies
            through our worldwide network of game developers.
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogoGrid title="Our Clients and Partners Include" />

      {/* What Makes Us Unique */}
      <section className="py-20 bg-pc-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pc-light mb-6">
            What Makes Us Unique
          </h2>
          <p className="text-body text-pc-light/80">
            We&apos;re passionate about gaming both online and in-person. We are both the consumers
            and the creators of games. Our developer network gives us the flexibility to build
            games in any style for any platform. And our events bring together game enthusiasts
            to create unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-pc-gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pc-light text-center mb-4">
            Client Success Stories
          </h2>
          <p className="text-body text-pc-light/70 text-center max-w-2xl mx-auto mb-12">
            Explore our portfolio of award-winning projects.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.slug} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* High Scores */}
      <section className="py-20 bg-pc-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pc-light text-center mb-12">
            Client High Scores
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <StatCard value="20,000+" label="Engaged active and aspiring game developers in our network" highlight />
            <StatCard value="150+" label="Games made with clients to date" />
            <StatCard value="$5M+" label="Of dollars trusted to our network to build games, prototypes, experiences, and more" highlight />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-pc-gray">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pc-light mb-6">
            Want to learn more?
          </h2>
          <Button href="/contact">Get in touch with us</Button>
        </div>
      </section>
    </>
  );
}
