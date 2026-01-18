import DarkVeil from "../components/DarkVeil";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen px-4 overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>

      {/* TEXT CONTENT (TOP PART) */}
      <div className="relative z-10 pt-55 text-center max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Fiona Gene
            </span>
            <span className="text-gradient ml-1 opacity-0 animate-fade-in-delay-2">
              {" "}
              Basa
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
            Frontend is my focus. Coffee keeps me going. Sleep keeps me sane.
          </p>
        </div>
      </div>

    </section>
  );
};
