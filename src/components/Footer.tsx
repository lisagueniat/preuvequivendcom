const Footer = () => {
  return (
    <footer className="border-t-4 border-foreground py-12 px-4">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold uppercase tracking-wider">La Preuve Qui Vend™</div>
            <p className="text-sm text-muted-foreground mt-1">Des témoignages qui convertissent 24/24</p>
          </div>

          <div className="flex gap-8 text-sm">
            <a href="/mentions-legales" className="hover:underline underline-offset-4">
              Mentions légales
            </a>
            <a href="/cgv" className="hover:underline underline-offset-4">
              CGV
            </a>
          </div>

          <div className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} La Preuve Qui Vend™
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
