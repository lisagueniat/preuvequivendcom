import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center border-b-4 border-foreground bg-background px-4 py-20">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-block border-2 border-foreground px-4 py-2 font-mono text-sm uppercase tracking-wider shadow-xs">
            La Machine À Preuves™
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Augmentez vos revenus en affichant des{" "}
            <span className="bg-foreground text-background px-2">témoignages clients</span>{" "}
            qui convertissent 24/24
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Nous installons pour vous un système qui capture et affiche les témoignages pertinents (Google, Vidéo, Écrit) de vos clients afin d'augmenter vos ventes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-lg px-8 py-6 shadow-md hover:shadow-lg hover:translate-x-1 hover:translate-y-1 transition-all">
              Réserver un appel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 shadow-sm hover:shadow-md hover:translate-x-1 hover:translate-y-1 transition-all">
              Découvrir l'offre
            </Button>
          </div>
          
          <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-foreground"></div>
              <span>+270% de conversion</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-foreground"></div>
              <span>Installation en 48h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-foreground"></div>
              <span>Actif permanent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
