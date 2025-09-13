"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Information Technology and Engineering",
      institution: "Baba Ghulam Shah Badshah University",
      location: "Rajouri, J&K",
      period: "2021 - 2025",
    },
    {
      degree: "Class 12",
      institution: "Govt Boys Higher Secondary",
      location: "Mujgund, J&K Board",
      period: "2020",
    },
    {
      degree: "Class 10",
      institution: "Kashmir Public Vidyalaya",
      location: "Mirgund, J&K Board",
      period: "2018",
    },
  ]

  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
        </motion.div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <GraduationCap className="h-5 w-5 text-primary mr-2" />
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                      </div>
                      <div className="flex items-center text-foreground/70">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{edu.institution}</span>
                        <span className="mx-2">•</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-foreground/70">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

