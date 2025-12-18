import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Coach Business",
      quote: "Avant, mes visiteurs hésitaient. Maintenant, ils me contactent directement en citant les témoignages qu'ils ont vus. +150% de demandes en 1 mois.",
      stars: 5,
    },
    {
      name: "Thomas Laurent",
      role: "E-commerce",
      quote: "L'installation a pris 2 jours comme promis. Mon taux de conversion est passé de 2% à 4.5%. ROI immédiat.",
      stars: 5,
    },
    {
      name: "Sophie Martin",
      role: "Consultante",
      quote: "Je n'avais pas le temps de gérer mes témoignages. Maintenant tout est automatisé et mes clients voient des preuves sociales partout.",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-secondary border-b-4 border-foreground">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-foreground px-4 py-2 font-mono text-sm uppercase tracking-wider mb-6 bg-background">
            Ce qu'ils disent de nous
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Des entrepreneurs convaincus
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-4 border-foreground bg-background p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-foreground" />
                ))}
              </div>
              <blockquote className="text-lg mb-6 leading-relaxed">
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
