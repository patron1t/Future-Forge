import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <section className="py-20 md:py-32">
        <div className="container px-4 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight mb-12">Privacy Policy</h1>
          
          <div className="prose prose-sm max-w-none dark:prose-invert space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Career Plug AI (Pty) Ltd ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process personal information in connection with our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Account registration information (name, email, grade level, interests)</li>
                <li>Profile information (strengths, skills, projects, digital footprint)</li>
                <li>Behavioral data (how you use our services)</li>
                <li>Communications (messages between users)</li>
                <li>Device information (IP address, browser type, device type)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide and improve our career guidance services</li>
                <li>Map career paths and opportunities matched to your strengths</li>
                <li>Connect students with scouts, employers, counselors, and mentors</li>
                <li>Support wellness and mental health resources</li>
                <li>Communicate with you about our services</li>
                <li>Monitor and analyze platform usage</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Protection for Minors</h2>
              <p className="text-muted-foreground">
                We take special care to protect students under 18. We comply with applicable laws regarding children's online privacy, including COPPA (Children's Online Privacy Protection Act) in the United States. We may require parental consent for certain activities and will not share student data with third parties without appropriate safeguards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Sharing & Third Parties</h2>
              <p className="text-muted-foreground mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>School counselors and educators (to support your academic journey)</li>
                <li>Scouts and employers (for career opportunity matching, with your consent)</li>
                <li>Service providers who assist us in operating our platform</li>
                <li>As required by law or legal process</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have rights including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to delete your account and data</li>
                <li>Right to opt-out of certain communications</li>
                <li>Right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cookies & Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your experience and analyze platform usage. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mt-4">
                <li>Email: <a href="mailto:privacy@careerplugai.co.za" className="text-primary hover:underline">privacy@careerplugai.co.za</a></li>
                <li>Phone: <a href="tel:+27796158762" className="text-primary hover:underline">+27 79 615 8762</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date below.
              </p>
              <p className="text-muted-foreground mt-4 font-semibold">
                Last Updated: March 17, 2026
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
