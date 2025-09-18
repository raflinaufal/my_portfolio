"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "IT Programmer",
      company: "PT. Multi Artha Prima Sejahtera",
      location: "Jakarta, Indonesia",
      period: "November 2024 - February 2025",
      description: [
        "Developed internal web applications to support company operations using CodeIgniter 3, React.js (TSX), Node.js, Express, and MySQL.",
        "Designed and implemented responsive user interfaces with React.js and TypeScript for better maintainability.",
        "Built and optimized RESTful APIs with Node.js and Express to handle backend processes.",
        "Integrated MySQL database for data storage, retrieval, and management to ensure system reliability.",
        "Focused on delivering secure, efficient, and user-friendly solutions tailored for internal company needs.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "PT. Matra Kosala Digdaya",
      location: "Jakarta, Indonesia",
      period: "August 2024 - November 2024",
      description: [
        "Developed an e-commerce website for material trading using Next.js.",
        "Built and designed a responsive company profile website to showcase services and portfolio.",
        "Collaborated with the team to ensure seamless user experience and functionality.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Futura Property",
      location: "Jakarta, Indonesia",
      period: "December 2022 - November 2023",
      description: [
        "Developed a real estate website for property buying and selling using Next.js.",
        "Focused on building clean, efficient, and user-friendly frontend features.",
        "Collaborated with backend developers to integrate APIs and ensure seamless functionality.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-500"></div>
        </motion.div>

        <div className="max-w-6xl px-4 mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-l-4 card-hover border-l-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col justify-between mb-4 md:flex-row md:items-center">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <div className="flex items-center mt-1 text-foreground/70">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span>{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-foreground/70">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
