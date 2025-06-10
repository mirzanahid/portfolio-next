"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-8 border-t border-purple-100 dark:border-purple-900/30 bg-gradient-to-b from-transparent to-purple-50/50 dark:to-purple-950/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-0"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">AJ</span>
              </div>
              <span className="font-medium text-gray-800 dark:text-gray-200">Alex Johnson</span>
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-4 md:mb-0"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Alex Johnson. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 flex items-center justify-center">
              Made with <Heart className="w-3 h-3 mx-1 text-pink-500 fill-pink-500" /> and modern tech
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 group"
            >
              <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Back to top</span>
              <ArrowUp className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:translate-y-[-2px] transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 opacity-30" />
    </footer>
  )
}
