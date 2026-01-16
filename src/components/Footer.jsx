import { ArrowUp } from "lucide-react";
import { SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative py-8 px-4 bg-card border-t border-border">
      {/* Center content */}
      <div className="flex flex-col items-center text-center gap-2">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Fiona Gene U. Basa. All rights reserved.
        </p>

        {/* Icons + Tooltip */}
        <div className="relative flex items-center gap-2 text-xs text-muted-foreground group cursor-pointer">
          <span>Made with</span>

          <SiVite className="text-purple-500 text-lg" />
          <span>+</span>
          <FaReact className="text-cyan-400 text-lg animate-spin-slow" />

          {/* Gradient Tooltip */}
          <div
            className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2
                       rounded-lg px-4 py-1.5 text-xs font-medium text-white
                       bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500
                       shadow-lg backdrop-blur-md
                       opacity-0 translate-y-2
                       group-hover:opacity-100 group-hover:translate-y-0
                       transition-all duration-300"
          >
            Built with Vite + React
          </div>
        </div>
      </div>

      {/* Arrow */}
      <a
        href="#hero"
        className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full 
                   bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
