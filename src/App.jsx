"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  User,
  ChevronDown,
  Menu,
  X,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "skills", "projects", "achievements", "contact"]
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
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ]

  const skills = {
    languages: ["C++", "Python", "JavaScript"],
    webTech: [
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "ReactJS",
      "Zustand",
      "Zod",
      "GSAP",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Prisma",
      "PostgreSQL",
    ],
    tools: ["Git", "GitHub", "Docker", "Vite", "Judge0", "React Hook Form", "Monaco Editor"],
    aiml: ["Generative AI", "OpenAI APIs", "LLM integration"],
    soft: ["Leadership", "Public Speaking", "Athletics"],
    core: ["OOP", "Data Structures and Algorithms", "Database Management Systems"],
  }

  const projects = [
    {
      title: "DSA2Z",
      link: "https://dsa2z.in",
      type: "Personal Project",
      description:
        "A full-stack platform inspired by LeetCode, allowing users to solve data structures and algorithms problems with real-time code execution powered by Judge0.",
      highlights: [
        "Dynamic frontend using React, TailwindCSS, and Zustand",
        "Secure backend with Express and Prisma, JWT authentication",
        "Monaco Editor integration for rich coding experience",
        "AI-powered solution analysis using Generative AI",
        "Razorpay integration for AI token purchases",
      ],
      tech: [
        "ReactJS",
        "TailwindCSS",
        "Zustand",
        "Zod",
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "Judge0",
        "Docker",
        "Vite",
        "Razorpay",
        "Generative AI",
      ],
    },
    {
      title: "SwingUI",
      link: "https://swingui.com",
      type: "Group Project",
      description:
        "A modern React + TailwindCSS component library featuring animated, responsive UI elements aimed at speeding up MVP development for startups and design teams.",
      highlights: [
        "20+ customizable, production-ready components",
        "Engaging transitions using GSAP and Framer Motion",
        "PrismJS integration for syntax-highlighted code previews",
        "Scalable icon support with multiple icon libraries",
      ],
      tech: [
        "ReactJS",
        "TailwindCSS",
        "GSAP",
        "Framer Motion",
        "PrismJS",
        "Vite",
        "Lucide",
        "Remixicon",
        "React Icons",
      ],
    },
    {
      title: "Kanban Board",
      link: "https://trello-clone-u450.onrender.com",
      type: "Personal Project",
      description:
        "A responsive Trello-inspired Kanban board using HTML, CSS, and vanilla JavaScript, featuring drag-and-drop task cards and smooth UX.",
      highlights: [
        "Persistent task storage with LocalStorage",
        "Custom right-click context menu for task management",
        "Intuitive task reordering with real-time DOM manipulation",
        "Dynamic task count updates for each column",
      ],
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    },
  ]

  const achievements = [
    {
      title: "4th Position at ChaiCode's 25-Day Hackathon",
      description: "Achieved 4th position among 16 top-tier teams across India with SwingUI project.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Peerlist Launchpad Recognition",
      description: "SwingUI trended at #7 in Week 18 of 2025, celebrated by ChaiCode with a featured team poster.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "YouTube Feature",
      description: "DSA2Z got featured in Chai aur Code YouTube channel having over 6.5 Lakh subscribers.",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Yashovardhan Singh
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative ${
                    activeSection === item.id ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700/50 bg-gray-900/95 backdrop-blur-xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:text-blue-400 hover:bg-gray-800/50 rounded-lg mx-2 ${
                    activeSection === item.id ? "text-blue-400 bg-gray-800/50" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
              <span className="text-yellow-400 font-medium">Welcome to my portfolio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 leading-tight">
              Yashovardhan Singh
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">Full-Stack Developer & AI Enthusiast</p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              B.Tech IT Student at NIT Raipur | Building innovative web applications with modern technologies
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Yasho321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/yashovardhan-singh-9bb28030b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:yashovardhans321@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Passionate full-stack developer with expertise in modern web technologies and AI integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                <User className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a dedicated B.Tech IT student at NIT Raipur with a passion for creating innovative web
                  applications. My journey in technology spans from competitive programming to full-stack development,
                  with a special interest in AI integration and modern web technologies.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
                <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Full-Stack Development</h4>
                  <p className="text-gray-400">
                    Experienced in building end-to-end web applications using React, Node.js, and modern databases.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
                <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-500/30">
                  <Award className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Competitive Programming</h4>
                  <p className="text-gray-400">
                    Active on platforms like CodeChef, Codeforces, and LeetCode with strong problem-solving skills.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
                <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                  <Briefcase className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Leadership</h4>
                  <p className="text-gray-400">
                    Currently serving as Tech Executive at Shaurya, NIT Raipur, contributing to multiple web projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Education
            </h2>
            <p className="text-lg text-gray-400">My academic journey and achievements</p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-blue-500 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-6 w-6 text-blue-400" />
                  <div>
                    <CardTitle className="text-white">B.Tech, Information Technology</CardTitle>
                    <CardDescription className="text-gray-400">
                      National Institute of Technology Raipur • 2027
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    CGPA: 8.08/10.0
                  </Badge>
                  <span className="text-gray-400">Currently pursuing</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-6 w-6 text-green-400" />
                  <div>
                    <CardTitle className="text-white">CBSE - XII</CardTitle>
                    <CardDescription className="text-gray-400">
                      St Teresa's Convent School, Raigarh • 2023
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  93.2%
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-6 w-6 text-purple-400" />
                  <div>
                    <CardTitle className="text-white">CBSE - X</CardTitle>
                    <CardDescription className="text-gray-400">
                      St Teresa's Convent School, Raigarh • 2021
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  95%
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-400">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Code className="h-5 w-5 text-blue-400" />
                  <span>Programming Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Code className="h-5 w-5 text-green-400" />
                  <span>Web Technologies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.webTech.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Code className="h-5 w-5 text-purple-400" />
                  <span>Developer Tools</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Code className="h-5 w-5 text-orange-400" />
                  <span>AI/ML</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.aiml.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Code className="h-5 w-5 text-red-400" />
                  <span>Soft Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Code className="h-5 w-5 text-cyan-400" />
                  <span>Core Subjects</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.core.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400">Some of my notable work and contributions</p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02]"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-colors flex items-center gap-2"
                        >
                          {project.title}
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </CardTitle>
                      <Badge variant="outline" className="mb-4 border-gray-600 text-gray-300">
                        {project.type}
                      </Badge>
                      <CardDescription className="text-base leading-relaxed text-gray-300">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-400">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Achievements
            </h2>
            <p className="text-lg text-gray-400">Recognition and accomplishments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full p-3 w-fit mb-4 border border-yellow-400/30">
                    <div className="text-yellow-400">{achievement.icon}</div>
                  </div>
                  <CardTitle className="text-lg text-white">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border-blue-500/30 hover:from-blue-900/40 hover:to-purple-900/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Briefcase className="h-5 w-5 text-blue-400" />
                  <span>Position of Responsibility</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Tech Executive - Shaurya, NIT Raipur</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Contributing to the development of Shaurya Sports Committee website</li>
                    <li>Developing website for Samar Sports Fest</li>
                    <li>Optimizing website performance and ensuring responsive design</li>
                    <li>Enhancing user engagement across various devices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-400">Let's connect and discuss opportunities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a
                      href="mailto:yashovardhans321@gmail.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      yashovardhans321@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href="tel:+916261021177" className="text-green-400 hover:text-green-300 transition-colors">
                      +91-6261021177
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-500/30">
                    <GraduationCap className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Institution</p>
                    <p className="text-gray-400">National Institute Of Technology Raipur</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-white mb-4">Find me online</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Yasho321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yashovardhan-singh-9bb28030b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:yashovardhans321@gmail.com"
                    className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-110"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-gray-700/50">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-gray-600/50">
                  <User className="h-16 w-16 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>
                <p className="text-gray-400 mb-4">Let's build something amazing together!</p>
                <Button
                  onClick={() => window.open("mailto:yashovardhans321@gmail.com")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Yashovardhan Singh. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
