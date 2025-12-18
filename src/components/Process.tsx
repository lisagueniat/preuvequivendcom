import { Phone, ThumbsUp, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Appel",
      description: "On discute de vos besoins et de votre stratégie. 15 minutes pour comprendre comment booster vos conversions.",
    },
    {
      number: "02",
      icon: ThumbsUp,
      title: "Décision",
      description: "Vous validez le plan d'action. On s'occupe de tout : collecte, design et intégration.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "48h plus tard",
      description: "Votre machine à preuve est en place. Vos visiteurs voient des témoignages qui convertissent.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-foreground text-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-background px-4 py-2 font-mono text-sm uppercase tracking-wider mb-6">
            Process simple
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            De l'appel à la conversion en 48h
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Pas de process complexe. Pas de prise de tête. Juste des résultats.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-4 border-background p-8 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-6 -left-2 bg-background text-foreground px-4 py-2 font-mono text-2xl font-bold">
                {step.number}
              </div>
              <div className="pt-4">
                <div className="w-16 h-16 border-2 border-background flex items-center justify-center mb-6 group-hover:bg-background group-hover:text-foreground transition-colors">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase">{step.title}</h3>
                <p className="opacity-80">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-background"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
