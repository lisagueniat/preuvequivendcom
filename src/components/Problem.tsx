import { X, Check } from "lucide-react";
const Problem = () => {
  const problems = ["Vos visiteurs hésitent faute de signaux clairs", "Les avis existent mais sont dispersés ou invisibles", "La collecte dépend de votre mémoire et de votre temps", "Rien ne se déclenche automatiquement"];
  const solutions = ["Des témoignages visibles aux points de décision", "Une collecte déclenchée par des règles précises", "Une preuve sociale qui fonctionne sans supervision", "Un système installé une fois, actif en continu"];
  return <section className="py-20 md:py-32 px-2 md:px-4 border-b-4 border-foreground">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sans signaux de confiance visibles, vos prospects hésitent
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            92 % des consommateurs consultent des avis avant d'acheter. Lorsqu'ils n'en trouvent pas, la décision est simplement reportée… ou abandonnée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="border-4 border-foreground p-4 md:p-8 bg-secondary shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center bg-destructive text-destructive-foreground">
                <X className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase">Sans Machine À Preuves</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 flex-shrink-0 border border-foreground bg-destructive text-destructive-foreground flex items-center justify-center text-xs font-mono mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{problem}</span>
                </li>)}
            </ul>
          </div>

          <div className="border-4 border-foreground p-4 md:p-8 bg-background shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center text-background bg-[#16a249]">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase">Avec Machine À Preuves</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex-shrink-0 border border-foreground bg-green-600 text-background flex items-center justify-center text-xs font-mono mt-0.5">1</span>
                <span>Des témoignages visibles aux points de décision</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex-shrink-0 border border-foreground bg-green-600 text-background flex items-center justify-center text-xs font-mono mt-0.5">2</span>
                <span>Une collecte déclenchée par des règles précises</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex-shrink-0 border border-foreground bg-green-600 text-background flex items-center justify-center text-xs font-mono mt-0.5">3</span>
                <span>Une preuve sociale qui fonctionne sans supervision</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex-shrink-0 border border-foreground bg-green-600 text-background flex items-center justify-center text-xs font-mono mt-0.5">4</span>
                <span>Un système installé une fois, actif en continu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default Problem;