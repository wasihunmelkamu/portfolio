"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Brain,
  ChevronDown,
  Menu,
  X,
  Star,
  Sparkles,
} from "lucide-react"
import ContactForm from "@/components/ContactForm" // Declare the ContactForm component

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Intersection Observer for animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
            }
          })
        },
        { threshold: 0.1 },
      )

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) observer.observe(element)
      })

      return () => observer.disconnect()
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 70 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
    ml: [
      { name: "Python", level: 95 },
      { name: "TensorFlow", level: 60 },
      { name: "Scikit-learn", level: 65 },
      { name: "Data Analysis", level: 70 },
      { name: "Pandas", level: 80 },
    ],
  }

  const projects = [
    {
      title: "Single Center Clearance System",
      description:
        "Comprehensive clearance management system for educational institutions with React frontend and Node.js backend",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Material-UI"],
      image: "/Screenshot 2025-05-25 083155.png?height=200&width=300",
      github: "https://github.com/wasihunmelkamu",
      live: "https://single-center-management.vercel.app/",
      id: "clearance-system",
    },
    // {
    //   title: "E-Commerce Platform",
    //   description: "Full-stack e-commerce solution with React frontend and Node.js backend",
    //   tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    //   image: "/th.jpg?height=200&width=300",
    //   github: "https://github.com/wasihunmelkamu/codelover",
    //   live: "https://single-center-management.vercel.app/",
    //   id: "ecommerce",
    // },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates using Next.js",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      image: "/OIP.jpg?height=200&width=300",
      github: "https://github.com/wasihunmelkam/codelover",
      live: "/projects/task-manager",
      id: "task-manager",
    },
    {
      title: "ML Price Predictor",
      description: "Machine learning model for predicting house prices with web interface",
      tech: ["Python", "Scikit-learn", "Flask", "React"],
      image: "/OIP.webp?height=200&width=300",
      github: "https://github.com/wasihunmelkamu/codelover",
      live: "/projects/ml-predictor",
      id: "ml-predictor",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Mouse follower gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-emerald-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 relative group ${
                    activeSection === item ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 ${
                      activeSection === item ? "w-full" : "group-hover:w-full"
                    }`}
                  ></span>
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 border-t border-slate-800">
              {["home", "about", "skills", "projects", "contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-slate-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible.home ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center relative group hover:scale-110 transition-all duration-300 shadow-2xl shadow-emerald-500/25">
              <Code size={48} className="text-slate-950 transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-75 blur-xl animate-pulse"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
              Full-Stack{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Developer
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-slate-400 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Crafting digital experiences with React, Next.js, Node.js & Machine Learning
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8" style={{ animationDelay: "0.7s" }}>
              <Badge
                variant="secondary"
                className="bg-emerald-900/50 text-emerald-300 border-emerald-700 hover:bg-emerald-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <Sparkles className="mr-1" size={30} />
                Frontend Specialist
              </Badge>
              <Badge
                variant="secondary"
                className="bg-cyan-900/50 text-cyan-300 border-cyan-700 hover:bg-cyan-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Database className="mr-1" size={30} />
                Backend Developer
              </Badge>
              <Badge
                variant="secondary"
                className="bg-orange-900/50 text-orange-300 border-orange-700 hover:bg-orange-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                <Brain className="mr-1" size={30} />
                ML Enthusiast
              </Badge>
            </div>
            <div className="flex justify-center gap-4" style={{ animationDelay: "0.9s" }}>
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25 group"
              >
                <Star className="mr-2 transition-transform duration-300 group-hover:rotate-12" size={16} />
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="bg-white text-slate-900 border-white hover:bg-slate-100 hover:border-slate-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="animate-bounce mt-16">
            <ChevronDown
              size={32}
              className="mx-auto text-slate-400 hover:text-emerald-400 transition-colors duration-300"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible.about ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative group">
                <img
                  src="/photo_2024-10-30_00-53-38.jpg?height=400&width=400"
                  alt="Developer"
                  className="rounded-lg shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-emerald-500/25"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            </div>
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible.about ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies. I specialize in
                creating scalable web applications using React and Next.js for the frontend, and Node.js with Express
                for robust backend solutions.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                With intermediate experience in machine learning, I enjoy integrating AI capabilities into web
                applications to create intelligent, data-driven solutions that solve real-world problems.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="bg-white text-slate-900 border-white hover:bg-slate-100 hover:border-slate-200 transition-all duration-300 hover:scale-105 group"
                  onClick={() => window.open("https://github.com/wasihunmelkamu", "_blank")}
                >
                  <Github className="mr-2 transition-transform duration-300 group-hover:rotate-12" size={16} />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-slate-900 border-white hover:bg-slate-100 hover:border-slate-200 transition-all duration-300 hover:scale-105 group"
                  onClick={() => window.open("https://linkedin.com/in/wasihunmelkamu", "_blank")}
                >
                  <Linkedin className="mr-2 transition-transform duration-300 group-hover:rotate-12" size={16} />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/30 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <Card
              className={`bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group ${
                isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                  <Code size={24} className="transition-transform duration-300 group-hover:rotate-12" />
                  Frontend
                </CardTitle>
                <CardDescription>Building responsive and interactive user interfaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.frontend.map((skill, index) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium group-hover/skill:text-emerald-300 transition-colors duration-300 text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full transition-all duration-1000 hover:shadow-lg hover:shadow-emerald-500/50"
                          style={{
                            width: isVisible.skills ? `${skill.level}%` : "0%",
                            transitionDelay: `${index * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend Skills */}
            <Card
              className={`bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group ${
                isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  <Database size={24} className="transition-transform duration-300 group-hover:rotate-12" />
                  Backend
                </CardTitle>
                <CardDescription>Server-side development and database management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.backend.map((skill, index) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium group-hover/skill:text-cyan-300 transition-colors duration-300  text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 hover:shadow-lg hover:shadow-cyan-500/50"
                          style={{
                            width: isVisible.skills ? `${skill.level}%` : "0%",
                            transitionDelay: `${index * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ML Skills */}
            <Card
              className={`bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 group ${
                isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                  <Brain size={24} className="transition-transform duration-300 group-hover:rotate-12" />
                  Machine Learning
                </CardTitle>
                <CardDescription>Data science and AI model development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.ml.map((skill, index) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium group-hover/skill:text-orange-300 transition-colors duration-300 text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full transition-all duration-1000 hover:shadow-lg hover:shadow-orange-500/50"
                          style={{
                            width: isVisible.skills ? `${skill.level}%` : "0%",
                            transitionDelay: `${index * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-emerald-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 group ${
                  isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="relative overflow-hidden rounded-lg mb-4 group/image">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-500 group-hover/image:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-300"></div>
                  </div>
                  <CardTitle className="text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="group-hover:text-slate-200 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-700 text-slate-300 hover:bg-slate-600 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600 hover:bg-slate-700 hover:border-emerald-500 transition-all duration-300 hover:scale-105 group/btn text-slate-200 bg-transparent"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 transition-transform duration-300 group-hover/btn:rotate-12" size={14} />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 group/btn text-white"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink
                        className="mr-2 transition-transform duration-300 group-hover/btn:rotate-12"
                        size={14}
                      />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/30 backdrop-blur-sm relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Let's Work Together
          </h2>
          <p
            className={`text-xl text-slate-300 mb-12 transition-all duration-1000 delay-300 ${
              isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life!
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              className="bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25 group"
              onClick={() => scrollToSection("contact-form")}
            >
              <Mail className="mr-2 transition-transform duration-300 group-hover:rotate-12" size={16} />
              Send Email
            </Button>
            <Button
              variant="outline"
              className="bg-white text-slate-900 border-white hover:bg-slate-100 hover:border-slate-200 transition-all duration-300 hover:scale-105 group"
              onClick={() => window.open("https://github.com/wasihunmelkamu", "_blank")}
            >
              <Github className="mr-2 transition-transform duration-300 group-hover:rotate-12" size={16} />
              View GitHub
            </Button>
            <Button
              variant="outline"
              className="bg-white text-slate-900 border-white hover:bg-slate-100 hover:border-slate-200 transition-all duration-300 hover:scale-105 group"
              onClick={() => window.open("https://linkedin.com/in/wasihunmelkamu", "_blank")}
            >
              <Linkedin className="mr-2 transition-transform duration-300 group-hover:rotate-12" size={16} />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-4 relative">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="hover:text-slate-300 transition-colors duration-300">
            &copy; 2024 Full-Stack Developer Portfolio. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
