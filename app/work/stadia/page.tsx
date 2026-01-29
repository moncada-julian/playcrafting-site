import Image from "next/image";
import Button from "@/components/Button";
import StatCard from "@/components/StatCard";
import GameCard from "@/components/GameCard";

export const metadata = {
  title: "Google Stadia Case Study - Playcrafting",
  description: "How Playcrafting united 39 independent game developers for the Play Anywhere Game Jam with Google Stadia.",
};

const STADIA_GAMES = [
  {
    title: "Bushido Bots",
    developer: "Waking Oni Games",
    image: "/images/games/bushido.gif",
    description: "A retro-cartoon world featuring tabletop toy robots as they battle to their animated deaths. A methodical 2D fighting game with distinct characters.",
  },
  {
    title: "Dog Walker",
    developer: "The Day Jammers",
    image: "/images/games/dogwalker.gif",
    description: "An asymmetrical dog-walking simulation game where players play as all dogs, all humans, or any other combination they choose.",
  },
  {
    title: "Project Geofront",
    developer: "Team Geofront",
    image: "/images/games/geofront.gif",
    description: "Project Geofront is an asymmetrical multiplayer shooter where one player controls a giant mech fighting against other players on foot.",
  },
  {
    title: "Pride vs Prejudice",
    developer: "Novel Idea",
    image: "/images/games/prideprej.gif",
    description: "Players select a character from a roster of available characters. Each pairing of characters has its own unique storyline and dialogue.",
  },
  {
    title: "Let's Make Something Weird",
    developer: "Mismatched Games",
    image: "/images/games/weird.gif",
    description: "An arcade-style asymmetrical co-op game where one person plays as a mad scientist. And the other person plays as their assistant.",
  },
];

export default function StadiaCaseStudy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case-studies/stadia-banner.png"
            alt="Google Stadia Case Study"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pc-dark via-pc-dark/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12 pt-32">
          <p className="text-pc-pink font-medium mb-2">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold text-pc-light">
            Success Story: Google Stadia
          </h1>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-pc-gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-pc-light text-center mb-8">
            &quot;Play Anywhere&quot; Jam Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <StatCard value="39" label="Game developer participants" highlight />
            <StatCard value="70%" label="of participating developers identify as BIPOC, female, and/or LGBTQ+" />
            <StatCard value="85%" label="increase in interest in making games for Stadia" highlight />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-pc-dark">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-body text-pc-light/80 mb-8">
            <strong className="text-pc-light">
              Playcrafting built and executed on The &quot;Play Anywhere&quot; Game Jam for Google Stadia,
              a week-long jam that brought together diverse and inclusive developers to create
              playful experiences.
            </strong>
          </p>

          <p className="text-body text-pc-light/80 mb-8">
            The game jam focused on a group of diverse and inclusive developers with the goal
            to create playful experiences that showcase Stadia&apos;s unique features.
          </p>

          {/* Screenshot */}
          <div className="my-12 rounded-xl overflow-hidden">
            <Image
              src="/images/case-studies/stadia-screenshot.png"
              alt="Play Anywhere Game Jam"
              width={800}
              height={450}
              className="w-full"
            />
          </div>

          <h3 className="text-2xl font-bold text-pc-light mb-4">The &quot;Play Anywhere&quot; Game Jam</h3>
          <p className="text-body text-pc-light/80 mb-8">
            We united 39 independent game developers for a strategic partnership between
            Google Stadia and Playcrafting to unlock innovation and creativity in cloud gaming.
          </p>

          <h3 className="text-2xl font-bold text-pc-light mb-4">Playcrafting&apos;s Role</h3>
          <ul className="list-disc list-inside text-body text-pc-light/80 space-y-2 mb-8">
            <li>Envisioned and designed the full initiative from the ground up</li>
            <li>Vetted and recruited inclusive and experienced indie developers</li>
            <li>Managed all logistics, communications, and project timelines</li>
            <li>Provided technical support and mentorship throughout the jam</li>
            <li>Coordinated promotional content and social media coverage</li>
          </ul>
        </div>
      </section>

      {/* Games Created */}
      <section className="py-16 bg-pc-gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pc-light text-center mb-12">
            Games Created
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STADIA_GAMES.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-pc-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-pc-light mb-6">
            Want to launch a game jam?
          </h2>
          <Button href="/contact">Get in touch with us</Button>
        </div>
      </section>
    </>
  );
}
