"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  Code2, 
  Bot, 
  ArrowRight, 
  Mail, 
  Phone, 
  Instagram, 
  Sparkles,
  Layers,
  Network,
  Shield,
  Rocket,
  CheckCircle2,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactFormDialog } from "@/components/contact-form-dialog"
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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      icon: Bot,
      title: "Automação com IA",
      description: "Automatize processos complexos com inteligência artificial de última geração."
    },
    {
      icon: Code2,
      title: "Desenvolvimento de Software",
      description: "Sistemas personalizados e escaláveis para impulsionar seu negócio."
    },
    {
      icon: Network,
      title: "Integrações",
      description: "Conecte todos os seus sistemas e dados em uma plataforma unificada."
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Proteja seus dados e sistemas com as melhores práticas de segurança."
    }
  ]

  const features = [
    "Desenvolvimento ágil e iterativo",
    "Suporte técnico especializado 24/7",
    "Tecnologias de ponta e inovação",
    "Soluções escaláveis e personalizadas",
    "Integração com sistemas existentes",
    "Consultoria estratégica em TI"
  ]

  const stats = [
    { value: "150+", label: "Projetos Entregues" },
    { value: "98%", label: "Clientes Satisfeitos" },
    { value: "24/7", label: "Suporte Disponível" },
    { value: "5+", label: "Anos de Experiência" }
  ]

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
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
          </motion.div>

          {/* Desktop Nav */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfólio</a>
            <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
            <ContactFormDialog>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                Fale Conosco
              </Button>
            </ContactFormDialog>
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
              <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
              <a href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Portfólio</a>
              <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
              <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contato</a>
              <ContactFormDialog>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                  Fale Conosco
                </Button>
              </ContactFormDialog>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 py-20">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Inovação em Automação e IA</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              Transformamos ideias em{" "}
              <span className="text-primary glow-text">soluções inteligentes</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Desenvolvemos sistemas personalizados e soluções de automação com inteligência artificial 
              para impulsionar a eficiência e inovação do seu negócio.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <ContactFormDialog>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8 py-6 text-lg"
                >
                  Começar Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </ContactFormDialog>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg"
                asChild
              >
                <a href="/portfolio">Ver Portfólio</a>
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-sm">Role para explorar</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1"
              >
                <div className="w-1.5 h-3 bg-primary rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary glow-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block">NOSSOS SERVIÇOS</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Soluções que{" "}
              <span className="text-primary">transformam</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos um conjunto completo de serviços para digitalizar e automatizar seu negócio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium mb-4 block">SOBRE NÓS</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Inovação que{" "}
                <span className="text-primary">Konnecta</span> o futuro
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                A Konnecta.AI nasceu da paixão por tecnologia e da visão de um futuro onde a automação 
                inteligente transforma a maneira como empresas operam. Combinamos expertise técnica 
                com compreensão profunda de negócios para entregar soluções que realmente fazem a diferença.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-primary/10 rounded-3xl -rotate-3" />
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center glow-primary animate-float">
                      <Layers className="w-16 h-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Tecnologia de Ponta</h3>
                    <p className="text-muted-foreground">
                      Utilizamos as mais recentes tecnologias em IA, machine learning e automação.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contatocta" className="py-20 relative">
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
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Pronto para{" "}
                <span className="text-primary">decolar</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Entre em contato conosco e descubra como podemos transformar seu negócio 
                com soluções inteligentes e personalizadas.
              </p>
              <Button
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8 py-6 text-lg"
              >
                <a href="https://wa.me/5579991054765?text=Ol%C3%A1+estou+interessado+em+um+projeto%21+Podemos+agendar+uma+reuni%C3%A3o%3F&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                  Agendar Reunião
                </a>
                <Zap className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block">CONTATO</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Vamos{" "}
              <span className="text-primary">conversar</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para ouvir suas necessidades e criar a solução perfeita para você.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.a
              href="mailto:konnecta.ai@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="block"
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Email</h3>
                <p className="text-primary font-medium">konnecta.ai@gmail.com</p>
              </Card>
            </motion.a>

            <motion.a
              href="https://wa.me/5579991054765"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="block"
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">WhatsApp</h3>
                <p className="text-primary font-medium">+55 79 9 9105-4765</p>
              </Card>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/konnecta.ai"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="block"
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Instagram</h3>
                <p className="text-primary font-medium">@konnecta.ai</p>
              </Card>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="KonnectaAI Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-foreground">
                Konnecta.<span className="text-primary">AI</span>
              </span>
            </div>

            <div className="flex items-center gap-6 text-muted-foreground">
              <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
              <a href="/portfolio" className="hover:text-primary transition-colors">Portfólio</a>
              <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
              <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
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
