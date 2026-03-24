import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Button } from "@/components/ui/button";
import studentsImg from "@assets/generated_images/diverse_students_using_futuristic_tablet_for_career_guidance.png";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const element =
        hash === "top" ? document.body : document.getElementById(hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <main>
        <Hero />
        <Features />

        {/* CTA Section */}
        <section id="legacy-section" className="bg-muted/30 py-24">
          <div className="container px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Start Building Your Legacy Today
                </h2>

                <p className="text-lg text-muted-foreground">
                  The world is changing fast. Career Plug AI ensures you're not
                  just keeping up, but leading the way.
                  <br />
                  Join thousands of students discovering their true potential.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link to="/auth?signup=true">
                    <Button
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Create Student Account
                    </Button>
                  </Link>

                  <Link to="/sponsorship">
                    <Button size="lg" variant="outline">
                      Contact for Kiosks
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={studentsImg}
                  alt="Students using Career Plug AI"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
