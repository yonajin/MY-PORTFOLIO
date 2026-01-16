import { ArrowDown } from "lucide-react";
import DarkVeil from "../components/DarkVeil";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      {/* Background animation */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <DarkVeil />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
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

        {/* Arrow at the bottom */}
        <div className="absolute mt-50 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
};
