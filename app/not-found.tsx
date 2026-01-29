import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-pc-dark">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h1 className="text-8xl font-bold text-pc-pink mb-4">404</h1>
        <h2 className="text-3xl font-bold text-pc-light mb-6">Page Not Found</h2>
        <p className="text-body text-pc-light/80 mb-8">
          Looks like this page got lost in the game. Let&apos;s get you back to
          familiar territory.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">Go Home</Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
