"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const skills = [
  { name: "Javascript", level: "Advanced" },
  { name: "Tailwind", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Express.js", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "Git / Github", level: "Advanced" },
  { name: "SQL", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose prose-lg dark:prose-invert mb-12">
            <p className="mb-3">
              👋 Hi,
              I&apos;m a student passionate about digital technologies and data science. I&apos;m a full-stack developer with a solid education and a constantly renewed curiosity. Rigorous and fully committed, I use my technical expertise and analytical mind to design innovative and high-performance solutions. Always eager to learn, I&apos;m ready to take on new challenges and fully invest myself in ambitious projects.

            </p>

          </div>

          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.level}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}