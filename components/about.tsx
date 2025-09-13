"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone } from "lucide-react"
import { Linkedin, Github, Twitter } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Seeking a dynamic role in an organization where I can leverage my initiative and managerial skills to
                  drive corporate growth while continuously enhancing my knowledge. Eager to tackle professional
                  challenges, I aim to utilize my strong interpersonal skills, time management, and problem-solving
                  abilities to deliver impactful results while upholding core values.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="skill-pill bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    English
                  </span>
                  <span className="skill-pill bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                    Hindi
                  </span>
                  <span className="skill-pill bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Urdu
                  </span>
                  <span className="skill-pill bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
                    Kashmiri
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="skill-pill bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                    Machine Learning
                  </span>
                  <span className="skill-pill bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
                    Artificial Intelligence
                  </span>
                  <span className="skill-pill bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                    Data Analytics
                  </span>
                  <span className="skill-pill bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
                    DevOps
                  </span>
                  <span className="skill-pill bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                    Technology Trends
                  </span>
                  <span className="skill-pill bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
                    Mathematics
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-4">Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-pill bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
                    Surfing the Internet
                  </span>
                  <span className="skill-pill bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                    Playing Cricket
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
                <h3 className="text-2xl font-semibold mb-6">Personal Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-foreground/80">Sumbal, Bandipora (JK), 193501</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-foreground/80">smsajad18@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-foreground/80">+91 6005921817</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-semibold mb-4">Social Profiles</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://linkedin.com/in/syed-mahir-088abc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span>linkedin.com/in/syed-mahir-088abc</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/smahir08"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span>github.com/smahir08</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/smahir08"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                        <span>twitter.com/smahir08</span>
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
  )
}

