"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Globe, Terminal, Cpu, Braces } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 80 },
        { name: "Shell Programming", level: 70 },
      ],
    },
    {
      category: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
      ],
    },
    {
      category: "Database Management",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "DBMS", level: 80 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      category: "Other Tools",
      icon: <Terminal className="h-6 w-6" />,
      skills: [
        { name: "Shell Scripting", level: 70 },
        { name: "VMware", level: 65 },
        { name: "Git & GitHub", level: 80 },
      ],
    },
    {
      category: "Libraries",
      icon: <Braces className="h-6 w-6" />,
      skills: [
        { name: "NumPy", level: 80 },
        { name: "Pandas", level: 85 },
        { name: "Matplotlib", level: 75 },
      ],
    },
    {
      category: "AI Tools",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: "Prompt Engineering", level: 90 },
        { name: "GPT", level: 85 },
        { name: "Claude", level: 80 },
        { name: "Replit", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mr-3">{category.icon}</div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-foreground/70">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
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

