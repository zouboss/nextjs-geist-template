"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Download, 
  ExternalLink,
  ChevronDown,
  Code2,
  Cloud,
  Settings,
  Activity,
  ArrowRight,
  Database,
  GitBranch,
  Globe,
  Cpu,
  Layers,
  Terminal,
  Zap,
  Shield,
  Monitor,
  Server,
  GitMerge,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
  Users,
  Calendar,
  Target
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    "Développement Web": [
      { name: "HTML/CSS", icon: <Code2 className="w-6 h-6" />, color: "from-orange-400 to-red-500", level: "Expert" },
      { name: "JavaScript", icon: <Zap className="w-6 h-6" />, color: "from-yellow-400 to-orange-500", level: "Expert" },
      { name: "Python", icon: <Terminal className="w-6 h-6" />, color: "from-blue-400 to-green-500", level: "Expert" },
      { name: "React", icon: <Layers className="w-6 h-6" />, color: "from-cyan-400 to-blue-500", level: "Avancé" },
      { name: "NestJS", icon: <Server className="w-6 h-6" />, color: "from-red-400 to-pink-500", level: "Avancé" },
      { name: "Django", icon: <Globe className="w-6 h-6" />, color: "from-green-400 to-emerald-500", level: "Avancé" },
      { name: "Tailwind CSS", icon: <Settings className="w-6 h-6" />, color: "from-teal-400 to-cyan-500", level: "Expert" },
      { name: "Bootstrap", icon: <Layers className="w-6 h-6" />, color: "from-purple-400 to-indigo-500", level: "Expert" }
    ],
    "DevOps & Infrastructure": [
      { name: "Docker", icon: <Cpu className="w-6 h-6" />, color: "from-blue-400 to-sky-500", level: "Expert" },
      { name: "Kubernetes", icon: <Cloud className="w-6 h-6" />, color: "from-cyan-400 to-blue-500", level: "Expert" },
      { name: "Jenkins", icon: <Activity className="w-6 h-6" />, color: "from-red-400 to-orange-500", level: "Expert" },
      { name: "Argo CD", icon: <GitMerge className="w-6 h-6" />, color: "from-orange-400 to-red-500", level: "Avancé" },
      { name: "Terraform", icon: <Settings className="w-6 h-6" />, color: "from-purple-400 to-violet-500", level: "Expert" },
      { name: "Ansible", icon: <Shield className="w-6 h-6" />, color: "from-red-400 to-pink-500", level: "Avancé" },
      { name: "Prometheus", icon: <Monitor className="w-6 h-6" />, color: "from-orange-400 to-red-500", level: "Expert" },
      { name: "Grafana", icon: <TrendingUp className="w-6 h-6" />, color: "from-yellow-400 to-orange-500", level: "Expert" },
      { name: "SonarQube", icon: <CheckCircle className="w-6 h-6" />, color: "from-blue-400 to-indigo-500", level: "Avancé" },
      { name: "Trivy", icon: <Shield className="w-6 h-6" />, color: "from-teal-400 to-cyan-500", level: "Avancé" }
    ],
    "Cloud & Services": [
      { name: "AWS", icon: <Cloud className="w-6 h-6" />, color: "from-orange-400 to-yellow-500", level: "Expert" },
      { name: "EC2", icon: <Server className="w-6 h-6" />, color: "from-orange-500 to-red-500", level: "Expert" },
      { name: "Lambda", icon: <Zap className="w-6 h-6" />, color: "from-yellow-400 to-orange-500", level: "Expert" },
      { name: "S3", icon: <Database className="w-6 h-6" />, color: "from-blue-400 to-cyan-500", level: "Expert" },
      { name: "IAM", icon: <Shield className="w-6 h-6" />, color: "from-green-400 to-emerald-500", level: "Expert" },
      { name: "EKS", icon: <Cloud className="w-6 h-6" />, color: "from-purple-400 to-pink-500", level: "Avancé" },
      { name: "ECS", icon: <Server className="w-6 h-6" />, color: "from-cyan-400 to-blue-500", level: "Avancé" },
      { name: "RDS", icon: <Database className="w-6 h-6" />, color: "from-indigo-400 to-purple-500", level: "Expert" },
      { name: "DynamoDB", icon: <Database className="w-6 h-6" />, color: "from-teal-400 to-cyan-500", level: "Avancé" }
    ],
    "Outils & Bases de données": [
      { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, color: "from-blue-400 to-indigo-500", level: "Expert" },
      { name: "MongoDB", icon: <Database className="w-6 h-6" />, color: "from-green-400 to-emerald-500", level: "Expert" },
      { name: "SQLite", icon: <Database className="w-6 h-6" />, color: "from-gray-400 to-slate-500", level: "Avancé" },
      { name: "API REST", icon: <GitBranch className="w-6 h-6" />, color: "from-purple-400 to-pink-500", level: "Expert" },
      { name: "Postman", icon: <Zap className="w-6 h-6" />, color: "from-orange-400 to-red-500", level: "Expert" },
      { name: "Git & GitHub", icon: <GitBranch className="w-6 h-6" />, color: "from-gray-400 to-slate-500", level: "Expert" }
    ],
    "Gestion de Projet": [
      { name: "Scrum", icon: <Users className="w-6 h-6" />, color: "from-blue-400 to-cyan-500", level: "Expert" },
      { name: "Kanban", icon: <Calendar className="w-6 h-6" />, color: "from-green-400 to-emerald-500", level: "Expert" },
      { name: "Jira", icon: <Target className="w-6 h-6" />, color: "from-blue-500 to-indigo-600", level: "Expert" }
    ]
  };

  const projects = [
    {
      title: "Plateforme E-commerce Cloud-Native",
      description: "Architecture microservices avec déploiement automatisé sur AWS EKS",
      technologies: ["React", "NestJS", "PostgreSQL", "Docker", "Kubernetes", "AWS EKS", "Jenkins"],
      impact: "99.9% uptime, scaling automatique, CI/CD complet"
    },
    {
      title: "Infrastructure Monitoring Dashboard",
      description: "Solution complète d'observabilité avec Prometheus et Grafana",
      technologies: ["Prometheus", "Grafana", "Docker", "Kubernetes", "AWS CloudWatch"],
      impact: "Réduction MTTR de 70%, monitoring temps réel"
    },
    {
      title: "Pipeline GitOps Multi-environnement",
      description: "Déploiement automatisé avec Argo CD et gestion des secrets",
      technologies: ["Argo CD", "Kubernetes", "Terraform", "AWS", "Jenkins"],
      impact: "Déploiement 15x plus rapide, zéro downtime"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 60%)`
          }}
        />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800/50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-md opacity-75" />
                <div className="relative w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DevOps Portfolio
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {["hero", "about", "skills", "projects", "contact"].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize px-4 py-2 rounded-lg transition-all ${
                    activeSection === section 
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/50" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section === "hero" ? "Accueil" : section}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Skills Section - Ultra Moderne avec Logos */}
      <AnimatePresence mode="wait">
        {activeSection === "skills" && (
          <motion.section
            key="skills"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="min-h-screen flex items-center justify-center px-6 py-20"
          >
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Compétences techniques
              </motion.h2>

              <div className="grid gap-12">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <motion.div
                    key={category}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    <motion.h3
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.1 }}
                      className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                    >
                      {category}
                    </motion.h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -10,
                            transition: { duration: 0.2 }
                          }}
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          className="relative group"
                        >
                          <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${skill.color} bg-opacity-20 border border-slate-700/50 p-6 cursor-pointer transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20`}>
                            {/* Background gradient effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                            
                            {/* Glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                            
                            <div className="relative z-10">
                              {/* Icon container */}
                              <motion.div 
                                className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                                animate={hoveredSkill === skill.name ? { rotate: 360 } : { rotate: 0 }}
                                transition={{ duration: 0.5 }}
                              >
                                <div className="text-white">
                                  {skill.icon}
                                </div>
                              </motion.div>

                              {/* Skill name */}
                              <h4 className="text-lg font-bold text-center mb-2 text-white">
                                {skill.name}
                              </h4>

                              {/* Level badge */}
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: hoveredSkill === skill.name ? 1 : 0.8 }}
                                className={`text-center text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white`}
                              >
                                {skill.level}
                              </motion.div>

                              {/* Hover effect ring */}
                              <motion.div
                                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                                animate={hoveredSkill === skill.name ? { borderColor: "rgba(59, 130, 246, 0.5)" } : { borderColor: "transparent" }}
                                transition={{ duration: 0.2 }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skills statistics */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-16 text-center"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { label: "Technologies", value: "35+", icon: <Code2 className="w-8 h-8" /> },
                    { label: "Certifications", value: "4+", icon: <Award className="w-8 h-8" /> },
                    { label: "Projets", value: "15+", icon: <Star className="w-8 h-8" /> },
                    { label: "Années d'expérience", value: "5+", icon: <TrendingUp className="w-8 h-8" /> }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
                    >
                      <div className="text-blue-400 mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Projects Section */}
      <AnimatePresence mode="wait">
        {activeSection === "projects" && (
          <motion.section
            key="projects"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="min-h-screen px-6 py-20"
          >
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Projets récents
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    onHoverStart={() => setHoveredProject(index)}
                    onHoverEnd={() => setHoveredProject(null)}
                    className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 overflow-hidden"
                  >
                    {hoveredProject === index && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    )}
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <Badge className="bg-green-500/20 text-green-400">
                          Production
                        </Badge>
                      </div>
                      
                      <p className="text-slate-300 mb-4">{project.description}</p>
                      
                      <div className="mb-4">
                        <p className="text-sm text-slate-400 mb-2">Impact :</p>
                        <p className="text-blue-400 font-semibold">{project.impact}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full border-slate-600 hover:bg-slate-700/50"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir le projet
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* About Section */}
      <AnimatePresence mode="wait">
        {activeSection === "about" && (
          <motion.section
            key="about"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="min-h-screen flex items-center justify-center px-6 py-20"
          >
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                À propos de moi
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-semibold mb-4">Mon parcours</h3>
                  <p className="text-slate-300 mb-4">
                    Ingénieur DevOps avec 5+ ans d'expérience dans la conception d'infrastructures 
                    cloud scalables et résilientes. Expert en automatisation et en optimisation des 
                    processus de déploiement.
                  </p>
                  <p className="text-slate-300">
                    Je transforme les défis techniques en solutions élégantes, en mettant l'accent 
                    sur la fiabilité, la sécurité et la performance.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
                  <div className="space-y-3">
                    {[
                      "AWS Solutions Architect Professional",
                      "Certified Kubernetes Administrator",
                      "HashiCorp Terraform Associate",
                      "Docker Certified Associate"
                    ].map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg"
                      >
                        <span className="text-sm">{cert}</span>
                        <Badge variant="secondary">202{4 - index}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Contact Section - Version Originale */}
      <AnimatePresence mode="wait">
        {activeSection === "contact" && (
          <motion.section
            key="contact"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="min-h-screen flex items-center justify-center px-6 py-20"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Contactez-moi
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-300 mb-12"
              >
                Prêt à transformer votre infrastructure ? Discutons de votre projet
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                  { icon: Mail, label: "Email", value: "contact@devops-portfolio.com" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/devops-engineer" },
                  { icon: Github, label: "GitHub", value: "github.com/devops-engineer" },
                  { icon: MapPin, label: "Localisation", value: "Paris, France" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                    <p className="text-slate-400">{item.value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/25"
                >
                  <Mail className="w-5 h-5 mr-2 inline" />
                  Envoyer un message
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-slate-600 rounded-xl text-lg font-semibold hover:bg-slate-800/50 transition-all"
                >
                  <Download className="w-5 h-5 mr-2 inline" />
                  Télécharger CV
                </motion.button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-slate-400 mb-2">
              © 2024 Portfolio DevOps & Cloud
            </p>
            <p className="text-sm text-slate-500">
              Conçu avec Next.js, Tailwind CSS, Framer Motion et passion
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
