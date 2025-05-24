"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Landing Page abdo.shop",
    description: "Abdo.shop vous accompagne dans vos projets immobiliers avec une sélection exclusive d’immeubles de qualité, adaptés à tous vos besoins d’investissement ou d’habitation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTSLozZ65FuwQiXlILq_TnxlzE4_O1iBH1w&s",
    github: "https://github.com/azeabd01/Checkpoint-Responsive-Store-Landing-Page-Design.git",
  },
  {
    title: "Portfolio test",
    description: "about Nour Un portfolio (ou « portfolio professionnel ») est un dossier personnel qui présente tes réalisations, compétences et expériences dans un domaine précis.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnl5ODAVQ1gN4soL7fwYNah5U8M9lJVXZ-SA&s",
    github: "https://github.com/azeabd01/projet-HTML-1.git"
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        // href={project.demo}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}