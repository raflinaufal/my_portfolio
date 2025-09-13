"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Recimotech Solutions",
      location: "Remote",
      period: "June 2024 - August 2024",
      description: [
        "Completed a comprehensive course in Data Science, acquiring skills in data analysis, visualization, and machine learning techniques.",
        "Utilized Python libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization.",
        "Conducted exploratory data analysis (EDA) to uncover trends, supporting data-driven decision-making.",
        "Developed machine learning models with Scikit-learn for classification, regression, and clustering tasks.",
        "Presented findings through clear visualizations and reports.",
      ],
    },
    {
      title: "Web Development Intern",
      company: "NIT Srinagar",
      location: "Srinagar, J&K",
      period: "June 2023 - July 2023",
      description: [
        "Developed responsive web applications using HTML, CSS, and JavaScript.",
        "Collaborated with a team to enhance user interface design and usability.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
        </motion.div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <div className="flex items-center text-foreground/70 mt-1">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-foreground/70">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
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
  )
}

