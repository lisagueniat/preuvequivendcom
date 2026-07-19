import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 border-b-4 border-foreground bg-background">
      <div className="container max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-lg uppercase tracking-wider">
            <span className="md:hidden">LA PREUVE<br />QUI VEND</span>
            <span className="hidden md:inline">LA PREUVE QUI VEND</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#process" className="text-sm font-medium hover:underline underline-offset-4">Concept</a>
            <a href="#benefits" className="text-sm font-medium hover:underline underline-offset-4">
              Avantages
            </a>
            <a href="#case-study" className="text-sm font-medium hover:underline underline-offset-4">
              Témoignages
            </a>
          </nav>

          <Button className="shadow-xs hover:shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all" asChild>
            <a href="https://form.typeform.com/to/qJVNaama" target="_blank" rel="noopener noreferrer">
              Réserver un appel
            </a>
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;
