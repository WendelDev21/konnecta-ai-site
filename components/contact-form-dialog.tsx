"use client"

import type React from "react"
import { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const WEBHOOK_URL = "https://n8n.konnectaai.com.br/webhook/contato"

interface ContactFormDialogProps {
  children: React.ReactNode
}

export function ContactFormDialog({ children }: ContactFormDialogProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ nome: "", contato: "", descricao: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.nome.trim() || !form.contato.trim()) {
      toast.error("Preencha nome e contato para continuar.")
      return
    }

    setLoading(true)
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome.trim(),
          contato: form.contato.trim(),
          descricao: form.descricao.trim(),
          origem: "landing-page",
          enviadoEm: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error(`Erro ${response.status}`)
      }

      toast.success("Mensagem enviada! Entraremos em contato em breve.")
      setForm({ nome: "", contato: "", descricao: "" })
      setOpen(false)
    } catch (error) {
      console.log("[v0] Erro ao enviar contato:", error)
      toast.error("Não foi possível enviar. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Fale Conosco</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Deixe seus dados e retornaremos o mais rápido possível.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="nome" className="text-foreground">
              Nome
            </Label>
            <Input
              id="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="contato" className="text-foreground">
              Contato
            </Label>
            <Input
              id="contato"
              placeholder="E-mail ou telefone"
              value={form.contato}
              onChange={(e) => setForm({ ...form, contato: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="descricao" className="text-foreground">
              Descrição <span className="text-muted-foreground font-normal">(opcional)</span>
            </Label>
            <Textarea
              id="descricao"
              placeholder="Conte um pouco sobre o que você precisa..."
              rows={4}
              value={form.descricao}
              onChange={(e) => setForm({ ...form, descricao: e.target.value })}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Enviar
                <Send className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
