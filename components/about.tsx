"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import { Linkedin, Github, Twitter } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container max-w-6xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-500"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold">
                  Professional Summary
                </h3>
                <p className="mb-6 leading-relaxed text-foreground/80">
                  Hi, I’m a fresh graduate in Information Technology with
                  hands-on experience in web development. I love building clean,
                  functional, and user-friendly websites, and I’m always excited
                  to keep learning and improving my skills.
                </p>

                <h3 className="mb-4 text-2xl font-semibold">Languages</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-blue-800 bg-blue-100 skill-pill dark:bg-blue-900/30 dark:text-blue-300">
                    Indonesia
                  </span>
                  <span className="text-purple-800 bg-purple-100 skill-pill dark:bg-purple-900/30 dark:text-purple-300">
                    English
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold">Interests</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-indigo-800 bg-indigo-100 skill-pill dark:bg-indigo-900/30 dark:text-indigo-300">
                    Web Development
                  </span>
                  <span className="skill-pill bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
                    Artificial Intelligence (Machine Learning basics)
                  </span>
                  <span className="skill-pill bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                    Fullstack Development
                  </span>
                  <span className="skill-pill bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                    Problem Solving & Debugging
                  </span>
                  <span className="skill-pill bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
                    Continuous Learning & Adaptability
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-semibold">Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-teal-800 bg-teal-100 skill-pill dark:bg-teal-900/30 dark:text-teal-300">
                    Playing Guitar
                  </span>
                  <span className="text-orange-800 bg-orange-100 skill-pill dark:bg-orange-900/30 dark:text-orange-300">
                    Playing Games
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="mb-6 text-2xl font-semibold">
                  Personal Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="flex-shrink-0 w-5 h-5 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-foreground/80">Jakarta - Indonesia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="flex-shrink-0 w-5 h-5 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-foreground/80">
                        raflinaufalalief204@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="flex-shrink-0 w-5 h-5 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-foreground/80">+62 85648355728</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="mb-4 text-2xl font-semibold">
                    Social Profiles
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rafli-naufal-alief-5a1518257/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-colors text-foreground/80 hover:text-primary"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>
                          linkedin.com/in/rafli-naufal-alief-5a1518257
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/raflinaufal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-colors text-foreground/80 hover:text-primary"
                      >
                        <Github className="w-4 h-4" />
                        <span>github.com/raflinaufal</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/raflinaufal21/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-colors text-foreground/80 hover:text-primary"
                      >
                        <Instagram className="w-4 h-4" />
                        <span>instagram.com/raflinaufal21</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
