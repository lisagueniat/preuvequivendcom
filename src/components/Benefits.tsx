import { TrendingUp, Clock, Shield, Users, Zap, Target } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "+200% de conversions",
      description: "En moyenne, nos clients doublent leur taux de conversion en 30 jours.",
    },
    {
      icon: Clock,
      title: "Installation en 48h",
      description: "On s'occupe de tout. Vous n'avez rien à faire.",
    },
    {
      icon: Shield,
      title: "Témoignages authentiques",
      description: "On collecte de vraies preuves auprès de vos clients satisfaits.",
    },
    {
      icon: Users,
      title: "Adapté à votre marque",
      description: "Design personnalisé qui s'intègre parfaitement à votre site.",
    },
    {
      icon: Zap,
      title: "Collecte automatisée",
      description: "Système intelligent qui sollicite vos clients au bon moment.",
    },
    {
      icon: Target,
      title: "Placement stratégique",
      description: "Les bons témoignages aux bons endroits pour maximiser l'impact.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 border-b-4 border-foreground">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pourquoi choisir la Machine à Preuve ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour transformer vos visiteurs en clients
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border-4 border-foreground p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 border-2 border-foreground flex items-center justify-center mb-4 group-hover:bg-foreground group-hover:text-background transition-colors">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
