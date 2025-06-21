"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Code2,
  Sparkles,
  Eye,
  Star,
  Users,
  LayoutGrid,
  User,
  Briefcase,
} from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Projects", icon: LayoutGrid, count: 12 },
    { id: "personal", name: "Personal", icon: User, count: 3 },
    { id: "team", name: "Team", icon: Users, count: 2 },
    { id: "client", name: "Client", icon: Briefcase, count: 7 },
  ];

  const projects = [
    {
      id: "1",
      title: "Furniture Mart",
      description:
        "FurnitureMart is a ecommerce website where you will find mordern and stylish furnitures",
      category: "personal",
      technologies: [
        "React",
        "express.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "JWT",
      ],
      image: "/projects/furnituremart.png",
      liveUrl: "https://furnituremart-58a65.web.app/",
      githubUrl: "https://github.com/mirzanahid/furniture-mart-client",
      featured: false,
      stats: { views: "2.5K", stars: 45, users: "500+" },
      year: "2024",
      status: "Live",
    },
    {
      id: "2",
      title: "Pixel Photography",
      description:
        "PixelPhotography is a wedding photography website where you can get so many services and read free blogs about photography.",
      category: "personal",
      technologies: [
        "React",
        "Node.js",
        "express.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "JWT",
      ],
      image: "/projects/photography.png",
      liveUrl: "https://pixels-photography.web.app/",
      githubUrl: "https://github.com/mirzanahid/pixel-photgraphy-client",
      featured: false,
      stats: { views: "1.8K", stars: 32, users: "200+" },
      year: "2024",
      status: "Live",
    },
    {
      id: "3",
      title: "Tech Tutor",
      description:
        "TechTutor is online learning single web application. Where student can purchase premium courses and read free blogs.",
      category: "personal",
      technologies: [
        "React",
        "Node.js",
        "express.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "JWT",
      ],
      image: "/projects/techtutore.png",
      liveUrl: "https://tech-tutor-d3a50.web.app/",
      githubUrl: "https://github.com/mirzanahid/tech-tutor-client",
      featured: false,
      stats: { views: "1.2K", stars: 28, users: "100+" },
      year: "2023",
      status: "Live",
    },
    {
      id: "4",
      title: "Swap Nest",
      description:
        "Swap Nest is a modern web platform designed to simplify the exchange of second-hand goods. User can exchange their second-hand goods with each other",
      category: "team",
      technologies: [
        "Next.js",
        "Mongodb",
        "Node.js",
        "ShadCN UI",
        "Tailwind CSS",
        "Mongoose",
      ],
      image: "/projects/swapnest.png",
      liveUrl: "https://swap-nest-client.vercel.app/",
      githubUrl: "#",
      featured: true,
      stats: { views: "3.1K", stars: 67, users: "800+" },
      year: "2024",
      status: "Live",
    },
    {
      id: "5",
      title: "Papyrus",
      description:
        "Papyrus is an e-commerce platform for stationery products. It allows users to browse a wide range of stationery items, add them to cart, and make secure payments.",
      category: "team",
      technologies: [
        "Next.js",
        "Shurjopay",
        "Framer Motion",
        "Vite",
        "ShadCN UI",
        "Tailwind CSS",
        "Mongoose",
      ],
      image: "/projects/papyrus.png",
      liveUrl: "https://papyrus-client.vercel.app/",
      githubUrl: "#",
      featured: true,
      stats: { views: "900", stars: 15, users: "50+" },
      year: "2023",
      status: "Live",
    },
    {
      id: "6",
      title: "Get a Quote",
      description:
        "Cheapest Home and Car Insurance Companies in Florida & California",
      category: "client",
      technologies: ["Html", "Bootstrap", "Jquery"],
      image: "/projects/getaqoute.png",
      liveUrl: "https://www.getaquote.com/",
      githubUrl: "#",
      featured: false,
      stats: { views: "1.5K", stars: 38, users: "300+" },
      year: "2024",
      status: "Live",
    },
    {
      id: "7",
      title: "HST, A MultiPlan Company",
      description:
        "HST's Value-Driven Health Plan services (VDHPs) are reference-based pricing services for employers that help to control the cost of care.",
      category: "client",
      technologies: ["Html", "Bootstrap", "Jquery"],
      image: "/projects/hsthealthcare.png",
      liveUrl: "https://www.hstechnology.com/",
      githubUrl: "#",
      featured: false,
      stats: { views: "1.5K", stars: 38, users: "300+" },
      year: "2024",
      status: "Live",
    },
    {
      id: "8",
      title: "Taste Nomada",
      description:
        "NOMADA is the latest, most mobile expression of that unerring pursuit of culinary excellence—it’s world-class flavor filled with the roaming soul of California",
      category: "client",
      technologies: ["Html", "Bootstrap", "Jquery"],
      image: "/projects/nomada.png",
      liveUrl: "https://www.tastenomada.com/",
      githubUrl: "#",
      featured: false,
      stats: { views: "1.5K", stars: 38, users: "300+" },
      year: "2024",
      status: "Live",
    },
    {
      id: "9",
      title: "AYSO Irvine 213",
      description:
        "AYSO Irvine Region 213 - Serving Irvine for 40 years · Fall Soccer. Register for Fall Soccer today! · Become A Coach. Learn how to become a soccer coach",
      category: "client",
      technologies: ["Html", "Bootstrap", "Jquery"],
      image: "/projects/aysoirvine.png",
      liveUrl: "https://www.ayso213.org/",
      githubUrl: "#",
      featured: false,
      stats: { views: "1.5K", stars: 38, users: "300+" },
      year: "2024",
      status: "Live",
    },
    {
      id: "10",
      title: "Enviro Check",
      description:
        "For environmental testing, you need someone who is dependable, reliable, and who you know will get the job done right.",
      category: "client",
      technologies: ["Html", "Bootstrap", "Jquery"],
      image: "/projects/envirocheck.png",
      liveUrl: "https://www.envirocheck.com/",
      githubUrl: "#",
      featured: false,
      stats: { views: "1.5K", stars: 38, users: "300+" },
      year: "2024",
      status: "Live",
    },
    {
      id: "11",
      title: "Saunatica",
      description:
        "Offering infrared sauna, red-light, salt and HALO therapy, Saunatica has the right solution for everyone",
      category: "client",
      technologies: ["Html", "Bootstrap", "Jquery"],
      image: "/projects/saunatica.png",
      liveUrl: "https://www.saunatica.com/",
      githubUrl: "#",
      featured: false,
      stats: { views: "1.5K", stars: 38, users: "300+" },
      year: "2024",
      status: "Live",
    },
    {
      id: "12",
      title: "Ihya Vakfi",
      description:
        "Emergency relief for the families affected by the demolition and displacement.",
      category: "client",
      technologies: ["React.js", "Material", "Vite"],
      image: "/projects/ihayabagis.png",
      liveUrl: "https://bagis.ihyavakfi.org.tr/",
      githubUrl: "#",
      featured: false,
      stats: { views: "1.5K", stars: 38, users: "300+" },
      year: "2024",
      status: "Live",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="py-10 md:py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/50 to-slate-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-gray-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(239,68,68,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4  relative z-10">
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
            Explore my portfolio of web applications, from interactive frontends
            to robust full-stack solutions
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

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isActive = activeFilter === category.id;

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
                className={`group px-6 py-3 rounded-2xl transition-all duration-300 flex items-center space-x-3  cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-purple-200 dark:border-purple-800"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
                <Badge
                  className={`text-xs ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                  }`}
                >
                  {category.count}
                </Badge>
              </motion.button>
            );
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
                  {/* <Card className="border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl overflow-hidden group">
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
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                            {project.status}
                          </Badge>
                          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                            {project.year}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
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
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card> */}

                  <Card className="border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-80 h-48" // smaller height on mobile
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs sm:text-sm">
                          {" "}
                          {/* text smaller on mobile */}
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap items-center justify-between text-white text-xs sm:text-sm">
                          {" "}
                          {/* flex-wrap for mobile */}
                          <div className=" items-center space-x-2 sm:space-x-4 text-xs sm:text-sm hidden">
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
                    <CardContent className="p-4 sm:p-6">
                      {" "}
                      {/* padding reduced on mobile */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
                        {" "}
                        {/* stack on mobile */}
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                          {" "}
                          {/* slightly smaller heading */}
                          {project.title}
                        </h4>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs sm:text-sm">
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                        {" "}
                        {/* description smaller */}
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300 text-xs sm:text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                        <Button
                          className="cursor-pointer flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-sm sm:text-base"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          className="cursor-pointer border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900/30 text-sm sm:text-base"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
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
                  <Card className=" border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl overflow-hidden group h-full">
                    <div className="relative overflow-hidden ">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
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
                            <Star className="w-3 h-3 mr-1" />
                            {project.stats.stars}
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h4>
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
                          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-xs cursor-pointer"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </Button>
                        {project.githubUrl == "#" ? (
                          ""
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900/30 cursor-pointer"
                            onClick={() =>
                              window.open(project.githubUrl, "_blank")
                            }
                          >
                            <Github className="w-3 h-3" />
                          </Button>
                        )}
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
              <h3 className="text-4xl font-bold mb-6">
                Have a Project in Mind?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let&apos;s collaborate and bring your ideas to life with
                cutting-edge technologies and modern design principles.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-purple-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300"
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
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
  );
}
