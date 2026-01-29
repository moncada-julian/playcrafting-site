import Image from "next/image";
import Button from "@/components/Button";

export const metadata = {
  title: "Summer of XR - Playcrafting",
  description: "Playcrafting's Summer of XR initiative exploring extended reality gaming and experiences.",
};

export default function SummerOfXRPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-pc-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-pc-light mb-6">
            Summer of <span className="text-pc-pink">XR</span>
          </h1>
          <p className="text-body md:text-xl text-pc-light/80 max-w-2xl mx-auto mb-8">
            Exploring the future of extended reality gaming through developer engagement,
            game jams, and immersive experiences.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-pc-gray">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-pc-light/80 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-pc-light mb-4">About Summer of XR</h2>
              <p>
                Summer of XR is Playcrafting&apos;s initiative to bring together VR, AR, and
                mixed reality developers for a season of learning, creating, and showcasing
                extended reality experiences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pc-light mb-4">What We Offer</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>XR-focused game jams and hackathons</li>
                <li>Workshops on XR development tools and techniques</li>
                <li>Networking events with XR industry professionals</li>
                <li>Showcase opportunities for XR projects</li>
                <li>Mentorship from experienced XR developers</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pc-light mb-4">Get Involved</h2>
              <p>
                Whether you&apos;re an experienced XR developer or just getting started,
                there&apos;s a place for you in our Summer of XR program. Join our developer
                network to stay updated on upcoming opportunities.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button href="/developers">Join Developer Network</Button>
            <Button href="/contact" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
