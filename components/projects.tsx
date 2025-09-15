"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "University Website AI Powered Chatbot",
      description:
        "Final year project. The chatbot is for the university website mostly used for the frequently asked questions. It does work easy for the visitors as well as for the administration.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Python",
        "ML",
        "NLP",
        "JSON",
      ],
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
      description:
        "E-commerce site for ordering utilities within a university campus.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container max-w-6xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-500"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden card-hover">
                <div className="flex items-center justify-center h-48 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
                  <h3 className="px-4 text-2xl font-bold text-center text-white">
                    {project.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="mb-4 text-foreground/80">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-secondary/70"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
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
  );
}
