import elisabethPhoto from "@/assets/elisabeth-gueniat.png";
const About = () => {
  const achievements = [{
    stat: "+285%",
    description: "de croissance clients en 10 jours, avec 51% des prospects convertis en clients"
  }, {
    stat: "+50%",
    description: "de leads réellement qualifiés, sans augmenter le budget marketing"
  }, {
    stat: "46%",
    description: "de prospects transformés en clients à partir de trafic déjà existant"
  }];
  return <section className="py-20 px-2 md:px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Top Section: Photo + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Left - Rectangular Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md aspect-[3/4] border-4 border-foreground shadow-brutal overflow-hidden bg-muted">
              <img src={elisabethPhoto} alt="Elisabeth Gueniat" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <span className="inline-block w-fit px-4 py-2 border-2 border-foreground bg-background text-sm font-medium">
              La fondatrice
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">Je suis Elisabeth.</h2>

            <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>Je suis spécialiste en product marketing, un métier centré sur une question simple : comment transformer les visiteurs en clients satisfaits qui continuent d'utiliser le produit année après année ?</p>
              <p>J'ai travaillé sur des projets où la confiance est décisive : services financiers (Kontist) et l'immobilier.</p>
              <p>Avec La Machine à Preuves, j'applique cette expertise pour installer des systèmes de témoignages qui renforcent la confiance et soutiennent vos ventes en continu.</p>
              <p>Au plaisir d'échanger avec vous.<br />Elisabeth Gueniat</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Achievement Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => <div key={index} className="bg-background border-4 border-foreground p-6 md:p-8 shadow-brutal text-center">
              <p className="text-4xl md:text-5xl font-black text-primary mb-3">
                {achievement.stat}
              </p>
              <p className="text-base leading-relaxed">
                {achievement.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default About;