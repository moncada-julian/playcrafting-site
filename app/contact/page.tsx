"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Implement form submission logic
    // This could be:
    // - Send to an API endpoint
    // - Send to a form service like Formspree, Netlify Forms, etc.
    // - Send to a CRM or email service
    console.log("Form submitted:", formData);

    // Redirect to thank you page
    router.push("/contact/thanks");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          <h1 className="text-4xl md:text-5xl font-bold text-pc-light mb-6">
            Get in touch with us
          </h1>
          <p className="text-body text-pc-light/80 max-w-2xl mx-auto">
            Have a question or inquiry about Playcrafting or Play NYC? Reach out to us
            through the form below.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-pc-gray">
        <div className="max-w-xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-small font-medium text-pc-light mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 bg-pc-dark border border-pc-gray-light rounded-lg text-pc-light placeholder-pc-light/50 focus:outline-none focus:border-pc-pink transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-small font-medium text-pc-light mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 bg-pc-dark border border-pc-gray-light rounded-lg text-pc-light placeholder-pc-light/50 focus:outline-none focus:border-pc-pink transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-small font-medium text-pc-light mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                required
                className="w-full px-4 py-3 bg-pc-dark border border-pc-gray-light rounded-lg text-pc-light placeholder-pc-light/50 focus:outline-none focus:border-pc-pink transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-small font-medium text-pc-light mb-2"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or question"
                rows={5}
                className="w-full px-4 py-3 bg-pc-dark border border-pc-gray-light rounded-lg text-pc-light placeholder-pc-light/50 focus:outline-none focus:border-pc-pink transition-colors resize-none"
              />
            </div>

            <Button type="submit" className="w-full">
              Get in touch
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
