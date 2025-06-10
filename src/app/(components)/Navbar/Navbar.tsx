"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, User, Briefcase, Mail, FileText, Github, Linkedin } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Resume", href: "#resume", icon: FileText },
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
    const sections = navItems
      .map((item) => ({
        id: item.href.substring(1), // Remove # from href
        name: item.name.toLowerCase(),
        element: document.querySelector(item.href),
      }))
      .filter((section) => section.element)

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is 20% from top
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.id
          setActiveSection(sectionName)
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
  }, []) // Removed navItems from dependency array

  const handleNavClick = (href: string, sectionName: string) => {
    const sectionId = href.substring(1) // Remove # to get the ID
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)

    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-2" : "bg-transparent py-4"
        }`}
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
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/60 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <span className="text-primary-foreground font-bold text-lg">AJ</span>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Alex Johnson
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
                      handleNavClick(item.href, item.name)
                    }}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                      activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                    </div>

                    {/* Active indicator */}
                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                        activeSection === item.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                )
              })}
            </div>

            {/* Desktop CTA & Social */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>

              <Button
                onClick={() => handleNavClick("#contact", "contact")}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105"
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/60 rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">AJ</span>
                      </div>
                      <span className="font-bold text-lg">Alex Johnson</span>
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
                              handleNavClick(item.href, item.name)
                            }}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                              activeSection === item.href.substring(1)
                                ? "bg-primary/10 text-primary border-l-4 border-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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
                  <div className="border-t pt-6 space-y-4">
                    <div className="flex justify-center space-x-4">
                      <Button variant="ghost" size="icon">
                        <Github className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Linkedin className="w-5 h-5" />
                      </Button>
                    </div>

                    <Button
                      onClick={() => handleNavClick("#contact", "contact")}
                      className="w-full bg-gradient-to-r from-primary to-primary/80"
                    >
                      Let&apos;s Talk
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Progress Bar */}
        <div
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 ${
            isScrolled ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        />
      </nav>

      {/* Spacer to prevent content from hiding behind navbar */}
      <div className="h-20" />

      {/* Demo Sections for Testing */}
      <div className="space-y-0">
        <section
          id="home"
          className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Home Section</h1>
            <p className="text-muted-foreground">This is the home section content</p>
          </div>
        </section>

        <section id="about" className="min-h-screen bg-muted/10 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Section</h1>
            <p className="text-muted-foreground">This is the about section content</p>
          </div>
        </section>

        <section id="projects" className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Projects Section</h1>
            <p className="text-muted-foreground">This is the projects section content</p>
          </div>
        </section>

        <section id="resume" className="min-h-screen bg-muted/10 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Resume Section</h1>
            <p className="text-muted-foreground">This is the resume section content</p>
          </div>
        </section>

        <section id="contact" className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Section</h1>
            <p className="text-muted-foreground">This is the contact section content</p>
          </div>
        </section>
      </div>
    </>
  )
}
