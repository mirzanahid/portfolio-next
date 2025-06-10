"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Briefcase, GraduationCap, Heart, Coffee, Sparkles, CheckCircle2 } from "lucide-react"

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
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
            y: [0, -80, 0],
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

// Custom hook for counting animation
function useCountUp(end: number, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (nodeRef.current) {
      observer.observe(nodeRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(startAnimation)
      }
    }

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(startAnimation)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, delay, isInView])

  return { count, ref: nodeRef }
}

export default function About() {
  const { count: yearsCount, ref: yearsRef } = useCountUp(5, 2000, 300)
  const { count: projectsCount, ref: projectsRef } = useCountUp(50, 2000, 600)
  const { count: clientsCount, ref: clientsRef } = useCountUp(25, 2000, 900)

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description:
        "Led the development of multiple web applications using React and Next.js, improving performance by 40%.",
    },
    {
      title: "UI/UX Designer & Developer",
      company: "DesignHub",
      period: "2019 - 2021",
      description: "Created user-centered designs and implemented them using modern frontend technologies.",
    },
    {
      title: "Junior Web Developer",
      company: "WebSolutions",
      period: "2018 - 2019",
      description: "Developed responsive websites and maintained existing web applications.",
    },
  ]

  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Tech University",
      year: "2018",
      description: "Specialized in Human-Computer Interaction and Web Technologies.",
    },
    {
      degree: "Bachelor's in Software Engineering",
      institution: "State University",
      year: "2016",
      description: "Graduated with honors, focused on web development and design.",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/50 to-slate-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-gray-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(239,68,68,0.1),transparent_50%)]" />
      </div>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm text-pink-600 border border-pink-200 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            About Me
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 bg-clip-text text-transparent">
            Know Me
            <motion.span
              className="block bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              Better
            </motion.span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full mx-auto mt-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column - Bio and Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Profile Image with Animation */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-xl opacity-30 blur-lg animate-pulse"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-pink-200 dark:border-pink-900/50">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Alex Johnson"
                  width={600}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium text-pink-200">Full Stack Developer</p>
                  <h3 className="text-2xl font-bold">Alex Johnson</h3>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl overflow-hidden group">
                <CardContent className="p-6 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></div>
                  <div className="relative">
                    <div
                      ref={yearsRef}
                      className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-1"
                    >
                      {yearsCount}+
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl overflow-hidden group">
                <CardContent className="p-6 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></div>
                  <div className="relative">
                    <div
                      ref={projectsRef}
                      className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-1"
                    >
                      {projectsCount}+
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl overflow-hidden group">
                <CardContent className="p-6 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></div>
                  <div className="relative">
                    <div
                      ref={clientsRef}
                      className="text-3xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent mb-1"
                    >
                      {clientsCount}+
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Bio */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-pink-500" />
                Who am I?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate{" "}
                <span className="font-semibold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>{" "}
                with 5+ years of experience creating beautiful, functional, and user-centered digital experiences. Based
                in San Francisco, I am a creative problem solver who loves to explore new technologies and approaches.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in web development started when I built my first website at 15. Since then, I've worked with
                agencies, startups, and established companies to help build and scale their products. I specialize in
                JavaScript frameworks like React and Next.js, with a strong focus on creating accessible and performant
                web applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me hiking in the mountains, experimenting with photography, or
                exploring local coffee shops. I believe in continuous learning and giving back to the community through
                open-source contributions and mentoring.
              </p>
            </div>

            {/* Tabs for Experience and Education */}
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-900/30 dark:to-pink-900/30">
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800"
                >
                  <Briefcase className="w-4 h-4 mr-2" /> Experience
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800"
                >
                  <GraduationCap className="w-4 h-4 mr-2" /> Education
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="mt-6 space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="relative pl-6 border-l-2 border-pink-200 dark:border-pink-800"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
                    <div className="mb-1 flex items-center">
                      <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-pink-800 hover:bg-pink-200 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-pink-300 dark:hover:bg-pink-900/50">
                        {exp.period}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="education" className="mt-6 space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="relative pl-6 border-l-2 border-pink-200 dark:border-pink-800"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500"></div>
                    <div className="mb-1 flex items-center">
                      <Badge className="bg-gradient-to-r from-pink-100 to-red-100 text-pink-800 hover:bg-pink-200 dark:from-pink-900/30 dark:to-red-900/30 dark:text-pink-300 dark:hover:bg-pink-900/50">
                        {edu.year}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>

            {/* Interests */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent flex items-center">
                <Heart className="w-5 h-5 mr-2 text-pink-500" />
                Personal Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Photography", "Hiking", "Coffee", "Reading", "Travel", "Music", "Cooking", "Open Source"].map(
                  (interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.05 * index }}
                    >
                      <Badge className="px-3 py-1.5 bg-white dark:bg-gray-800 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-900/30">
                        {interest === "Coffee" && <Coffee className="w-3.5 h-3.5 mr-1.5" />}
                        {interest === "Open Source" && <Code className="w-3.5 h-3.5 mr-1.5" />}
                        {interest}
                      </Badge>
                    </motion.div>
                  ),
                )}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl overflow-hidden group bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        Interested in working together?
                      </h4>
                      <p className="text-pink-100">Let's create something amazing together!</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white text-pink-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => {
                        const contactSection = document.querySelector("#contact")
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      Contact Me
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
