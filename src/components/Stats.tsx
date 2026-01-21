import { TrendingUp, Users, CheckCircle, Video } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "+270%",
      label: "de conversion",
      description: "Produits affichant des témoignages clients vs. produits sans preuve visible.",
      source: "Spiegel Research Center",
    },
    {
      icon: Users,
      value: "92%",
      label: "d'hésitation en moins",
      description: "Les acheteurs déclarent être significativement plus enclins à décider lorsqu'un témoignage répond à un doute précis.",
      source: "G2 & Heinz Marketing",
    },
    {
      icon: CheckCircle,
      value: "84%",
      label: "crédibilité perçue",
      description: "Les consommateurs accordent autant de confiance aux avis en ligne qu'à une recommandation personnelle, lorsque le format paraît authentique.",
      source: "BrightLocal",
    },
    {
      icon: Video,
      value: "79%",
      label: "regardent des vidéos",
      description: "Les prospects regardent un témoignage vidéo avant de prendre une décision.",
      source: "Wyzowl",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-2 md:px-4 bg-secondary border-b-4 border-foreground">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-foreground px-4 py-2 font-mono text-sm uppercase tracking-wider mb-6 bg-background">
            Études & Recherches
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ce que montrent les données sur l'impact des témoignages clients
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-4 border-foreground bg-background p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow text-center"
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

        <div className="mt-12 grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="border-4 border-foreground p-4 md:p-6 bg-background">
            <h3 className="text-xl font-bold mb-3">Réduction du coût d'acquisition</h3>
            <p className="text-muted-foreground">
              À trafic égal, une amélioration du taux de conversion réduit mécaniquement le coût par client.
            </p>
          </div>
          <div className="border-4 border-foreground p-4 md:p-6 bg-background">
            <h3 className="text-xl font-bold mb-3">L'actif est cumulatif</h3>
            <p className="text-muted-foreground">
              Contrairement à une campagne publicitaire, chaque nouveau témoignage s'ajoute à une infrastructure durable qui renforce votre crédibilité dans le temps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
