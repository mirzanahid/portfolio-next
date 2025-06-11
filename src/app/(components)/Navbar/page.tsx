"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, User, Briefcase, FolderOpen, Mail, Github, Linkedin } from "lucide-react"

export default function AnimatedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll spy functionality
  useEffect(() => {
    const sections = [
      { id: "home", element: document.querySelector("section") }, // First section (hero)
      { id: "about", element: document.querySelector("#about") },
      {
        id: "skills",
        element:
          document.querySelector("section:has([class*='skill'])")?.closest("section") ||
          document.querySelector("[id*='skill']"),
      },
      {
        id: "projects",
        element:
          document.querySelector("section:has([class*='project'])")?.closest("section") ||
          document.querySelector("[id*='project']"),
      },
      { id: "contact", element: document.querySelector("#contact") },
    ].filter((section) => section.element)

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is 20% from top
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find which section this element belongs to
          const sectionElement = entry.target

          // Check if it's the hero section (first section)
          if (sectionElement === document.querySelector("section")) {
            setActiveSection("home")
          }
          // Check for about section
          else if (sectionElement.id === "about" || sectionElement.closest("#about")) {
            setActiveSection("about")
          }
          // Check for skills section
          else if (
            sectionElement.textContent?.toLowerCase().includes("skill") ||
            sectionElement.querySelector("[class*='skill']") ||
            sectionElement.id?.includes("skill")
          ) {
            setActiveSection("skills")
          }
          // Check for projects section
          else if (
            sectionElement.textContent?.toLowerCase().includes("project") ||
            sectionElement.querySelector("[class*='project']") ||
            sectionElement.id?.includes("project")
          ) {
            setActiveSection("projects")
          }
          // Check for contact section
          else if (sectionElement.id === "contact" || sectionElement.closest("#contact")) {
            setActiveSection("contact")
          }
        }
      })
    }, observerOptions)

    // Observe all sections
    sections.forEach((section) => {
      if (section.element) {
        observer.observe(section.element)
      }
    })

    return () => {
      sections.forEach((section) => {
        if (section.element) {
          observer.unobserve(section.element)
        }
      })
    }
  }, [])

  const handleNavClick = (href: string, sectionName: string) => {
    setActiveSection(sectionName)
    setIsMobileMenuOpen(false)

    // Smooth scroll to section
    let targetElement = null

    if (sectionName === "home") {
      // Scroll to the very top for home
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    } else if (sectionName === "about") {
      targetElement = document.querySelector("#about")
    } else if (sectionName === "skills") {
      // Find skills section by looking for skills-related content
      targetElement =
        document.querySelector("section:has([class*='skill'])") ||
        document.querySelector("[id*='skill']") ||
        Array.from(document.querySelectorAll("section")).find(
          (section) =>
            section.textContent?.toLowerCase().includes("technical expertise") ||
            section.textContent?.toLowerCase().includes("skills that"),
        )
    } else if (sectionName === "projects") {
      // Find projects section by looking for projects-related content
      targetElement =
        document.querySelector("section:has([class*='project'])") ||
        document.querySelector("[id*='project']") ||
        Array.from(document.querySelectorAll("section")).find(
          (section) =>
            section.textContent?.toLowerCase().includes("projects that") ||
            section.textContent?.toLowerCase().includes("featured work"),
        )
    } else if (sectionName === "contact") {
      targetElement = document.querySelector("#contact")
    }

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Desktop & Mobile Navbar - Fixed positioning for all devices */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-pink-200/50 dark:border-pink-800/50 py-2 shadow-lg"
            : "bg-transparent py-4"
        }`}
        style={{ position: "fixed" }} // Ensure fixed positioning on all devices
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className={`transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"}`}>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#home", "home")
                }}
                className="flex items-center space-x-2 group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                  <span className="text-white font-bold text-lg">MN</span>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Mirza Nahid
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href, item.name.toLowerCase())
                    }}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                      activeSection === item.name.toLowerCase()
                        ? "text-pink-600 dark:text-pink-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg"
                        : "text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-sm"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                    </div>

                    {/* Active indicator */}
                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 ${
                        activeSection === item.name.toLowerCase() ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                )
              })}
            </div>

            {/* Desktop CTA & Social */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-purple-100 dark:hover:bg-purple-900/30 backdrop-blur-sm"
                >
                  <Github className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-pink-100 dark:hover:bg-pink-900/30 backdrop-blur-sm"
                >
                  <Linkedin className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                </Button>
              </div>

              <Button
                onClick={() => handleNavClick("#contact", "contact")}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-pink-100 dark:hover:bg-pink-900/30 backdrop-blur-sm"
                >
                  <Menu className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-pink-200 dark:border-pink-800"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-pink-200 dark:border-pink-800">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">AJ</span>
                      </div>
                      <span className="font-bold text-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                        Alex Johnson
                      </span>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 py-6">
                    <div className="space-y-2">
                      {navItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault()
                              handleNavClick(item.href, item.name.toLowerCase())
                            }}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                              activeSection === item.name.toLowerCase()
                                ? "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-pink-600 dark:text-pink-400 border-l-4 border-pink-500 shadow-lg"
                                : "text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.name}</span>
                          </a>
                        )
                      })}
                    </div>
                  </div>

                  {/* Mobile Footer */}
                  <div className="border-t border-pink-200 dark:border-pink-800 pt-6 space-y-4">
                    <div className="flex justify-center space-x-4">
                      <Button variant="ghost" size="icon" className="hover:bg-purple-100 dark:hover:bg-purple-900/30">
                        <Github className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-pink-100 dark:hover:bg-pink-900/30">
                        <Linkedin className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                      </Button>
                    </div>

                    <Button
                      onClick={() => handleNavClick("#contact", "contact")}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg"
                    >
                      Let's Talk
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Progress Bar */}
        <div
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 transition-all duration-300 ${
            isScrolled ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        />
      </nav>

      {/* Spacer to prevent content from hiding behind navbar */}
      <div className="h-20" />
    </>
  )
}
