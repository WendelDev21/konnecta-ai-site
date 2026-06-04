"use client"

import { motion } from "framer-motion"
import { 
  ArrowRight, 
  ArrowLeft,
  Bot,
  Code2,
  ShoppingCart,
  Building2,
  HeartPulse,
  GraduationCap,
  Truck,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

interface Project {
  id: number
  title: string
  description: string
  category: string
  icon: React.ComponentType<{ className?: string }>
  technologies: string[]
  results: string[]
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestão de Barbearia",
    description: "Desenvolvimento de sistema completo de gestão de barbearia, gestão de clientes, funcionários, financeiro, dashboard de monitoramento em tempo real.",
    category: "Desenvolvimento",
    icon: Bot,
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    results: ["Aumento de faturamento: 10% a 35%", "Redução de faltas/no-show: 30% a 70%", "Aumento de agendamentos recorrentes: 20% a 50%", "Aumento de agendamentos recorrentes: 20% a 50%", "Controle de fluxo de caixa e perdas financeiras: melhora de 60%+", "Aumento da ocupação dos barbeiros: 15% a 40%"],
    image: "linear-gradient(135deg, hsl(217 91% 35%) 0%, hsl(217 91% 25%) 100%)"
  },
  {
    id: 2,
    title: "Fluxo de follow-up para e-commerce",
    description: "Desenvolvimento de fluxo de follow-up para e-commerce, integração com CRM, automação de mensagens personalizadas, análise de comportamento do cliente.",
    category: "Automação",
    icon: Bot,
    technologies: ["n8n", "Redis", "WhatsApp", "JavaScript"],
    results: ["Aumento de conversão: 15% a 40%", "Redução de carrinhos abandonados: 20% a 50%", "Aumento de engajamento: 25% a 60%", "Melhoria na experiência do cliente: feedback positivo em 80%+", "Aumento de vendas recorrentes: 10% a 30%"],
    image: "linear-gradient(135deg, hsl(217 91% 35%) 0%, hsl(217 91% 25%) 100%)"
  },
  {
    id: 3,
    title: "Chatbot de suporte para loja",
    description: "Desenvolvimento de chatbot de suporte para loja, integração com plataforma de e-commerce, automação de respostas a perguntas frequentes, encaminhamento para atendimento humano.",
    category: "IA",
    icon: Bot,
    technologies: ["n8n", "Redis", "WhatsApp", "JavaScript", "IA"],
    results: ["Redução de tempo de resposta: 50% a 80%", "Aumento de satisfação do cliente: feedback positivo em 85%+", "Redução de carga de trabalho da equipe de suporte: 30% a 60%", "Aumento de vendas cruzadas: 10% a 25%", "Melhoria na experiência do cliente: feedback positivo em 80%+"],
    image: "linear-gradient(135deg, hsl(217 91% 35%) 0%, hsl(217 91% 25%) 100%)"
  },
  {
    id: 4,
    title: "Integração Anúncios Meta + CRM",
    description: "Desenvolvimento de integração entre anúncios da Meta e CRM, automação de processos, análise de desempenho e otimização de campanhas.",
    category: "Automação",
    icon: Bot,
    technologies: ["n8n", "MetaAPI", "WhatsApp", "JavaScript", "IA", "CRM"],
    results: ["Aumento de conversão: 20% a 50%", "Redução de custo por clique: 25% a 60%", "Aumento de engajamento: 30% a 70%", "Melhoria na experiência do cliente: feedback positivo em 85%+", "Aumento de vendas recorrentes: 15% a 40%"],
    image: "linear-gradient(135deg, hsl(217 91% 35%) 0%, hsl(217 91% 25%) 100%)"
  }
]

const categories = ["Todos", "Automação", "Desenvolvimento", "IA"]

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a 
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img 
              src="/logo.png" 
              alt="KonnectaAI Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-foreground">
              Konnecta.<span className="text-primary">AI</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="/#servicos" className="text-muted-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="/portfolio" className="text-primary transition-colors">Portfólio</a>
            <a href="/#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="/#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
              Fale Conosco
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 px-6 py-4"
          >
            <div className="flex flex-col gap-4">
              <a href="/#servicos" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
              <a href="/portfolio" className="text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Portfólio</a>
              <a href="/#sobre" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
              <a href="/#contato" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contato</a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                Fale Conosco
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.a 
              href="/"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para o início</span>
            </motion.a>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Nosso{" "}
              <span className="text-primary glow-text">Portfólio</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Conheça alguns dos projetos que desenvolvemos e os resultados 
              que alcançamos para nossos clientes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden h-full flex flex-col">
                  {/* Project Image/Gradient */}
                  <div 
                    className="h-48 flex items-center justify-center relative overflow-hidden"
                    style={{ background: project.image }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <project.icon className="w-16 h-16 text-white/80 relative z-10 group-hover:scale-110 transition-transform" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Results */}
                    <div className="border-t border-border/50 pt-4">
                      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Resultados</p>
                      <div className="flex flex-wrap gap-2">
                        {project.results.map((result) => (
                          <span 
                            key={result}
                            className="text-xs text-primary font-medium"
                          >
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-16 text-center overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Quer um projeto{" "}
                <span className="text-primary">assim</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Entre em contato conosco e vamos transformar sua ideia 
                em realidade com tecnologia de ponta.
              </p>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8 py-6 text-lg"
                asChild
              >
                <a href="/#contato">
                  Iniciar Projeto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="KonnectaAI Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-foreground">
                Konnecta.<span className="text-primary">AI</span>
              </span>
            </a>

            <div className="flex items-center gap-6 text-muted-foreground">
              <a href="/#servicos" className="hover:text-primary transition-colors">Serviços</a>
              <a href="/portfolio" className="hover:text-primary transition-colors">Portfólio</a>
              <a href="/#sobre" className="hover:text-primary transition-colors">Sobre</a>
              <a href="/#contato" className="hover:text-primary transition-colors">Contato</a>
            </div>

            <p className="text-muted-foreground text-sm">
              © 2026 KonnectaAI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
