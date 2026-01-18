import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Search, MessageSquare, Settings, Rocket, Infinity } from "lucide-react";

const Pricing = () => {
  const features = [
    {
      icon: Search,
      title: "Stratégie & Audit",
      description: "Cartographie de votre parcours client et identification du \"Moment de Vérité\". (30 min, call)",
    },
    {
      icon: MessageSquare,
      title: "Ingénierie de l'Objection",
      description: "Création de vos protocoles de questions personnalisés (jusqu'à 3 scripts).",
    },
    {
      icon: Settings,
      title: "Configuration Technique",
      description: "Paramétrage complet de votre outil de capture (Senja ou équivalent).",
    },
    {
      icon: Rocket,
      title: "Mise en service (Injection)",
      description: "Intégration des widgets sur vos pages de vente, emails et tunnels.",
    },
    {
      icon: Infinity,
      title: "Actif Permanent",
      description: "Le système vous appartient. Pas de frais de gestion mensuels.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 border-b-4 border-foreground">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block border-2 border-foreground px-4 py-2 font-mono text-sm uppercase tracking-wider mb-6">
            Offre unique
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            L'Installation "Moteur de Confiance"
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une intervention chirurgicale pour automatiser votre preuve sociale.
          </p>
        </div>

        <div className="border-4 border-foreground shadow-xl bg-background">
          <div className="p-8 md:p-12 text-center border-b-4 border-foreground">
            <div className="text-6xl md:text-7xl font-bold mb-2">990€</div>
            <p className="text-muted-foreground">Paiement unique</p>
          </div>

          <div className="p-8 md:p-12">
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 border-2 border-foreground flex items-center justify-center flex-shrink-0 bg-foreground text-background">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t-2 border-foreground">
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Note :</strong> L'abonnement au logiciel de stockage (type Senja) reste à votre charge (env. 15-30€/mois). Mon forfait couvre l'analyse, le paramétrage et la stratégie de conversion.
              </p>
              
              <Button size="lg" className="w-full text-lg py-7 shadow-lg hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all">
                Réserver mon appel gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
