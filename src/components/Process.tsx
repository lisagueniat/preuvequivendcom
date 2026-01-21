import { Search, Settings, Rocket, LayoutGrid } from "lucide-react";
const Process = () => {
  const steps = [{
    number: "01",
    icon: Search,
    title: "Audit & cartographie du \"Moment de Vérité\"",
    description: "Nous analysons votre parcours client pour identifier le moment précis où vos clients sont le plus enclins à témoigner (fin de mission, résultat atteint, livraison, victoire concrète). Ce moment est rarement celui que l'on croit — et c'est là que la plupart des demandes de témoignages échouent. Nous définissons également les 3 objections majeures que vos futurs prospects doivent voir traitées par vos témoignages.",
    time: "30 min (appel de lancement)"
  }, {
    number: "02",
    icon: Settings,
    title: "Paramétrage & Ingénierie de la preuve",
    description: "Nous construisons votre infrastructure technique : configuration de l'outil de capture, rédaction des scripts de questions \"anti-vague\" et création des widgets d'affichage.",
    time: "0 min. On s'occupe de tout."
  }, {
    number: "03",
    icon: Rocket,
    title: "Livraison & Mise en service",
    description: "Nous intégrons le système sur vos pages de vente, vos emails et vos tunnels. Vous recevez votre tableau de bord de pilotage et le système commence à capturer vos premières preuves en 24h.",
    time: "15 min (revue finale)"
  }, {
    number: "04",
    icon: LayoutGrid,
    title: "Affichage stratégique",
    description: "Une fois les premiers témoignages collectés, nous les positionnons là où ils ont un impact réel sur la décision : pages clés, emails sensibles, moments de bascule. Ce système repose sur une installation initiale structurée. Il ne nécessite pas de gestion quotidienne, mais s'appuie sur vos outils existants.",
    time: "Automatique"
  }];
  return <section className="py-20 md:py-32 px-2 md:px-4 bg-foreground text-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-background px-4 py-2 font-mono text-sm uppercase tracking-wider mb-6">
            Les 4 étapes
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Activez votre Machine À Preuves
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">Nous concevons et mettons en place la machine. Vous récoltez les preuves et augmentez vos revenus.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-8 mt-8">
          {steps.map((step, index) => <div key={index} className="border-4 border-background p-6 md:p-8 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-6 -left-2 bg-background text-foreground px-4 py-2 font-mono text-2xl font-bold">
                {step.number}
              </div>
              <div className="pt-4">
                <div className="w-16 h-16 border-2 border-background flex items-center justify-center mb-6 group-hover:bg-background group-hover:text-foreground transition-colors">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="opacity-80 mb-4">{step.description}</p>
                <div className="border-t border-background/30 pt-4">
                  <span className="font-mono text-sm opacity-70">Votre temps requis : {step.time}</span>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Process;