"use client";

import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Link href="#home" className="mb-6 text-2xl font-bold gradient-text">
            Portfolio
          </Link>

          <div className="flex justify-center mb-8 space-x-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
            >
              <Link
                href="https://github.com/raflinaufal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
            >
              <Link
                href="https://www.linkedin.com/in/rafli-naufal-alief-5a1518257/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
            >
              <Link href="mailto:raflinaufalalief204@gmail.com">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
            >
              <Link
                href="https://www.instagram.com/raflinaufal21/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild variant="ghost" size="sm">
              <Link href="#home">Home</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="#about">About</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="#experience">Experience</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="#projects">Projects</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="#skills">Skills</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="#contact">Contact</Link>
            </Button>
          </div>

          <p className="text-center text-foreground/70">
            &copy; {currentYear} Rafli Naufal Alief . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
