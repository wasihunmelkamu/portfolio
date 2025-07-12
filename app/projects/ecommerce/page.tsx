"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ShoppingCart, Star, Heart, Search, Filter, Plus, Github } from "lucide-react"
import Link from "next/link"

export default function EcommercePlatform() {
  const [cartItems, setCartItems] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
      category: "electronics",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
      category: "electronics",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 79.99,
      rating: 4.3,
      image: "/placeholder.svg?height=200&width=200",
      category: "fashion",
    },
    {
      id: 4,
      name: "Coffee Maker",
      price: 149.99,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=200",
      category: "home",
    },
  ]

  const categories = ["all", "electronics", "fashion", "home"]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = () => {
    setCartItems(cartItems + 1)
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
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                ShopHub
              </h1>
              <Button className="relative bg-emerald-600 hover:bg-emerald-700">
                <ShoppingCart size={16} />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            E-Commerce Platform Demo
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            A full-stack e-commerce solution built with React, Node.js, Express, and MongoDB
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT Auth", "Real-time Updates"].map((tech) => (
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

      {/* Search and Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
              />
            </div>
            <div className="flex gap-2">
              <Filter className="text-slate-400 mt-2" size={20} />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "border-slate-600 hover:bg-slate-800"
                  }
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-slate-800/50 border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="p-4">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 text-red-400 hover:text-red-300"
                    >
                      <Heart size={16} />
                    </Button>
                  </div>
                  <CardTitle className="text-lg text-emerald-400">{product.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-slate-600"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-400">({product.rating})</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-emerald-400">${product.price}</span>
                  </div>
                  <Button onClick={addToCart} className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="mr-2" size={16} />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-emerald-400">Platform Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-emerald-400">🛒 Shopping Cart</CardTitle>
                <CardDescription>
                  Full shopping cart functionality with add, remove, and quantity management
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">💳 Payment Integration</CardTitle>
                <CardDescription>Secure payment processing with Stripe integration</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-400">👤 User Authentication</CardTitle>
                <CardDescription>JWT-based authentication with user profiles and order history</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>E-Commerce Platform Demo - Built with React, Node.js, and Express</p>
        </div>
      </footer>
    </div>
  )
}
