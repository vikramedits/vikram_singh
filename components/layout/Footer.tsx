"use client";

import { ArrowUp } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <a href="#home" className="text-xl font-bold tracking-tight">
              <span className="text-violet-500">N</span>exaura
              <span className="text-violet-500">.</span>
            </a>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full Stack Developer building modern scalable web experiences.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">
              Connect
            </h4>

            <div className="flex gap-3">
              {/* <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexaura
          </p>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-accent"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}