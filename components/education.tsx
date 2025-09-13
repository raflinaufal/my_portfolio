"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor’s Degree in Information Technology",
      institution: "Universitas Bina Sarana Informatika (UBSI)",
      location: "Jakarta, Indonesia",
      period: "2021 - 2025",
    },
    {
      degree: "Senior High School",
      institution: "Prima Wisata",
      location: "Jakarta, Indonesia",
      period: "2020",
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-500"></div>
        </motion.div>

        <div className="max-w-6xl px-4 mx-auto space-y-8">
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
                  <div className="flex flex-col justify-between md:flex-row md:items-center">
                    <div>
                      <div className="flex items-center mb-2">
                        <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                      </div>
                      <div className="flex items-center text-foreground/70">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{edu.institution}</span>
                        <span className="mx-2">•</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-foreground/70">
                      <Calendar className="w-4 h-4 mr-2" />
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
  );
}
