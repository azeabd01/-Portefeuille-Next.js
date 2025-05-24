"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Mail, User } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="max-w-5xl mx-auto px-6 py-16 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I&#39;m <span className="text-primary">Abdelaali AZERGUI</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            MERN Stack Developer specializing in modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button size="lg">
                <Code2 className="mr-2 h-5 w-5" />
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}