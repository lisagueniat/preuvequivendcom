import elisabethPhoto from "@/assets/elisabeth-gueniat.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const achievements = [
    "+285 % de croissance clients en 10 jours, avec 51 % des prospects convertis en clients",
    "+50 % de leads réellement qualifiés, sans augmenter le budget marketing",
    "46 % de prospects transformés en clients à partir de trafic déjà existant",
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 border-4 border-foreground p-6 bg-background shadow-brutal">
          À propos
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          {/* Photo */}
          <div className="flex-shrink-0">
            <Avatar className="w-48 h-48 md:w-56 md:h-56 border-4 border-primary shadow-brutal">
              <AvatarImage 
                src={elisabethPhoto} 
                alt="Elisabeth Gueniat" 
                className="object-cover"
              />
              <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">
                EG
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Content */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg leading-relaxed">
              Je suis <strong>Product Marketing Manager certifiée</strong>, avec plus de 15 années d'expérience dans des environnements exigeants (services financiers, produits numériques et parcours clients à fort enjeu).
            </p>

            <p className="text-lg leading-relaxed">
              J'ai travaillé sur des problématiques très concrètes : comment transformer des visiteurs hésitants en clients, comment répondre aux objections avant même qu'elles ne bloquent la vente, et comment faire en sorte que les bons messages apparaissent au bon moment.
            </p>

            <div className="bg-background border-4 border-foreground p-6 shadow-brutal">
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

            <p className="text-lg leading-relaxed">
              Aujourd'hui, j'applique cette expertise à un sujet souvent sous-exploité : <strong>la preuve sociale</strong>.
            </p>

            <p className="text-2xl font-black text-primary">
              Elisabeth Gueniat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
