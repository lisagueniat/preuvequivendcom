const BeforeAfter = () => {
  return <section className="py-20 md:py-32 px-2 md:px-4 bg-background border-b-4 border-foreground">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-foreground px-4 py-2 font-mono text-sm uppercase tracking-wider mb-6 bg-secondary">
            Exemples clients
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Avant / Après
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La différence entre une preuve sociale amateur et une preuve sociale professionnelle
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Before */}
          <div className="space-y-4">
            <div className="inline-block border-2 border-destructive bg-destructive/10 px-3 py-1 font-mono text-sm uppercase tracking-wider text-destructive">
              ❌ Avant
            </div>
            <div className="border-4 border-foreground bg-muted p-4 aspect-[4/3] flex items-center justify-center shadow">
              <div className="text-center text-muted-foreground">
                <div className="text-6xl mb-4">📷</div>
                <p className="font-mono text-sm">Image "Avant" à insérer</p>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="space-y-4">
            <div className="inline-block border-2 border-primary bg-primary/10 px-3 py-1 font-mono text-sm uppercase tracking-wider text-primary">
              ✅ Après
            </div>
            <div className="border-4 border-foreground bg-muted p-4 aspect-[4/3] flex items-center justify-center shadow">
              <div className="text-center text-muted-foreground">
                <div className="text-6xl mb-4">📷</div>
                <p className="font-mono text-sm">Image "Après" à insérer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BeforeAfter;