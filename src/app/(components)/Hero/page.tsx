"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Full Stack Developer", "UI/UX Designer", "Frontend Specialist", "React Expert"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/50 to-slate-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-gray-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(239,68,68,0.1),transparent_50%)]" />
      </div>

      <div className="container px-4 py-16 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="w-fit bg-white/80 backdrop-blur-sm text-pink-600 border border-pink-200 shadow-lg">
                  <MapPin className="w-3 h-3 mr-1" />
                  Available for work
                </Badge>
              </motion.div>

              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                >
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    Alex Johnson
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-muted-foreground h-8 flex items-center"
                >
                  <span className="mr-2">A passionate</span>
                  <span
                    key={currentRole}
                    className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent font-semibold animate-in slide-in-from-bottom-2 duration-500"
                  >
                    {roles[currentRole]}
                  </span>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                I craft exceptional digital experiences with modern technologies. Specializing in React, Next.js, and
                creating beautiful, functional web applications that solve real-world problems.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-pink-200 text-pink-600 hover:bg-pink-50 dark:border-pink-800 dark:text-pink-400 dark:hover:bg-pink-900/30 backdrop-blur-sm"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-purple-100 dark:hover:bg-purple-900/30 backdrop-blur-sm"
              >
                <Github className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-pink-100 dark:hover:bg-pink-900/30 backdrop-blur-sm"
              >
                <Linkedin className="h-5 w-5 text-pink-600 dark:text-pink-400" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-red-100 dark:hover:bg-red-900/30 backdrop-blur-sm"
              >
                <Mail className="h-5 w-5 text-red-600 dark:text-red-400" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-red-500/20 rounded-2xl transform rotate-6 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-pink-500/10 to-transparent rounded-2xl transform -rotate-3 scale-110"></div>

              {/* Main image container */}
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-2 shadow-2xl">
                <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=480&width=384"
                    alt="Alex Johnson - Portfolio"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-pulse">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs font-medium">Available</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-xs text-muted-foreground">Based in</div>
                    <div className="font-semibold">San Francisco, CA</div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              <motion.div
                className="absolute -top-4 -left-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">React</Badge>
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg">Node.js</Badge>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
              >
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">TypeScript</Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
