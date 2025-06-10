"use client"

import React from "react"
import { useState, useEffect } from "react"
import { motion, useSpring } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code2,
  Server,
  Database,
  Wrench,
  Globe,
  Star,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Play,
} from "lucide-react"

// Custom hook for animated progress with spring physics
function useAnimatedProgress(targetValue: number, delay = 0) {
  const [progress, setProgress] = useState(0)
  const springProgress = useSpring(progress, { stiffness: 100, damping: 30 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(targetValue)
    }, delay)
    return () => clearTimeout(timer)
  }, [targetValue, delay])

  useEffect(() => {
    const unsubscribe = springProgress.on("change", (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [springProgress])

  return { progress: displayValue, springProgress }
}

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
          className="absolute rounded-full bg-purple-400/20"
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

export default function Skill() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = {
    frontend: {
      title: "Frontend Magic",
      subtitle: "Crafting Beautiful Interfaces",
      icon: Code2,
      gradient: "from-purple-600 via-pink-500 to-red-500",
      bgGradient: "from-purple-500/10 via-pink-500/10 to-red-500/10",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️", description: "Component-based UI library" },
        { name: "Next.js", level: 92, icon: "▲", description: "Full-stack React framework" },
        { name: "TypeScript", level: 88, icon: "📘", description: "Type-safe JavaScript" },
        { name: "JavaScript", level: 95, icon: "🟨", description: "Modern ES6+ features" },
        { name: "Tailwind CSS", level: 90, icon: "🎨", description: "Utility-first CSS framework" },
        { name: "Framer Motion", level: 85, icon: "🎭", description: "Production-ready animations" },
        { name: "Redux Toolkit", level: 82, icon: "🔄", description: "Predictable state container" },
        { name: "Vite", level: 80, icon: "⚡", description: "Lightning fast build tool" },
      ],
    },
    backend: {
      title: "Backend Power",
      subtitle: "Building Robust Systems",
      icon: Server,
      gradient: "from-purple-600 via-blue-500 to-cyan-500",
      bgGradient: "from-purple-500/10 via-blue-500/10 to-cyan-500/10",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢", description: "JavaScript runtime environment" },
        { name: "Express.js", level: 88, icon: "🚀", description: "Fast web framework" },
        { name: "Next.js API", level: 85, icon: "🔗", description: "Serverless API routes" },
        { name: "GraphQL", level: 75, icon: "🔺", description: "Query language for APIs" },
        { name: "REST APIs", level: 92, icon: "🌐", description: "RESTful web services" },
        { name: "Socket.io", level: 70, icon: "⚡", description: "Real-time communication" },
        { name: "Serverless", level: 78, icon: "☁️", description: "Cloud functions" },
        { name: "Microservices", level: 72, icon: "🧩", description: "Distributed architecture" },
      ],
    },
    database: {
      title: "Data Mastery",
      subtitle: "Managing Information Flow",
      icon: Database,
      gradient: "from-purple-600 via-green-500 to-emerald-500",
      bgGradient: "from-purple-500/10 via-green-500/10 to-emerald-500/10",
      skills: [
        { name: "MongoDB", level: 85, icon: "🍃", description: "NoSQL document database" },
        { name: "PostgreSQL", level: 80, icon: "🐘", description: "Advanced relational database" },
        { name: "Prisma ORM", level: 82, icon: "💎", description: "Next-generation ORM" },
        { name: "Redis", level: 70, icon: "🔴", description: "In-memory data store" },
        { name: "Supabase", level: 80, icon: "⚡", description: "Open source Firebase alternative" },
        { name: "Firebase", level: 78, icon: "🔥", description: "Google's app platform" },
        { name: "MySQL", level: 75, icon: "🐬", description: "Popular relational database" },
        { name: "Mongoose", level: 85, icon: "🦫", description: "MongoDB object modeling" },
      ],
    },
    tools: {
      title: "DevOps Arsenal",
      subtitle: "Streamlining Development",
      icon: Wrench,
      gradient: "from-purple-600 via-orange-500 to-yellow-500",
      bgGradient: "from-purple-500/10 via-orange-500/10 to-yellow-500/10",
      skills: [
        { name: "Git & GitHub", level: 90, icon: "🐙", description: "Version control system" },
        { name: "Docker", level: 75, icon: "🐳", description: "Containerization platform" },
        { name: "AWS", level: 70, icon: "☁️", description: "Cloud computing services" },
        { name: "Vercel", level: 88, icon: "▲", description: "Frontend deployment platform" },
        { name: "Webpack", level: 80, icon: "📦", description: "Module bundler" },
        { name: "Jest", level: 78, icon: "🧪", description: "JavaScript testing framework" },
        { name: "CI/CD", level: 72, icon: "🔄", description: "Continuous integration" },
        { name: "Linux", level: 85, icon: "💻", description: "Unix-like operating system" },
      ],
    },
  }

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/50 to-slate-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-gray-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm text-purple-700 border border-purple-200 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Technical Expertise
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Skills That
            <motion.span
              className="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Drive Innovation
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Mastering the full spectrum of modern web development technologies to create exceptional digital experiences
          </motion.p>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        {/* Modern Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {Object.entries(skillCategories).map(([key, category], index) => {
            const IconComponent = category.icon
            const isActive = activeCategory === key

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`cursor-pointer transition-all duration-500 border-0 backdrop-blur-sm relative overflow-hidden group ${
                    isActive
                      ? "bg-white/90 dark:bg-gray-800/90 shadow-2xl shadow-purple-500/25"
                      : "bg-white/60 dark:bg-gray-800/60 hover:bg-white/80 dark:hover:bg-gray-800/80"
                  }`}
                  onClick={() => setActiveCategory(key)}
                >
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{category.subtitle}</p>
                    <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                      {category.skills.length} Skills
                    </Badge>
                  </CardContent>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-500"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Enhanced Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Header with gradient */}
            <div
              className={`bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].gradient} p-8 text-white relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      {skillCategories[activeCategory as keyof typeof skillCategories].title}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {skillCategories[activeCategory as keyof typeof skillCategories].subtitle}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    {React.createElement(skillCategories[activeCategory as keyof typeof skillCategories].icon, {
                      className: "w-16 h-16 text-white/30",
                    })}
                  </motion.div>
                </div>
              </div>
            </div>

            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => {
                  const { progress } = useAnimatedProgress(skill.level, index * 150)
                  const isHovered = hoveredSkill === skill.name

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <Card
                        className={`p-6 transition-all duration-300 border-0 ${
                          isHovered
                            ? "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 shadow-lg scale-105"
                            : "bg-gray-50/50 dark:bg-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-gray-700/70"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <motion.div
                              className="text-3xl"
                              animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {skill.icon}
                            </motion.div>
                            <div>
                              <h4 className="font-bold text-lg text-gray-900 dark:text-white">{skill.name}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <motion.span
                              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
                              animate={{ scale: isHovered ? 1.1 : 1 }}
                            >
                              {progress}%
                            </motion.span>
                            {progress >= 85 && (
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                              </motion.div>
                            )}
                          </div>
                        </div>

                        {/* Enhanced Progress Bar */}
                        <div className="relative h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <motion.div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].gradient} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          />
                          <motion.div
                            className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                          />
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: TrendingUp,
              title: "5+ Years",
              subtitle: "Full Stack Experience",
              color: "from-purple-600 to-pink-500",
            },
            {
              icon: CheckCircle2,
              title: "32 Technologies",
              subtitle: "Mastered & Applied",
              color: "from-pink-500 to-red-500",
            },
            {
              icon: Globe,
              title: "50+ Projects",
              subtitle: "Successfully Delivered",
              color: "from-purple-600 to-blue-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl overflow-hidden group">
                <CardContent className="p-8 text-center relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-1 transition-opacity duration-500`}
                  />
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{stat.subtitle}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="border-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-30">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              />
            </div>
            <CardContent className="p-12 relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="w-12 h-12 mx-auto mb-6 text-white/80" />
              </motion.div>
              <h3 className="text-4xl font-bold mb-6">Ready to Build Something Extraordinary?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let&apos;s combine these cutting-edge technologies to create innovative solutions that push boundaries and
                deliver exceptional results.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 bg-white text-purple-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center mx-auto"
                onClick={() => {
                  const contactSection = document.querySelector("#contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <Play className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                Let&apos;s Create Together
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
