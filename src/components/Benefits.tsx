import { Clock, Shield, MessageSquare, Target } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Capture au \"Moment de Vérité\"",
      description: "Nous identifions les déclencheurs clés pour solliciter vos clients au moment exact de leur réussite.",
      benefit: "Plus besoin de relancer manuellement ou de \"quémander\". Votre système de capture tourne en autonomie totale.",
    },
    {
      icon: Shield,
      title: "Format brut \"Anti-IA\"",
      description: "Nous privilégions le format smartphone, difficile à simuler par une IA et perçu comme radicalement honnête.",
      benefit: "Zéro logistique de studio, de réunion ou de montage. Votre client témoigne en 30 secondes.",
    },
    {
      icon: MessageSquare,
      title: "Questions orientées \"création de confiance\"",
      description: "Nous configurons des formulaires guidés pour transformer les avis vagues en véritables arguments de persuasion.",
      benefit: "Vous obtenez des preuves qui traitent les objections avant même qu'ils n'aient le temps de douter.",
    },
    {
      icon: Target,
      title: "Déploiement stratégique",
      description: "Nous injectons vos témoignages là où ils sont décisifs : pages de paiement, emails de relance et tunnels de vente.",
      benefit: "On place la bonne réponse face à la bonne peur. Votre taux de conversion augmente automatiquement.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 border-b-4 border-foreground">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Les avantages de notre Machine À Preuves
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un système complet qui travaille pour vous 24h/24
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border-4 border-foreground p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 border-2 border-foreground flex items-center justify-center mb-4 group-hover:bg-foreground group-hover:text-background transition-colors">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground mb-4">{benefit.description}</p>
              <div className="border-t-2 border-foreground pt-4">
                <p className="text-sm font-medium">
                  <span className="font-bold">Le bénéfice :</span> {benefit.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
