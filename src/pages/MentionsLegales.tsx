import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-4xl px-4 py-16">
        <Link to="/">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-12 border-b-4 border-foreground pb-4">
          Mentions Légales
        </h1>

        <div className="space-y-8 text-lg">
          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">1. Éditeur du site</h2>
            <p className="text-muted-foreground">
              Le site La Preuve Qui Vend™ est édité par :<br />
              <strong className="text-foreground">[Nom de l'entreprise]</strong><br />
              [Forme juridique] au capital de [montant] €<br />
              Siège social : [Adresse complète]<br />
              SIRET : [Numéro SIRET]<br />
              RCS : [Ville] [Numéro]<br />
              N° TVA intracommunautaire : [Numéro TVA]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">2. Directeur de la publication</h2>
            <p className="text-muted-foreground">
              <strong className="text-foreground">[Nom du directeur de publication]</strong><br />
              Email : [email@example.com]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">3. Hébergement</h2>
            <p className="text-muted-foreground">
              Le site est hébergé par :<br />
              <strong className="text-foreground">[Nom de l'hébergeur]</strong><br />
              [Adresse de l'hébergeur]<br />
              [Téléphone de l'hébergeur]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">4. Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, marques) est protégé par le droit d'auteur et le droit des marques. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable de l'éditeur.
            </p>
            <p className="text-muted-foreground mt-4">
              La marque "La Preuve Qui Vend™" est une marque déposée. Son utilisation sans autorisation est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">5. Protection des données personnelles</h2>
            <p className="text-muted-foreground">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.
            </p>
            <p className="text-muted-foreground mt-4">
              Pour exercer ces droits, contactez-nous à : [email@example.com]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">6. Cookies</h2>
            <p className="text-muted-foreground">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Vous pouvez configurer votre navigateur pour refuser les cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">7. Limitation de responsabilité</h2>
            <p className="text-muted-foreground">
              L'éditeur s'efforce de fournir des informations exactes et à jour, mais ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées sur le site.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t-2 border-foreground/20 text-sm text-muted-foreground">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
