import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <section className="py-20 md:py-32">
        <div className="container px-4 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight mb-12">Terms of Service</h1>
          
          <div className="prose prose-sm max-w-none dark:prose-invert space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Career Plug AI ("Service"), you agree to be bound by these Terms of Service. If you do not agree to abide by the above, please do not use this Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Career Plug AI for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the Service</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on Career Plug AI are provided on an 'as is' basis. Career Plug AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall Career Plug AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Career Plug AI.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground">
                The materials appearing on Career Plug AI could include technical, typographical, or photographic errors. Career Plug AI does not warrant that any of the materials on its website are accurate, complete, or current. Career Plug AI may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Links</h2>
              <p className="text-muted-foreground">
                Career Plug AI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Career Plug AI of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
              <p className="text-muted-foreground">
                Career Plug AI may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. User Accounts</h2>
              <p className="text-muted-foreground mb-4">
                If you create an account on Career Plug AI, you are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Content & Conduct</h2>
              <p className="text-muted-foreground">
                Users agree not to post, transmit, or share any content that is unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable. Career Plug AI reserves the right to remove any content that violates these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Intellectual Property Rights</h2>
              <p className="text-muted-foreground">
                All content on Career Plug AI, including text, graphics, logos, images, and software, is the property of Career Plug AI or its content suppliers and is protected by international copyright laws. Reproduction is prohibited without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Subscription & Payment</h2>
              <p className="text-muted-foreground mb-4">
                For paid subscription services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Billing occurs on a recurring basis as selected</li>
                <li>You authorize us to charge your payment method</li>
                <li>Cancellation is available at any time</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall Career Plug AI be liable to you for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with the laws of South Africa, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mt-4">
                <li>Email: <a href="mailto:legal@careerplugai.co.za" className="text-primary hover:underline">legal@careerplugai.co.za</a></li>
                <li>Phone: <a href="tel:+27796158762" className="text-primary hover:underline">+27 79 615 8762</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">15. Modifications to Terms</h2>
              <p className="text-muted-foreground">
                These terms may be updated at any time. We will notify users of material changes by posting on our website. Your continued use constitutes acceptance of updated terms.
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
