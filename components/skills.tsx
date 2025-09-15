"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const topLaneSkills = [
    { name: "TailwindCSS", color: "bg-cyan-500", textColor: "text-white" },
    { name: "Bootstrap", color: "bg-purple-600", textColor: "text-white" },
    { name: "React Query", color: "bg-red-500", textColor: "text-white" },
    { name: "React.js", color: "bg-blue-400", textColor: "text-white" },
    { name: "SASS", color: "bg-pink-500", textColor: "text-white" },
    { name: "PostgreSQL", color: "bg-blue-600", textColor: "text-white" },
    { name: "JavaScript", color: "bg-yellow-400", textColor: "text-black" },
  ];

  const bottomLaneSkills = [
    { name: "PHP", color: "bg-indigo-600", textColor: "text-white" },
    { name: "Material UI", color: "bg-blue-500", textColor: "text-white" },
    { name: "JavaScript", color: "bg-yellow-400", textColor: "text-black" },
    { name: "React.js", color: "bg-blue-400", textColor: "text-white" },
    { name: "Firebase", color: "bg-orange-500", textColor: "text-white" },
    { name: "Gulp", color: "bg-red-600", textColor: "text-white" },
    { name: "Express.js", color: "bg-gray-700", textColor: "text-white" },
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
    <section className="container max-w-6xl px-4 py-20 mx-auto overflow-hidden">
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
              {duplicatedTopSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div
                    className={`px-6 py-3 rounded-full ${skill.color} ${skill.textColor} font-medium text-sm whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {skill.name}
                  </div>
                </motion.div>
              ))}
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
              {duplicatedBottomSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div
                    className={`px-6 py-3 rounded-full ${skill.color} ${skill.textColor} font-medium text-sm whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
