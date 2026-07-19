import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Stats />
        <section id="benefits">
          <Benefits />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
