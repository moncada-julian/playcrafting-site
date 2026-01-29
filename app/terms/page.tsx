export const metadata = {
  title: "Terms of Service & Privacy Policy - Playcrafting",
  description: "Terms of Service and Privacy Policy for Playcrafting and The Games Forum Inc.",
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-8 bg-pc-dark">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-pc-light mb-4">
            Terms of Service & Privacy Policy
          </h1>
          <p className="text-pc-light/60">Last updated: January 2024</p>
        </div>
      </section>

      <section className="py-12 bg-pc-dark">
        <div className="max-w-4xl mx-auto px-6 prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-pc-light mb-6">Terms of Service</h2>

          <div className="text-pc-light/80 space-y-6">
            <h3 className="text-xl font-semibold text-pc-light">1. Acceptance of Terms</h3>
            <p>
              By accessing and using the Playcrafting website and services, you accept and
              agree to be bound by the terms and provision of this agreement.
            </p>

            <h3 className="text-xl font-semibold text-pc-light">2. Use License</h3>
            <p>
              Permission is granted to temporarily view the materials (information or
              software) on Playcrafting&apos;s website for personal, non-commercial transitory
              viewing only.
            </p>

            <h3 className="text-xl font-semibold text-pc-light">3. Disclaimer</h3>
            <p>
              The materials on Playcrafting&apos;s website are provided on an &apos;as is&apos; basis.
              Playcrafting makes no warranties, expressed or implied, and hereby disclaims
              and negates all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other violation of rights.
            </p>

            <h3 className="text-xl font-semibold text-pc-light">4. Limitations</h3>
            <p>
              In no event shall Playcrafting or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or profit, or due to
              business interruption) arising out of the use or inability to use the materials
              on Playcrafting&apos;s website.
            </p>

            <h3 className="text-xl font-semibold text-pc-light">5. Revisions</h3>
            <p>
              Playcrafting may revise these terms of service at any time without notice.
              By using this website you are agreeing to be bound by the then current version
              of these terms of service.
            </p>
          </div>

          <hr className="border-pc-gray-light my-12" />

          <h2 className="text-2xl font-bold text-pc-light mb-6">Privacy Policy</h2>

          <div className="text-pc-light/80 space-y-6">
            <h3 className="text-xl font-semibold text-pc-light">Information We Collect</h3>
            <p>
              We collect information you provide directly to us, such as when you create an
              account, fill out a form, make a purchase, or contact us. This may include:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Company or studio name</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-pc-light">How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you updates about our events and programs</li>
              <li>Respond to your comments and questions</li>
              <li>Send promotional communications (you can opt out at any time)</li>
            </ul>

            <h3 className="text-xl font-semibold text-pc-light">Information Sharing</h3>
            <p>
              We do not share your personal information with third parties except as
              described in this privacy policy or with your consent.
            </p>

            <h3 className="text-xl font-semibold text-pc-light">Contact Us</h3>
            <p>
              If you have any questions about these Terms or our Privacy Policy, please
              contact us at info@playcrafting.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
