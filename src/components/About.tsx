import elisabethPhoto from "@/assets/elisabeth-gueniat.jpg";
import { Linkedin } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="border-4 border-background shadow-brutal overflow-hidden">
              <img 
                src={elisabethPhoto} 
                alt="Elisabeth Gueniat" 
                className="w-full max-w-md h-auto object-cover grayscale"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <span className="inline-block px-4 py-2 bg-background text-foreground text-sm font-bold border-2 border-background">
              La fondatrice
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              Elisabeth Gueniat
            </h2>

            <p className="text-lg leading-relaxed max-w-lg">
              Spécialiste en product marketing, j'aide les entreprises à transformer plus de visiteurs en clients satisfaits qui reviennent. J'ai travaillé sur des projets où la confiance est décisive — notamment dans les services financiers.
            </p>

            <p className="text-lg leading-relaxed max-w-lg">
              Avec La Machine à Preuves, j'applique cette expertise pour installer des systèmes de témoignages qui renforcent la confiance et soutiennent vos ventes en continu.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/elisabethgueniat/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
