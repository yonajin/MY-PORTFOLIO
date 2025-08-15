import { Briefcase, Code, User } from "lucide-react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import TiltedCard from "../components/TiltedCard";
import PixelTransition from "../components/PixelTransition";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center mb-30">
        <div className="space-y-6">
          {" "}
          <div className="ml-135">
            <TiltedCard
              imageSrc="./src/ako.png"
              altText="Fiona Gene"
              captionText="Fiona Gene"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={15}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
            />
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">Fiona Gene U. Basa</h3>
            <span class="fi fi-ph"></span>
            <h2>Frontend Developer</h2>

            <p className="ml-100 mr-100">
              I’m a 3rd-year college student specializing in frontend
              development. Passionate about creating clean, responsive user
              interfaces, I enjoy turning ideas into interactive digital
              experiences. I’m highly adaptable to new tools and technologies,
              and I’m continuously learning to improve my craft and stay
              up-to-date with the latest trends in web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl mb-30">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
          Experiences
        </h2>

        <div className=" items-center">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">
              Work Immersion at Xaviery Computers
            </h3>
            <h4 className="text-2xl font-semibold">
              (Urdaneta City, Pangasinan)
            </h4>
            <h5 className="text-xl font-semibold">
              February 2023 to April 2023
            </h5>
            <h6 className="text-1xl font-semibold">Frontdesk Intern</h6>

            <ul>
              <li>• Assisting with general office tasks</li>
              <li>• Answering customers inquiries</li>
              <li>• Providing information about what the customer asks</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl mb-30">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Urdaneta City National High School (2021-2023)
            </h3>
            <h4 className="text-md font-semibold">
              • Information and Communications Technology (ICT)
            </h4>

            <div className="space-y-6">
              <div className="space-y-6">
                <PixelTransition
                  firstContent={
                    <img
                      src="./src/iskol1.png"
                      alt="urdaneta city national highschool"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#ffffffff",
                      }}
                    >
                      <img
                        src="./src/ucnhs_logo.jpg"
                        alt="urdaneta city national highschool"
                      />
                    </div>
                  }
                  gridSize={12}
                  pixelColor="#ffffff"
                  animationStepDuration={0.3}
                  className="custom-pixel-card"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              University of Pangasinan-Urdaneta (2023-2027)
            </h3>
            <h4 className="text-md font-semibold">
              • Bachelor of Science in Computer Science (BSCS)
            </h4>

            <div className="space-y-6">
              <PixelTransition
                firstContent={
                  <img
                    src="./src/iskol2.png"
                    alt="university of pangasinan urdaneta"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#ffffffff",
                    }}
                  >
                    <img
                      src="./src/upang_logo.png"
                      alt="university of pangasinan urdaneta"
                    />
                  </div>
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.3}
                className="custom-pixel-card"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div className="space-y-6">
            <div className="space-y-6">
              <img
                className="h-80 w-130 rounded-4xl border-2
        border-white rounded-[30px]"
                src="./src/cert1.jpg"
                alt="computer systems servicing nc ii"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-6">
              <img
                className="h-80 w-130 rounded-4xl border-2
        border-white rounded-[30px]"
                src="./src/cert2.png"
                alt="udemy certificate"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
