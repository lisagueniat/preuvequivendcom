import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container max-w-4xl">
        <div className="border-4 border-foreground p-8 md:p-12 shadow-xl bg-background">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 border-2 border-foreground px-4 py-2 font-mono text-sm uppercase">
              <Calendar className="w-4 h-4" />
              Prêt à convertir plus ?
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold">
              Réservez votre appel stratégique gratuit
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              15 minutes pour analyser votre situation et voir comment la Machine à Preuve peut transformer vos conversions.
            </p>
            
            <div className="pt-4">
              <Button size="lg" className="text-lg px-10 py-7 shadow-lg hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all">
                Réserver mon appel gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="pt-6 grid grid-cols-3 gap-4 max-w-md mx-auto text-center">
              <div>
                <div className="text-2xl font-bold">15 min</div>
                <div className="text-sm text-muted-foreground">Durée de l'appel</div>
              </div>
              <div>
                <div className="text-2xl font-bold">0€</div>
                <div className="text-sm text-muted-foreground">Sans engagement</div>
              </div>
              <div>
                <div className="text-2xl font-bold">48h</div>
                <div className="text-sm text-muted-foreground">Pour être live</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
