import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center border-b-4 border-foreground bg-background px-4 py-[60px]">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8">
          

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Augmentez vos revenus en laissant{" "}
            <span className="bg-foreground text-background px-2 py-0 leading-none inline-block">La Machine à Preuves™</span> convaincre vos prospects
            24/24.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">Nous installons pour vous un système qui capture, structure et affiche des témoignages clients aux moments décisifs, sans gestion continue.</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-lg px-8 py-6 shadow-sm hover:shadow transition-all">
              Réserver un appel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 shadow-sm hover:shadow transition-all">
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
              <span>Installation en 7 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-foreground"></div>
              <span>Actif permanent</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;