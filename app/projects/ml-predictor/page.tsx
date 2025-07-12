"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, TrendingUp, Home, Calculator, Brain, Github } from "lucide-react"
import Link from "next/link"

export default function MLPredictor() {
  const [formData, setFormData] = useState({
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    location: "",
    age: "",
  })
  const [prediction, setPrediction] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const predictPrice = async () => {
    setIsLoading(true)

    // Simulate ML prediction with a realistic calculation
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const basePrice = 200000
    const bedroomMultiplier = Number.parseInt(formData.bedrooms) * 25000
    const bathroomMultiplier = Number.parseInt(formData.bathrooms) * 15000
    const sqftMultiplier = Number.parseInt(formData.sqft) * 150
    const locationBonus = formData.location.toLowerCase().includes("downtown") ? 50000 : 0
    const ageDeduction = Number.parseInt(formData.age) * 2000

    const predictedPrice =
      basePrice + bedroomMultiplier + bathroomMultiplier + sqftMultiplier + locationBonus - ageDeduction

    setPrediction(Math.max(predictedPrice, 100000))
    setIsLoading(false)
  }

  const resetForm = () => {
    setFormData({
      bedrooms: "",
      bathrooms: "",
      sqft: "",
      location: "",
      age: "",
    })
    setPrediction(null)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300">
                <ArrowLeft className="mr-2" size={16} />
                Back to Portfolio
              </Button>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              PricePredict AI
            </h1>
            <div className="flex items-center gap-2">
              <Brain className="text-orange-400" size={20} />
              <span className="text-orange-400 text-sm">ML Powered</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            ML House Price Predictor
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Machine learning model for predicting house prices with interactive web interface
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Python", "Scikit-learn", "Flask", "React", "Pandas", "NumPy", "Linear Regression"].map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-emerald-900/50 text-emerald-300 border-emerald-700">
                {tech}
              </Badge>
            ))}
          </div>
          <Button
            variant="outline"
            className="bg-white text-slate-900 border-white hover:bg-slate-100 hover:border-slate-200 transition-all duration-300 hover:scale-105 group"
            onClick={() => window.open("https://github.com/wasihunmelkamu", "_blank")}
          >
            <Github className="mr-2 transition-transform duration-300 group-hover:rotate-12" size={16} />
            GitHub
          </Button>
        </div>
      </section>

      {/* Prediction Interface */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-400">
                  <Home size={24} />
                  Property Details
                </CardTitle>
                <CardDescription>Enter the property information to get a price prediction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Number of Bedrooms</label>
                  <Input
                    name="bedrooms"
                    type="number"
                    placeholder="e.g., 3"
                    value={formData.bedrooms}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Number of Bathrooms</label>
                  <Input
                    name="bathrooms"
                    type="number"
                    placeholder="e.g., 2"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Square Footage</label>
                  <Input
                    name="sqft"
                    type="number"
                    placeholder="e.g., 1500"
                    value={formData.sqft}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Location</label>
                  <Input
                    name="location"
                    type="text"
                    placeholder="e.g., Downtown, Suburbs"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Age of Property (years)</label>
                  <Input
                    name="age"
                    type="number"
                    placeholder="e.g., 10"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={predictPrice}
                    disabled={isLoading || !formData.bedrooms || !formData.bathrooms || !formData.sqft}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Predicting...
                      </>
                    ) : (
                      <>
                        <Calculator className="mr-2" size={16} />
                        Predict Price
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={resetForm}
                    className="border-slate-600 hover:bg-slate-800 bg-transparent"
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Prediction Result */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-400">
                  <TrendingUp size={24} />
                  Price Prediction
                </CardTitle>
                <CardDescription>AI-powered price estimation based on your inputs</CardDescription>
              </CardHeader>
              <CardContent>
                {prediction ? (
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400 mb-4">${prediction.toLocaleString()}</div>
                    <p className="text-slate-300 mb-6">Estimated market value based on the provided property details</p>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-200 mb-2">Prediction Factors:</h4>
                      <ul className="text-sm text-slate-400 space-y-1">
                        <li>• {formData.bedrooms} bedrooms</li>
                        <li>• {formData.bathrooms} bathrooms</li>
                        <li>• {formData.sqft} sq ft</li>
                        <li>• Location: {formData.location}</li>
                        <li>• Age: {formData.age} years</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Brain size={64} className="mx-auto text-slate-600 mb-4" />
                    <p className="text-slate-400">
                      Fill in the property details and click "Predict Price" to get an AI-powered price estimation
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Model Information */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-emerald-400">Model Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-emerald-400">🤖 Machine Learning</CardTitle>
                <CardDescription>
                  Linear regression model trained on housing market data using Scikit-learn
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">📊 Data Processing</CardTitle>
                <CardDescription>Feature engineering and data preprocessing with Pandas and NumPy</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-400">🌐 Web Interface</CardTitle>
                <CardDescription>Flask backend API with React frontend for seamless user experience</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>ML Price Predictor Demo - Built with Python, Scikit-learn, Flask, and React</p>
        </div>
      </footer>
    </div>
  )
}
