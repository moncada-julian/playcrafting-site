import Image from "next/image";
import Button from "@/components/Button";
import ClientLogoGrid from "@/components/ClientLogoGrid";
import CaseStudyCard from "@/components/CaseStudyCard";
import StatCard from "@/components/StatCard";
import { CASE_STUDIES } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/misc/playnyc-crowd.jpeg"
            alt="Play NYC crowd"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pc-dark/50 via-pc-dark/70 to-pc-dark" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-light text-pc-light mb-2">
            We don&apos;t just talk a good game.
          </h1>
          <p className="text-5xl md:text-7xl font-bold text-pc-light mb-8">
            We build them.
          </p>
          <p className="text-body md:text-xl text-pc-light/80 max-w-3xl mx-auto mb-10">
            We create games, produce exclusive events, and make waves for brands
            to leverage the power of play to reach gamers.
          </p>
          <Button href="/contact">Get in touch with us</Button>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogoGrid />

      {/* What We Do Section */}
      <section className="py-20 bg-pc-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pc-light text-center mb-16">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Game Development */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-pc-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-pc-pink" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pc-light mb-4">Game Development</h3>
              <p className="text-pc-light/70">
                Playcrafting&apos;s game jams gather developers together virtually or in-person
                to explore new technologies, build prototypes, and create full games for our clients.
              </p>
            </div>

            {/* Events and Programming */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-pc-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-pc-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pc-light mb-4">Events and Programming</h3>
              <p className="text-pc-light/70">
                Playcrafting hosts developer-focused events including{" "}
                <a href="https://play-nyc.com" target="_blank" rel="noopener noreferrer" className="text-pc-pink hover:underline">
                  Play NYC
                </a>
                , New York&apos;s premier gaming convention.
              </p>
            </div>

            {/* Developer Engagement */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-pc-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-pc-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pc-light mb-4">Developer Engagement</h3>
              <p className="text-pc-light/70">
                Playcrafting builds developer communities from the ground up, whether IRL through
                events and classes, or online through game jams and digital showcases.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href="/work">
              Want to learn more?
            </Button>
          </div>
        </div>
      </section>

      {/* High Scores Section */}
      <section className="py-20 bg-pc-gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pc-light text-center mb-4">
            High Scores
          </h2>
          <p className="text-body text-pc-light/70 text-center max-w-3xl mx-auto mb-12">
            Learn why Playcrafting is a cheat code for our clients creating gaming experiences
            and building developer communities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="20,000+" label="Engaged active and aspiring game developers in our network" highlight />
            <StatCard value="150+" label="Games made with clients to date" />
            <StatCard value="$5M+" label="Of dollars trusted to our network to build games, prototypes, experiences, and more" highlight />
            <StatCard value="10" label="Years of experience in gaming events and development" />
          </div>
        </div>
      </section>

      {/* Play NYC Section */}
      <section className="py-20 bg-pc-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/misc/playnyc-logo.png"
                alt="Play NYC Logo"
                width={400}
                height={200}
                className="mb-8"
              />
              <p className="text-body text-pc-light/80 mb-6">
                Heading into its 10th year in 2025, Playcrafting hosts NYC&apos;s premier gaming
                convention, bringing together game developers, fans, and industry leaders for an
                unforgettable weekend of gaming.
              </p>
              <div className="text-center">
                <Button href="https://play-nyc.com" external>
                  Visit the event site here
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="/images/misc/collage.png"
                alt="Play NYC Collage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-pc-gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pc-light text-center mb-4">
            Client Success Stories
          </h2>
          <p className="text-body text-pc-light/70 text-center max-w-2xl mx-auto mb-12">
            See how we&apos;ve helped leading brands leverage the power of play.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.slug} {...study} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/work">View All Case Studies</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pc-pink to-pc-orange">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to level up your brand?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s create something amazing together.
          </p>
          <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-pc-pink">
            Get in touch with us
          </Button>
        </div>
      </section>
    </>
  );
}
