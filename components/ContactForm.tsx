"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, CheckCircle, AlertCircle, Copy, ExternalLink } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("melkamuwasihun45@gmail.com")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })

        // Reset success message after 8 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 8000)
      } else {
        setSubmitStatus("error")
        setErrorMessage(result.message || "Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please try emailing me directly.")
      console.error("Contact form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="bg-slate-800/50 border-emerald-500 backdrop-blur-sm">
          <CardContent className="flex flex-col items-center justify-center p-8">
            <CheckCircle size={64} className="text-emerald-400 mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">Message Sent Successfully!</h3>
            <p className="text-slate-300 text-center mb-4">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => setSubmitStatus("idle")}
                variant="outline"
                className="border-slate-600 hover:bg-slate-800"
              >
                Send Another Message
              </Button>
              <Button
                onClick={() => window.open("https://linkedin.com/in/wasihunmelkamu", "_blank")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <ExternalLink className="mr-2" size={16} />
                Connect on LinkedIn
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl text-emerald-400">
            <Mail size={24} />
            Send Me a Message
          </CardTitle>
          <CardDescription>Let's discuss your project ideas and how we can work together</CardDescription>
        </CardHeader>
        <CardContent>
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-red-400 mt-0.5" size={20} />
                <div className="flex-1">
                  <p className="text-red-300 mb-2">{errorMessage}</p>
                  <div className="bg-red-800/30 p-3 rounded border border-red-600">
                    <p className="text-red-200 text-sm mb-2">Alternative: Email me directly</p>
                    <div className="flex items-center gap-2">
                      <code className="text-red-100 bg-red-900/50 px-2 py-1 rounded text-sm">
                        melkamuwasihun45@gmail.com
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={copyEmail}
                        className="border-red-600 text-red-300 hover:bg-red-800/50"
                      >
                        <Copy size={14} />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => window.open("mailto:melkamuwasihun45@gmail.com", "_blank")}
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        Open Email
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject *
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500"
                placeholder="Project inquiry, collaboration, etc."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 resize-none"
                placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 text-white"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending Message...
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="mr-2" size={16} />
                  Send Message
                </div>
              )}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-700">
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-3">Prefer direct contact?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <div className="flex items-center gap-2">
                  <code className="text-emerald-400 bg-slate-800 px-3 py-1 rounded text-sm">
                    melkamuwasihun45@gmail.com
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copyEmail}
                    className="border-slate-600 hover:bg-slate-800"
                  >
                    <Copy size={14} />
                  </Button>
                </div>
                <Button
                  size="sm"
                  onClick={() => window.open("mailto:melkamuwasihun45@gmail.com", "_blank")}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <Mail className="mr-2" size={14} />
                  Open Email App
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
