"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  GitBranch,
  Zap,
  Layers,
  Terminal,
  FileCode,
  Cpu,
  Settings,
} from "lucide-react";

export default function Skills() {
  const topLaneSkills = [
    {
      name: "TailwindCSS",
      color: "bg-cyan-100 dark:bg-cyan-900/30",
      textColor: "text-cyan-800 dark:text-cyan-200",
      icon: Palette,
    },
    {
      name: "Bootstrap",
      color: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-800 dark:text-purple-200",
      icon: Layers,
    },
    {
      name: "Next.js",
      color: "bg-gray-100 dark:bg-gray-800/50",
      textColor: "text-gray-800 dark:text-gray-200",
      icon: Globe,
    },
    {
      name: "React.js",
      color: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-800 dark:text-blue-200",
      icon: Code2,
    },
    {
      name: "SASS",
      color: "bg-pink-100 dark:bg-pink-900/30",
      textColor: "text-pink-800 dark:text-pink-200",
      icon: Palette,
    },
    {
      name: "PostgreSQL",
      color: "bg-indigo-100 dark:bg-indigo-900/30",
      textColor: "text-indigo-800 dark:text-indigo-200",
      icon: Database,
    },
    {
      name: "JavaScript",
      color: "bg-yellow-100 dark:bg-yellow-900/30",
      textColor: "text-yellow-800 dark:text-yellow-200",
      icon: FileCode,
    },
    {
      name: "Python",
      color: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-800 dark:text-green-200",
      icon: Terminal,
    },
  ];

  const bottomLaneSkills = [
    {
      name: "PHP",
      color: "bg-violet-100 dark:bg-violet-900/30",
      textColor: "text-violet-800 dark:text-violet-200",
      icon: Code2,
    },
    {
      name: "MySQL",
      color: "bg-orange-100 dark:bg-orange-900/30",
      textColor: "text-orange-800 dark:text-orange-200",
      icon: Database,
    },
    {
      name: "Github/Gitlab",
      color: "bg-slate-100 dark:bg-slate-800/50",
      textColor: "text-slate-800 dark:text-slate-200",
      icon: GitBranch,
    },
    {
      name: "CodeIgniter3",
      color: "bg-red-100 dark:bg-red-900/30",
      textColor: "text-red-800 dark:text-red-200",
      icon: Zap,
    },
    {
      name: "Node.js",
      color: "bg-emerald-100 dark:bg-emerald-900/30",
      textColor: "text-emerald-800 dark:text-emerald-200",
      icon: Server,
    },
    {
      name: "Redux",
      color: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
      textColor: "text-fuchsia-800 dark:text-fuchsia-200",
      icon: Settings,
    },
    {
      name: "Express.js",
      color: "bg-zinc-100 dark:bg-zinc-800/50",
      textColor: "text-zinc-800 dark:text-zinc-200",
      icon: Cpu,
    },
  ];

  const duplicatedTopSkills = [
    ...topLaneSkills,
    ...topLaneSkills,
    ...topLaneSkills,
    ...topLaneSkills,
  ];
  const duplicatedBottomSkills = [
    ...bottomLaneSkills,
    ...bottomLaneSkills,
    ...bottomLaneSkills,
    ...bottomLaneSkills,
  ];

  return (
    <section
      id="skills"
      className="container max-w-6xl px-4 py-20 mx-auto overflow-hidden"
    >
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-500"></div>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Expertise across multiple domains of technology and development
            </p>
          </motion.div>
        </div>

        {/* Skills Lanes */}
        <div className="relative space-y-8">
          {/* Top Lane - Left to Right */}
          <div className="relative">
            <motion.div
              className="flex gap-6 w-max"
              animate={{
                x: [0, `-${100 / 4}%`],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTopSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex-shrink-0"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div
                      className={`flex items-center gap-2 px-6 py-3 rounded-full ${skill.color} ${skill.textColor} font-medium text-sm whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/50`}
                    >
                      <IconComponent size={16} />
                      {skill.name}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom Lane - Right to Left */}
          <div className="relative">
            <motion.div
              className="flex gap-6 w-max"
              animate={{
                x: [`-${100 / 4}%`, 0],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBottomSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex-shrink-0"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div
                      className={`flex items-center gap-2 px-6 py-3 rounded-full ${skill.color} ${skill.textColor} font-medium text-sm whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/50`}
                    >
                      <IconComponent size={16} />
                      {skill.name}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
