import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
const CTA = () => {
  return (
    <section className="py-20 md:py-32 px-2 md:px-4 bg-primary text-primary-foreground border-b-4 border-foreground">
      <div className="container max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 px-4 py-2 font-mono text-sm uppercase tracking-wider mb-8">
          OFFRE DE LANCEMENT - 10 PLACES DISPONIBLES
          <Calendar className="w-4 h-4" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">Prêt à transformer vos visiteurs en clients ?</h2>

        <p className="text-xl mb-10 text-primary-foreground/80 max-w-2xl mx-auto">
          Réservez votre appel découverte de 30 minutes. On analyse ensemble votre situation et on vous montre comment
          la Machine à Preuves peut augmenter vos conversions. 
        </p>

        <div className="border-4 border-primary-foreground bg-primary-foreground/10 p-4 md:p-8 mb-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">30 min</div>
              <div className="text-sm font-mono text-primary-foreground/70">Appel découverte</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">Dès l'appel</div>
              <div className="text-sm font-mono text-primary-foreground/70">Investissement unique</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">7 jours</div>
              <div className="text-sm font-mono text-primary-foreground/70">De déploiement</div>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <Button
              size="lg"
              className="w-full max-w-full sm:w-auto h-auto whitespace-normal text-center justify-center text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-7 bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-2 border-primary-foreground font-bold shadow-sm hover:shadow transition-all"
              asChild
            >
              <a href="https://juliengueniat235854.typeform.com/to/qJVNaama" target="_blank" rel="noopener noreferrer">
                Réserver mon appel gratuit
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 shrink-0" />
              </a>
            </Button>
          </div>
        </div>

        <p className="text-sm font-mono text-primary-foreground/60">Sans engagement • Réponse sous 24h</p>
      </div>
    </section>
  );
};
export default CTA;
