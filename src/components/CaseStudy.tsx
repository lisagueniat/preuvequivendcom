import { Quote } from "lucide-react";
import stephanPhoto from "@/assets/Stephan.jpg";

const CaseStudy = () => {
  return (
    <section className="py-20 md:py-32 px-2 md:px-4 bg-secondary/30 border-b-4 border-foreground">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-foreground px-4 py-2 font-mono text-sm uppercase tracking-wider mb-6 bg-background">
            Étude de cas
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Héraxis — de zéro process à 5 témoignages en 15 jours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stéphan Guinchard, consultant en pricing et proposition de valeur
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Narrative */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Le point de départ</h3>
              <p className="text-muted-foreground leading-relaxed">
                Stéphan voulait remplir ses ateliers. Il connaissait la valeur des témoignages, mais le
                mécanisme manquait : pas de process, pas d'habitude d'en demander. Chaque atelier, chaque
                mission en entreprise passait sans laisser de trace exploitable pour convaincre les
                prochains participants.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Ce qu'on a mis en place</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un formulaire dédié aux participants de ses ateliers, avec des questions construites pour
                produire des témoignages qui parlent directement aux futurs inscrits — pas des compliments
                génériques. Et un cadre précis sur le moment de la demande : à quel instant du parcours
                participant solliciter le témoignage pour maximiser les retours.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Le résultat</h3>
              <p className="text-muted-foreground leading-relaxed">
                5 témoignages récupérés en 15 jours. Stéphan pilote le système lui-même depuis.
              </p>
            </div>
          </div>

          {/* Load-bearing stat */}
          <div className="border-4 border-foreground bg-background p-8 md:p-10 shadow-md flex flex-col items-center justify-center text-center">
            <div className="text-6xl md:text-7xl font-black text-primary leading-none mb-2">
              5
            </div>
            <p className="text-xl font-bold mb-1">témoignages</p>
            <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
              en 15 jours
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="border-4 border-foreground bg-background p-6 md:p-10 shadow-md">
          <Quote className="w-10 h-10 text-primary mb-4" />
          <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
            « Elisabeth a parfaitement – et très vite – compris mon contexte. Les résultats ne se sont pas
            faits attendre : 5 témoignages récupérés en 15 jours. Elisabeth m'a aidé à faire le plus dur :
            me lancer. Maintenant ça tourne avec un minimum d'efforts. »
          </blockquote>
          <div className="flex items-center gap-3 border-t-2 border-foreground pt-4">
            <img
              src={stephanPhoto}
              alt="Stéphan Guinchard"
              className="w-12 h-12 rounded-full border-2 border-foreground object-cover"
            />
            <span className="font-bold font-mono text-sm">Stéphan Guinchard, Héraxis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
