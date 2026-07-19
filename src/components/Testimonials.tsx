import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Stéphan",
      role: "Dirigeant, Heraxis",
      quote:
        "Elisabeth a parfaitement — et très vite — compris mon contexte. Elle l'a bien pris en compte dans la construction du système. Les résultats ne se sont pas faits attendre : 5 témoignages récupérés en 15 jours. Grâce à l'accompagnement d'Elisabeth, je me sens équipé pour maintenir l'outil à l'avenir.",
    },
    {
      name: "Délphine Couet",
      role: "Indépendante, Guérir Anxiété",
      quote:
        "Elisabeth m'a vraiment accompagnée pour mettre en place l'automatisation. Je pensais m'y connaître un peu, mais c'était clairement beaucoup plus complexe que ce que je ne pensais. Avant : jusqu'à 20 minutes par jour à traiter mes emails pros. Après : 5 minutes. Charge mentale allégée.",
    },
    {
      name: "Bruno Bazso",
      role: "Client",
      quote:
        "La mise en place de l'automatisation est rapide et on est accompagné à chaque étape afin de déterminer son propre ton et les modèles récurrents. Des explications claires avec des éclaircissements quand nécessaire.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-2 md:px-4 bg-secondary border-b-4 border-foreground">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-foreground px-4 py-2 font-mono text-sm uppercase tracking-wider mb-6 bg-background">
            Ce qu'ils disent
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Des clients convaincus
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-4 border-foreground bg-background p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <Quote className="w-8 h-8 mb-4 text-primary" />
              <blockquote className="text-base mb-6 leading-relaxed flex-1">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t-2 border-foreground pt-4">
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground font-mono">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
