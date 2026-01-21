import { useEffect } from "react";
const SenjaWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.senja.io/widget/6a195629-53b8-41d3-befe-e9818ae20250/platform.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <section className="py-20 md:py-32 px-2 md:px-4 bg-background border-b-4 border-foreground">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-foreground px-4 py-2 font-mono text-sm uppercase tracking-wider mb-6 bg-secondary">
            Résultats concrets
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Machine à Preuves en Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Machine à Preuves installer sur la page de présentation du Cerveau Numérique (chez Julien Gueniat)<a href="https://organisologie.com/le-cerveau-numerique" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Cerveau Numérique</a>.</p>
        </div>

        <div className="senja-embed" data-id="6a195629-53b8-41d3-befe-e9818ae20250" data-mode="shadow" data-lazyload="false" style={{
        display: "block",
        width: "100%"
      }} />
      </div>
    </section>;
};
export default SenjaWidget;