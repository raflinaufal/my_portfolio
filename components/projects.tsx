"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "University Website AI Powered Chatbot",
      description:
        "Final year project. The chatbot is for the university website mostly used for the frequently asked questions. It does work easy for the visitors as well as for the administration.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Python", "ML", "NLP", "JSON"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Power BI Dashboard",
      description:
        "Developed a Power BI dashboard analyzing sales, revenue, and customer demographics for a hypothetical business scenario.",
      technologies: ["Power BI", "Data Analytics", "Data Visualization"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Food Company Website",
      description:
        "Developed a food company website that allows users to order food online, advance booking in restaurants. Moreover it also has a feature to book mess facility for hostels, provides dashboard features to those who avail it.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Kampus Kart",
      description: "E-commerce site for ordering utilities within a university campus.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      demoLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white px-4 text-center">{project.title}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-foreground/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/70">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

