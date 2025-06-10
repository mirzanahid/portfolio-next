"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Frontend Specialist",
    "React Expert",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                <MapPin className="w-3 h-3 mr-1" />
                Available for work
              </Badge>

              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Mirza Nahid
                  </span>
                </h1>

                <div className="text-xl md:text-2xl text-muted-foreground h-8 flex items-center">
                  <span className="mr-2">A passionate</span>
                  <span
                    key={currentRole}
                    className="text-primary font-semibold animate-in slide-in-from-bottom-2 duration-500"
                  >
                    {roles[currentRole]}
                  </span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                I build user-friendly and functional web applications using
                modern technologies like React and Next.js, focusing on solving
                real-world problems with clean, efficient, and practical
                solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl transform rotate-6 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl transform -rotate-3 scale-110"></div>

              {/* Main image container */}
              <div className="relative bg-background rounded-2xl p-2 shadow-2xl">
                <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-xl overflow-hidden">
                  <Image
                    src="/me2.jpg"
                    alt="Alex Johnson - Portfolio"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-pulse">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs font-medium">Available</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-xs text-muted-foreground">
                      Based in
                    </div>
                    <div className="font-semibold">San Francisco, CA</div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -left-4 animate-bounce">
                <Badge className="bg-blue-500 hover:bg-blue-600">React</Badge>
              </div>
              <div className="absolute top-1/2 -right-6 animate-bounce delay-300">
                <Badge className="bg-green-500 hover:bg-green-600">
                  Node.js
                </Badge>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce delay-700">
                <Badge className="bg-purple-500 hover:bg-purple-600">
                  TypeScript
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
