import elisabethPhoto from "@/assets/elisabeth-gueniat.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const achievements = [
    "+285 % de croissance clients en 10 jours, avec 51 % des prospects convertis en clients",
    "+50 % de leads réellement qualifiés, sans augmenter le budget marketing",
    "46 % de prospects transformés en clients à partir de trafic déjà existant",
  ];

  return (
    <section className="py-20 px-2 md:px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 border-4 border-foreground p-4 md:p-6 bg-background shadow-brutal">
          La fondatrice
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          {/* Left Column - Photo + Name + Text */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Avatar className="w-48 h-48 md:w-56 md:h-56 border-4 border-primary shadow-brutal">
              <AvatarImage src={elisabethPhoto} alt="Elisabeth Gueniat" className="object-cover" />
              <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">EG</AvatarFallback>
            </Avatar>

            <p className="text-base leading-relaxed text-center md:text-left">
              Je suis spécialiste en product marketing, un métier centré sur une question simple : comment transformer
              plus de visiteurs en clients, puis en clients satisfaits qui reviennent, en optimisant le parcours client
              à chaque étape.
            </p>

            <p className="text-base leading-relaxed text-center md:text-left">
              J'ai travaillé sur des projets où la confiance est décisive — notamment dans les services financiers.
            </p>

            <p className="text-base leading-relaxed text-center md:text-left">
              Avec La Machine à Preuves, j'applique cette expertise pour installer des systèmes de témoignages qui
              renforcent la confiance et soutiennent vos ventes en continu.
            </p>

            <p className="text-base italic text-center md:text-left">Elisabeth Gueniat</p>
          </div>

          {/* Right Column - Achievements Box */}
          <div className="flex items-center">
            <div className="bg-background border-4 border-foreground p-4 md:p-6 shadow-brutal w-full">
              <p className="font-bold mb-4">Sur des projets récents, ces approches ont permis notamment :</p>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-black text-xl">→</span>
                    <span className="text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
