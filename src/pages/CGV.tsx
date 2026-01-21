import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CGV = () => {
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
          Conditions Générales de Vente
        </h1>

        <div className="space-y-8 text-lg">
          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Article 1 - Objet</h2>
            <p className="text-muted-foreground">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre La Preuve Qui Vend™ et ses clients dans le cadre de la prestation de services de création de témoignages clients vidéo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Article 2 - Services proposés</h2>
            <p className="text-muted-foreground">
              La Preuve Qui Vend™ propose des services de création de témoignages clients professionnels, incluant :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>Interviews vidéo de vos clients</li>
              <li>Montage et post-production</li>
              <li>Optimisation pour les différentes plateformes</li>
              <li>Livraison des fichiers finaux</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Article 3 - Tarifs et paiement</h2>
            <p className="text-muted-foreground">
              Les tarifs sont indiqués en euros TTC sur le site. Le paiement s'effectue selon les modalités convenues lors de la commande :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>Acompte de 50% à la commande</li>
              <li>Solde de 50% à la livraison</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Les paiements peuvent être effectués par virement bancaire ou carte bancaire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Article 4 - Délais de livraison</h2>
            <p className="text-muted-foreground">
              Les délais de livraison sont communiqués à titre indicatif et peuvent varier selon la complexité du projet et la disponibilité des clients à interviewer. La Preuve Qui Vend™ s'engage à informer le client de tout retard éventuel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Article 5 - Droit de rétractation</h2>
            <p className="text-muted-foreground">
              Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de prestations de services pleinement exécutés avant la fin du délai de rétractation et dont l'exécution a commencé après accord préalable exprès du consommateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Article 6 - Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              Une fois le paiement intégral effectué, le client acquiert les droits d'utilisation des vidéos produites. La Preuve Qui Vend™ conserve le droit d'utiliser les réalisations à des fins de promotion de son activité, sauf accord contraire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Article 7 - Responsabilité</h2>
            <p className="text-muted-foreground">
              La Preuve Qui Vend™ s'engage à apporter tout le soin nécessaire à la réalisation des prestations. Sa responsabilité est limitée au montant de la prestation commandée.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Article 8 - Réclamations</h2>
            <p className="text-muted-foreground">
              Toute réclamation doit être adressée par email à [email@example.com] dans un délai de 14 jours suivant la livraison de la prestation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Article 9 - Droit applicable et litiges</h2>
            <p className="text-muted-foreground">
              Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. À défaut d'accord, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Article 10 - Modification des CGV</h2>
            <p className="text-muted-foreground">
              La Preuve Qui Vend™ se réserve le droit de modifier les présentes CGV à tout moment. Les conditions applicables sont celles en vigueur au moment de la commande.
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

export default CGV;
