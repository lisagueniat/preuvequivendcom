import { X, Check } from "lucide-react";

const Problem = () => {
  const problems = [
    "Vos visiteurs hésitent avant de passer à l'action",
    "Vous perdez des ventes faute de crédibilité visible",
    "Vos témoignages actuels sont mal présentés ou inexistants",
    "Vous n'avez pas le temps de collecter et afficher des avis",
  ];

  const solutions = [
    "Des témoignages vidéo et texte qui rassurent instantanément",
    "Une preuve sociale qui travaille pour vous 24h/24",
    "Un système automatisé de collecte de témoignages",
    "Installation complète en 48h, sans effort de votre part",
  ];

  return (
    <section className="py-20 md:py-32 px-4 border-b-4 border-foreground">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sans témoignages authentiques, vous perdez des clients chaque jour
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            92% des consommateurs lisent les avis avant d'acheter. Où sont les vôtres ?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="border-4 border-foreground p-8 shadow-lg bg-secondary">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center bg-destructive text-destructive-foreground">
                <X className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase">Sans Machine À Preuves</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 flex-shrink-0 border border-foreground flex items-center justify-center text-xs font-mono mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-4 border-foreground p-8 shadow-lg bg-background">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center bg-foreground text-background">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase">Avec Machine À Preuves</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 flex-shrink-0 bg-foreground text-background flex items-center justify-center text-xs font-mono mt-0.5">
                    ✓
                  </span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
