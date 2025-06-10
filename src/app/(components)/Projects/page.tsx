"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  Code2,
  Globe,
  Server,
  Database,
  Sparkles,
  Eye,
  Star,
  Calendar,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react"

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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const categories = [
    { id: "all", name: "All Projects", icon: Globe, count: 12 },
    { id: "frontend", name: "Frontend", icon: Code2, count: 5 },
    { id: "fullstack", name: "Full Stack", icon: Server, count: 4 },
    { id: "backend", name: "Backend", icon: Database, count: 3 },
  ]

  const projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
      category: "fullstack",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS"],
      image: "/placeholder.svg?height=400&width=600",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      stats: { views: "2.5K", stars: 45, users: "500+" },
      year: "2024",
      status: "Live",
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "Collaborative task management with real-time updates, drag-and-drop functionality, and team collaboration.",
      category: "frontend",
      technologies: ["React", "Redux Toolkit", "Framer Motion", "Socket.io"],
      image: "/placeholder.svg?height=400&width=600",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      stats: { views: "1.8K", stars: 32, users: "200+" },
      year: "2024",
      status: "Live",
    },
    {
      id: "3",
      title: "REST API Gateway",
      description: "Scalable API gateway with authentication, rate limiting, and microservices integration.",
      category: "backend",
      technologies: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker"],
      image: "/placeholder.svg?height=400&width=600",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      stats: { views: "1.2K", stars: 28, users: "100+" },
      year: "2023",
      status: "Live",
    },
    {
      id: "4",
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization and reporting.",
      category: "fullstack",
      technologies: ["Next.js", "Chart.js", "Prisma", "Supabase"],
      image: "/placeholder.svg?height=400&width=600",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      stats: { views: "3.1K", stars: 67, users: "800+" },
      year: "2024",
      status: "Live",
    },
    {
      id: "5",
      title: "Portfolio Website",
      description: "Modern portfolio website with animations, dark mode, and responsive design.",
      category: "frontend",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "/placeholder.svg?height=400&width=600",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      stats: { views: "900", stars: 15, users: "50+" },
      year: "2023",
      status: "Live",
    },
    {
      id: "6",
      title: "Real-time Chat App",
      description: "Real-time messaging application with file sharing, emoji reactions, and group chats.",
      category: "fullstack",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Cloudinary"],
      image: "/placeholder.svg?height=400&width=600",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      stats: { views: "1.5K", stars: 38, users: "300+" },
      year: "2024",
      status: "Live",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/50 to-slate-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-gray-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(239,68,68,0.1),transparent_50%)]" />
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
              Featured Work
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Projects That
            <motion.span
              className="block bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              Make Impact
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore my portfolio of web applications, from interactive frontends to robust full-stack solutions
          </motion.p>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full mx-auto mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: TrendingUp, value: "50+", label: "Projects Completed", color: "from-purple-600 to-pink-500" },
            { icon: Users, value: "2K+", label: "Active Users", color: "from-pink-500 to-red-500" },
            { icon: Star, value: "200+", label: "GitHub Stars", color: "from-red-500 to-purple-600" },
            { icon: Zap, value: "99%", label: "Client Satisfaction", color: "from-purple-600 to-blue-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl overflow-hidden group">
                <CardContent className="p-6 text-center relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon
            const isActive = activeFilter === category.id

            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`group px-6 py-3 rounded-2xl transition-all duration-300 flex items-center space-x-3 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-purple-200 dark:border-purple-800"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
                <Badge
                  className={`text-xs ${isActive ? "bg-white/20 text-white" : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"}`}
                >
                  {category.count}
                </Badge>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Featured Projects Showcase */}
        {activeFilter === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Card className="border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {project.stats.views}
                            </span>
                            <span className="flex items-center">
                              <Star className="w-4 h-4 mr-1" />
                              {project.stats.stars}
                            </span>
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {project.stats.users}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                            {project.status}
                          </Badge>
                          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                            {project.year}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <Button
                          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900/30"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl overflow-hidden group h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      {project.featured && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs">
                            Featured
                          </Badge>
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center justify-between text-white text-sm">
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {project.year}
                          </span>
                          <span className="flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            {project.stats.stars}
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h4>
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs">
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-xs"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900/30"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="border-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-20">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "40px 40px",
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
                <Code2 className="w-12 h-12 mx-auto mb-6 text-white/80" />
              </motion.div>
              <h3 className="text-4xl font-bold mb-6">Have a Project in Mind?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let&apos;s collaborate and bring your ideas to life with cutting-edge technologies and modern design
                principles.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-purple-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300"
                onClick={() => {
                  const contactSection = document.querySelector("#contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Start a Project
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
