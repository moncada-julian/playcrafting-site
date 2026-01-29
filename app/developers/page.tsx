"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import CaseStudyCard from "@/components/CaseStudyCard";
import { CASE_STUDIES } from "@/lib/constants";

export default function DevelopersPage() {
  const [formData, setFormData] = useState({
    name: "",
    studio: "",
    email: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Implement form submission logic
    // This could be:
    // - Send to an API endpoint
    // - Add to a mailing list (Mailchimp, ConvertKit, etc.)
    // - Send to a CRM
    console.log("Developer registration:", formData);

    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-pc-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-pc-light mb-4">
            Playcrafting
            <br />
            <span className="text-pc-pink">Developer</span>
            <br />
            Network
          </h1>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-pc-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <div>
              <h2 className="text-3xl font-bold text-pc-light mb-6">
                Join Our Developer Network
              </h2>
              <p className="text-body text-pc-light/80 mb-6">
                Looking for paid projects and game jams? Interested in networking with
                other developers and people in the industry? You&apos;ve found your new home.
              </p>
              <p className="text-body text-pc-light/80 mb-6">
                Our goal is to galvanize the careers and portfolios of the developers in
                our network. At Playcrafting, we create games for major brands and host
                premiere events like Play NYC. We want you to join us!
              </p>

              <div className="bg-pc-dark rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-pc-pink mb-3">
                  LOOKING TO PROMOTE YOUR GAME?
                </h3>
                <p className="text-small text-pc-light/80">
                  By joining the Playcrafting network, we&apos;ll give your projects a boost!
                  We love to promote our developers&apos; games through our social channels
                  and events.
                </p>
              </div>

              <div className="bg-pc-dark rounded-xl p-6">
                <h3 className="text-xl font-bold text-pc-light mb-3">
                  JOIN US AT <span className="text-pc-pink">PLAY NYC</span>
                </h3>
                <p className="text-small text-pc-light/80 mb-4">
                  New York&apos;s premier games convention, our annual August expo unites
                  creators and fans from the New York area and beyond.
                </p>
                <Button href="https://play-nyc.com" external variant="outline">
                  Learn About Play NYC &gt;&gt;
                </Button>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-pc-dark rounded-xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-pc-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-pc-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-pc-light mb-4">
                    Welcome to the Network!
                  </h3>
                  <p className="text-pc-light/80">
                    We&apos;ll be in touch with opportunities and updates.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-pc-light mb-6">
                    Register Here
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-small font-medium text-pc-light mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-pc-gray border border-pc-gray-light rounded-lg text-pc-light placeholder-pc-light/50 focus:outline-none focus:border-pc-pink transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="studio"
                        className="block text-small font-medium text-pc-light mb-2"
                      >
                        Studio / Company
                      </label>
                      <input
                        type="text"
                        id="studio"
                        name="studio"
                        value={formData.studio}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-pc-gray border border-pc-gray-light rounded-lg text-pc-light placeholder-pc-light/50 focus:outline-none focus:border-pc-pink transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-small font-medium text-pc-light mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-pc-gray border border-pc-gray-light rounded-lg text-pc-light placeholder-pc-light/50 focus:outline-none focus:border-pc-pink transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-small font-medium text-pc-light mb-2"
                      >
                        What interests you most?
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-pc-gray border border-pc-gray-light rounded-lg text-pc-light focus:outline-none focus:border-pc-pink transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="paid-projects">Paid Projects</option>
                        <option value="game-jams">Game Jams</option>
                        <option value="play-nyc">Play NYC</option>
                        <option value="networking">Networking</option>
                        <option value="all">All of the above!</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full">
                      Submit your info &gt;&gt;
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Wins Section */}
      <section className="py-16 bg-pc-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pc-light text-center mb-4">
            Wins From Our Developer Network
          </h2>
          <p className="text-body text-pc-light/70 text-center max-w-2xl mx-auto mb-12">
            We&apos;ve made over 150 games with our partners. Below are just a few wins from
            our developer network.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.slug} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-pc-gray">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-pc-light mb-6">
            Want to learn more?
          </h2>
          <Button href="/contact">Get in touch with us</Button>
        </div>
      </section>
    </>
  );
}
