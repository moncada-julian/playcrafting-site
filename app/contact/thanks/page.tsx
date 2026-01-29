import Button from "@/components/Button";

export const metadata = {
  title: "Thank You - Playcrafting",
  description: "Thank you for contacting Playcrafting.",
};

export default function ContactThanksPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-pc-dark">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="w-20 h-20 bg-pc-teal/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-pc-teal"
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
        <h1 className="text-4xl font-bold text-pc-light mb-4">Thank You!</h1>
        <p className="text-body text-pc-light/80 mb-8">
          We&apos;ve received your message and will get back to you as soon as possible.
          In the meantime, feel free to explore our work or learn more about our
          developer network.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/work">Explore Our Work</Button>
          <Button href="/developers" variant="outline">
            Join Developer Network
          </Button>
        </div>
      </div>
    </section>
  );
}
