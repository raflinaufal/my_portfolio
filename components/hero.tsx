"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen pt-16 overflow-hidden"
    >
      <div className="container flex flex-col items-center max-w-6xl px-4 py-12 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <img
            src="/zura.jpeg"
            alt="Profile Picture"
            className="rounded-full border-4 border-primary/20 shadow-xl h-[150px] w-[150px] object-cover mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-4xl font-bold md:text-5xl"
        >
          Hi, I'm{" "}
          <span className="font-extrabold gradient-text">
            Rafli Naufal Alief
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-foreground/80 mb-8 h-[60px]"
        >
          <TypeAnimation
            sequence={[
              "IT Engineer",
              1000,
              "Web Developer",
              1000,
              "Prompt Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button asChild size="lg" className="rounded-full">
            <Link href="/cv_rafli.pdf" download>
              Download CV
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="#projects">View Projects</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-12 space-x-4"
        >
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
            <Link href="raflinaufalalief204@gmail.com">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute transform -translate-x-1/2 bottom-10 left-1/2 animate-bounce"
        >
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full"
            aria-label="Scroll down"
          >
            <Link href="#about">
              <ArrowDown className="w-6 h-6" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
