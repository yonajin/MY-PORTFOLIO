import FuzzyText from "../components/FuzzyText";
import LetterGlitch from "../components/LetterGlitch";
import { useSound } from "../hooks/useSound";

export const NotFound = () => {
  const playGlitch = useSound("/sounds/glitch.mp3", 0.4);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* LETTER GLITCH BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* DARK OVERLAY (IMPORTANT FOR READABILITY) */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div onMouseEnter={playGlitch}>
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover
            className="text-white text-8xl md:text-[10rem] font-bold leading-none text-center cursor-pointer"
          >
            404 not found
          </FuzzyText>
        </div>
      </div>
    </section>
  );
};
