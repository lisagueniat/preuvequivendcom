import { TrendingUp, Users, CheckCircle, Video } from "lucide-react";

const StatsOriginal = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "+270%",
      label: "de conversion",
      description: "Augmentation moyenne du taux de conversion lorsqu'un produit affiche des témoignages clients.",
      source: "Spiegel Research Center",
    },
    {
      icon: Users,
      value: "92%",
      label: "d'hésitation en moins",
      description: "Les acheteurs B2B affirment être plus enclins à acheter après avoir lu un témoignage qui répond à une objection spécifique.",
      source: "G2 & Heinz Marketing",
    },
    {
      icon: CheckCircle,
      value: "84%",
      label: "font confiance",
      description: "Les consommateurs font autant confiance aux avis en ligne qu'à une recommandation personnelle.",
      source: "BrightLocal",
    },
    {
      icon: Video,
      value: "79%",
      label: "regardent des vidéos",
      description: "Les prospects ont déjà regardé un témoignage vidéo pour en savoir plus sur une solution avant de se décider.",
      source: "Wyzowl",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-secondary border-b-4 border-foreground">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-foreground px-4 py-2 font-mono text-sm uppercase tracking-wider mb-6 bg-background">
            Études & Recherches
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pourquoi La Machine À Preuves va augmenter vos ventes
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-4 border-foreground bg-background p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-lg font-medium mb-3">{stat.label}</div>
              <p className="text-sm text-muted-foreground mb-4">{stat.description}</p>
              <div className="text-xs font-mono text-muted-foreground border-t-2 border-foreground pt-3">
                Source : {stat.source}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="border-4 border-foreground p-6 bg-background">
            <h3 className="text-xl font-bold mb-3">Réduction du coût d'acquisition</h3>
            <p className="text-muted-foreground">
              Si votre conversion augmente de 270%, votre coût par client est divisé par trois sans dépenser un euro de plus en publicité.
            </p>
          </div>
          <div className="border-4 border-foreground p-6 bg-background">
            <h3 className="text-xl font-bold mb-3">Actif cumulatif</h3>
            <p className="text-muted-foreground">
              Contrairement à une campagne pub qui s'arrête quand on coupe le budget, chaque nouvel avis augmente la valeur de votre entreprise à long terme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsOriginal;
