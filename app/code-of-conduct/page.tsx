export const metadata = {
  title: "Code of Conduct - Playcrafting",
  description: "Playcrafting's Code of Conduct for events, game jams, and community participation.",
};

export default function CodeOfConductPage() {
  return (
    <>
      <section className="pt-32 pb-8 bg-pc-dark">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-pc-light mb-4">Code of Conduct</h1>
          <p className="text-pc-light/60">
            For all Playcrafting events, game jams, and community activities.
          </p>
        </div>
      </section>

      <section className="py-12 bg-pc-dark">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-pc-light/80 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-pc-light mb-4">Our Commitment</h2>
              <p>
                Playcrafting is dedicated to providing a harassment-free experience for
                everyone, regardless of gender, gender identity and expression, age, sexual
                orientation, disability, physical appearance, body size, race, ethnicity,
                religion (or lack thereof), or technology choices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pc-light mb-4">Expected Behavior</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>Be respectful and considerate of others</li>
                <li>Be collaborative and supportive of fellow developers</li>
                <li>Gracefully accept constructive criticism</li>
                <li>Focus on what is best for the community</li>
                <li>Show empathy towards other community members</li>
                <li>Be mindful of your surroundings and fellow participants</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pc-light mb-4">Unacceptable Behavior</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>Harassment, intimidation, or discrimination in any form</li>
                <li>
                  Verbal abuse, including offensive comments related to gender, sexual
                  orientation, race, religion, or disability
                </li>
                <li>Sexual images or language in public spaces</li>
                <li>Deliberate intimidation, stalking, or following</li>
                <li>Harassing photography or recording</li>
                <li>Sustained disruption of talks or other events</li>
                <li>Unwelcome physical contact or sexual attention</li>
                <li>Advocating for, or encouraging, any of the above behavior</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pc-light mb-4">Consequences</h2>
              <p>
                Participants asked to stop any harassing behavior are expected to comply
                immediately. If a participant engages in harassing behavior, Playcrafting
                organizers may take any action they deem appropriate, including warning the
                offender or expulsion from the event or community with no refund.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pc-light mb-4">Reporting</h2>
              <p>
                If you are being harassed, notice that someone else is being harassed, or
                have any other concerns, please contact a Playcrafting staff member
                immediately. Staff will be happy to help participants contact venue security
                or local law enforcement, provide escorts, or otherwise assist those
                experiencing harassment to feel safe.
              </p>
              <p className="mt-4">
                You can also reach us at{" "}
                <a
                  href="mailto:info@playcrafting.com"
                  className="text-pc-pink hover:underline"
                >
                  info@playcrafting.com
                </a>
              </p>
            </div>

            <div className="bg-pc-gray rounded-xl p-6">
              <p className="text-pc-light/90 italic">
                We value your attendance and participation in our community. We expect
                everyone to exhibit these behaviors at all Playcrafting events, online
                communities, and game jams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
