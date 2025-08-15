import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML", category: "frontend", icon: "html.png" },
  { name: "CSS", category: "frontend", icon: "css.png" },

  {
    name: "JavaScript",
    category: "frontend",
    icon: "javascript.png",
  },
  { name: "React", category: "frontend", icon: "react.png" },
  { name: "Tailwind CSS", category: "frontend", icon: "tailwind.png" },

  // Backend
  { name: "PHP", category: "backend", icon: "php.png" },
  { name: "Python", category: "backend", icon: "python.png" },
  { name: "PostgreSQL", category: "backend", icon: "postgre.png" },
  { name: "MySQL", category: "backend", icon: "mysql.png" },

  // Tools
  { name: "Git", category: "tools", icon: "git.png" },
  { name: "GitHub", category: "tools", icon: "github.png" },

  { name: "Figma", category: "tools", icon: "figma.png" },
  { name: "VS Code", category: "tools", icon: "vscode.png" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <img
                src={`src/assets/${skill.icon}`}
                alt={`${skill.name} icon`}
                className="w-12 h-12 mx-auto mb-4"
              />

              <div className="text-middle">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
