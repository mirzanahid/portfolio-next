"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  ExternalLink,
  MapPin,
  Sparkles,
  ArrowRight,
  Phone,
  Copy,
  Check,
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

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "from-purple-600 to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      color: "from-blue-600 to-purple-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/yourusername",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/yourusername",
      color: "from-blue-500 to-blue-700",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/50 to-slate-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-gray-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.05),transparent_50%)]" />
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
              Get In Touch
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's Connect
            <motion.span
              className="block bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              & Collaborate
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and ideas.
          </motion.p>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full mx-auto mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        {/* Unified Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {/* Get In Touch Section */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center shadow-lg mr-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Get In Touch</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ready to start a project or just want to chat? I'd love to hear from you.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email Section */}
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 relative group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3" />
                        <span className="text-gray-800 dark:text-gray-200 font-medium">hello@yourname.com</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                        onClick={() => copyToClipboard("hello@yourname.com", "email")}
                      >
                        {copied === "email" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                    <motion.a
                      href="mailto:hello@yourname.com"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-3 px-4 rounded-lg flex items-center justify-center font-medium shadow-lg transition-all duration-300 text-sm w-full"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <div className="absolute -inset-px bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>

                  {/* Phone Section */}
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 relative group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-pink-500 dark:text-pink-400 mr-3" />
                        <span className="text-gray-800 dark:text-gray-200 font-medium">+1 (555) 123-4567</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-500 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
                        onClick={() => copyToClipboard("+1 (555) 123-4567", "phone")}
                      >
                        {copied === "phone" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                    <motion.a
                      href="tel:+15551234567"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 px-4 rounded-lg flex items-center justify-center font-medium shadow-lg transition-all duration-300 text-sm w-full"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Me
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <div className="absolute -inset-px bg-gradient-to-r from-pink-500 to-red-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>

                  {/* Location - Full Width */}
                  <div className="md:col-span-2 bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 relative group">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-500 dark:text-red-400 mr-3" />
                      <span className="text-gray-800 dark:text-gray-200 font-medium">San Francisco, CA</span>
                    </div>
                    <div className="absolute -inset-px bg-gradient-to-r from-red-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <div className="flex items-center justify-center mb-8">
                  <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1" />
                  <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 px-4">Connect With Me</h3>
                  <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1" />
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group"
                    >
                      <motion.div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <social.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="mt-2 text-xs font-medium text-center text-gray-600 dark:text-gray-400">
                        {social.label}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
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
                <Sparkles className="w-12 h-12 mx-auto mb-6 text-white/80" />
              </motion.div>
              <h3 className="text-4xl font-bold mb-6">Ready to Start Your Next Project?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                I'm currently available for freelance work and exciting opportunities. Let's create something amazing
                together!
              </p>
              <motion.a
                href="mailto:hello@yourname.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-4 bg-white text-purple-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-3" />
                Email Me Now
                <ExternalLink className="w-5 h-5 ml-3" />
              </motion.a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
