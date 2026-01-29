import Image from "next/image";
import Button from "@/components/Button";
import StatCard from "@/components/StatCard";
import GameCard from "@/components/GameCard";

export const metadata = {
  title: "ASUS ROG Case Study - Playcrafting",
  description: "An inside look at the ROG Game Jam – a strategic partnership between ASUS ROG and Playcrafting.",
};

const ASUS_GAMES = [
  {
    title: "(Ape) Escape Velocity",
    developer: "Angry Array",
    image: "/images/games/asus-game1.gif",
    description: "Play as an ape astronaut seeking bananas in a galaxy far, far away. In (Ape) Escape Velocity, the lower screen serves as your spaceship's control panel.",
  },
  {
    title: "Ascension 67",
    developer: "Double Helix",
    image: "/images/misc/asusgame2.gif",
    description: "Climb the levels of a fully 3D factory on your way to freedom as a robot with a mission. Ascension 67 uses the dual screens for immersive gameplay.",
  },
  {
    title: "Triangle Square Circle",
    developer: "Colorfiction",
    image: "/images/misc/asusgame3.gif",
    description: "Like a piece of alien technology, Triangle Square Circle transforms the touch screen into a device, linking two realities with strange consequences.",
  },
  {
    title: "Wigglefishing",
    developer: "Team Robot",
    image: "/images/misc/asusgame4.gif",
    description: "You are Crouton, a mischievous house cat fascinated by the fish in your owner's aquarium. Paw your way to fishy glory!",
  },
  {
    title: "And Then We Will Know",
    developer: "Game Making Garden",
    image: "/images/misc/asusgame5.gif",
    description: "Last but not least, And Then We Will Know was the fan-selected winning game from the ROG Game Jam! Use both screens to solve puzzles.",
  },
];

export default function AsusCaseStudy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case-studies/rog-banner.png"
            alt="ASUS ROG Case Study"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pc-dark via-pc-dark/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12 pt-32">
          <p className="text-pc-pink font-medium mb-2">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold text-pc-light">
            Success Story: ASUS ROG
          </h1>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-pc-gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-pc-light text-center mb-8">
            ASUS ROG Jam Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <StatCard value="20" label="Participating developers" highlight />
            <StatCard value="5" label="Game prototypes created across the week" />
            <StatCard value="4" label="Live events streamed on ROG's Twitch channel" highlight />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-pc-dark">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-body text-pc-light/80 mb-8">
            <strong className="text-pc-light">
              Playcrafting worked with ASUS ROG to build 5 exclusive games that showcase the
              powerful ROG Zephyrus Duo 15 gaming laptop with its innovative dual-screen design.
            </strong>
          </p>

          <p className="text-body text-pc-light/80 mb-8">
            ASUS ROG was on a mission to discover the possibilities of game development on its
            new Zephyrus Duo 15 laptop. The ROG Game Jam challenged developers to create games
            that take advantage of the laptop&apos;s unique secondary ScreenPad Plus display.
          </p>

          <h3 className="text-2xl font-bold text-pc-light mb-4">The ROG Game Jam</h3>
          <p className="text-body text-pc-light/80 mb-8">
            An inside look at the ROG Game Jam – a strategic partnership between ASUS ROG and
            Playcrafting to unlock innovation and creativity in dual-screen gaming.
          </p>

          <h3 className="text-2xl font-bold text-pc-light mb-4">Playcrafting&apos;s Role</h3>
          <ul className="list-disc list-inside text-body text-pc-light/80 space-y-2 mb-8">
            <li>Designed strategic roadmap for the partnership</li>
            <li>Recruited top game developers with a track record of innovation</li>
            <li>Managed all game jam logistics and developer communications</li>
            <li>Coordinated live streaming events on Twitch</li>
            <li>Produced promotional content showcasing the games</li>
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
            {ASUS_GAMES.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-pc-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-pc-light mb-6">
            Want to showcase your hardware?
          </h2>
          <Button href="/contact">Get in touch with us</Button>
        </div>
      </section>
    </>
  );
}
