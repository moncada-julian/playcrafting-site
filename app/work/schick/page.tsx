import Image from "next/image";
import Button from "@/components/Button";
import StatCard from "@/components/StatCard";

export const metadata = {
  title: "Schick Xtreme Case Study - Playcrafting",
  description: "How Playcrafting built Shave The Day, a mobile game for Schick Xtreme to benefit St. Baldrick's Foundation.",
};

export default function SchickCaseStudy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case-studies/schick-banner.png"
            alt="Schick Case Study"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pc-dark via-pc-dark/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12 pt-32">
          <p className="text-pc-pink font-medium mb-2">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold text-pc-light">
            Success Story: Schick Xtreme
          </h1>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-pc-gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-pc-light text-center mb-8">
            Shave the Day Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value="307M" label="PR impressions" highlight />
            <StatCard value="10K+" label="Hours watched on Twitch" />
            <StatCard value="25%" label="Increase in Schick's brand likeability" highlight />
            <StatCard value="Finalist" label="Shorty Awards 2021" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-pc-dark">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-body text-pc-light/80 mb-8">
            <strong className="text-pc-light">
              We built Shave The Day, a mobile game that raises money for children&apos;s cancer
              research through the St. Baldrick&apos;s Foundation.
            </strong>{" "}
            Players shave virtual heads, collect coins, and unlock power-ups while learning
            about childhood cancer research.
          </p>

          <p className="text-body text-pc-light/80 mb-8">
            Shave the Day was selected as a finalist in the{" "}
            <a
              href="https://shortyawards.com/13th/schick-shave-the-day"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pc-pink hover:underline"
            >
              Shorty Awards
            </a>{" "}
            for Best in Gaming.
          </p>

          {/* Screenshot */}
          <div className="my-12 rounded-xl overflow-hidden">
            <Image
              src="/images/case-studies/schick-screenshot.png"
              alt="Shave the Day Screenshot"
              width={800}
              height={450}
              className="w-full"
            />
          </div>

          <h3 className="text-2xl font-bold text-pc-light mb-4">Gaming for a Cause</h3>
          <p className="text-body text-pc-light/80 mb-8">
            The game combined fun, engaging gameplay with a meaningful charitable mission,
            helping Schick connect with younger audiences while supporting an important cause.
          </p>

          <h3 className="text-2xl font-bold text-pc-light mb-4">Playcrafting&apos;s Role</h3>
          <ul className="list-disc list-inside text-body text-pc-light/80 space-y-2 mb-8">
            <li>Market Research</li>
            <li>Technical Recruitment</li>
            <li>Game Design</li>
            <li>Game Programming</li>
            <li>Art Design & Asset Production</li>
            <li>Project Management</li>
            <li>Quality Assurance</li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button href="https://play.google.com/store" external>
              Download Shave the Day on Android
            </Button>
            <Button href="/work" variant="outline">
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-pc-gray">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-pc-light mb-6">
            Want to create something impactful?
          </h2>
          <Button href="/contact">Get in touch with us</Button>
        </div>
      </section>
    </>
  );
}
