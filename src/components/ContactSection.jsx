import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-15 justify-center">
              <div className="flex items-start space-x-40">
                <div className="ml-95 mr-5 mt-0.5 bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />{" "}
                </div>
                <div>
                  <a
                    href="mailto:fionagene@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    fionagene@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <div className="hover:text-primary transition-colors">
                  <a
                    href="https://www.facebook.com/fionagenebasa"
                    target="_blank"
                  >
                    <Facebook />
                  </a>
                </div>
                <div className="hover:text-primary transition-colors">
                  <a
                    href="https://www.linkedin.com/in/fionagene/"
                    target="_blank"
                  >
                    <Linkedin />
                  </a>
                </div>
                <div className="hover:text-primary transition-colors">
                  <a
                    href="https://www.instagram.com/yonayonajin/?__pwa=1"
                    target="_blank"
                  >
                    <Instagram />
                  </a>
                </div>
                <div className="hover:text-primary transition-colors">
                  <a href="https://github.com/yonajin" target="_blank">
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
