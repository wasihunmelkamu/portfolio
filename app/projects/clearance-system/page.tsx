"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  Users,
  FileCheck,
  Shield,
  Search,
  Filter,
  CheckCircle,
  Clock,
  AlertTriangle,
  Github,
  ExternalLink,
  GraduationCap,
  UserCheck,
} from "lucide-react"
import Link from "next/link"

export default function ClearanceSystem() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  const students = [
    {
      id: 1,
      name: "John Doe",
      studentId: "ST001",
      department: "Computer Science",
      status: "completed",
      clearanceItems: 8,
      completedItems: 8,
    },
    {
      id: 2,
      name: "Jane Smith",
      studentId: "ST002",
      department: "Engineering",
      status: "pending",
      clearanceItems: 8,
      completedItems: 5,
    },
    {
      id: 3,
      name: "Mike Johnson",
      studentId: "ST003",
      department: "Business",
      status: "in-progress",
      clearanceItems: 8,
      completedItems: 6,
    },
  ]

  const clearanceItems = [
    { name: "Library Clearance", status: "completed", department: "Library" },
    { name: "Finance Clearance", status: "completed", department: "Finance" },
    { name: "Dormitory Clearance", status: "pending", department: "Student Affairs" },
    { name: "Laboratory Clearance", status: "completed", department: "Academic" },
    { name: "Sports Equipment", status: "in-progress", department: "Sports" },
    { name: "ID Card Return", status: "completed", department: "Registrar" },
    { name: "Thesis Submission", status: "completed", department: "Academic" },
    { name: "Exit Interview", status: "pending", department: "HR" },
  ]

  const departments = ["all", "Computer Science", "Engineering", "Business"]
  const statuses = ["all", "completed", "in-progress", "pending"]

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "all" || student.status === selectedStatus
    const matchesDepartment = selectedDepartment === "all" || student.department === selectedDepartment
    return matchesSearch && matchesStatus && matchesDepartment
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-green-400" size={20} />
      case "in-progress":
        return <Clock className="text-yellow-400" size={20} />
      default:
        return <AlertTriangle className="text-red-400" size={20} />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-900/50 text-green-300 border-green-700"
      case "in-progress":
        return "bg-yellow-900/50 text-yellow-300 border-yellow-700"
      default:
        return "bg-red-900/50 text-red-300 border-red-700"
    }
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
                ClearanceHub
              </h1>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="bg-white text-slate-900 border-white hover:bg-slate-100 hover:border-slate-200 transition-all duration-300 hover:scale-105 group"
                  onClick={() => window.open("https://github.com/wasihunmelkamu", "_blank")}
                >
                  <Github className="mr-2 transition-transform duration-300 group-hover:rotate-12" size={16} />
                  GitHub
                </Button>
                <Button
                  className="bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25 group"
                  onClick={() => window.open("https://single-center-management.vercel.app/", "_blank")}
                >
                  <ExternalLink className="mr-2 transition-transform duration-300 group-hover:rotate-12" size={16} />
                  Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Single Center Clearance System
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Comprehensive clearance management system for educational institutions with streamlined processes and
            real-time tracking
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Material-UI", "Real-time Updates"].map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-emerald-900/50 text-emerald-300 border-emerald-700">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Total Students</p>
                    <p className="text-2xl font-bold text-emerald-400">1,247</p>
                  </div>
                  <GraduationCap className="text-emerald-400" size={32} />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Completed</p>
                    <p className="text-2xl font-bold text-green-400">892</p>
                  </div>
                  <CheckCircle className="text-green-400" size={32} />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">In Progress</p>
                    <p className="text-2xl font-bold text-yellow-400">245</p>
                  </div>
                  <Clock className="text-yellow-400" size={32} />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Pending</p>
                    <p className="text-2xl font-bold text-red-400">110</p>
                  </div>
                  <AlertTriangle className="text-red-400" size={32} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <Input
                type="text"
                placeholder="Search students by name or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
              />
            </div>
            <div className="flex gap-2 items-center">
              <Filter className="text-slate-400" size={20} />
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-slate-800/50 border-slate-700 text-white rounded-md px-3 py-2"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="bg-slate-800/50 border-slate-700 text-white rounded-md px-3 py-2"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept.charAt(0).toUpperCase() + dept.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Students List */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-emerald-400">Student Clearance Status</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student) => (
              <Card
                key={student.id}
                className="bg-slate-800/50 border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-emerald-400 flex items-center gap-2">
                        <UserCheck size={20} />
                        {student.name}
                      </CardTitle>
                      <p className="text-slate-400 text-sm">ID: {student.studentId}</p>
                      <p className="text-slate-400 text-sm">{student.department}</p>
                    </div>
                    <Badge variant="secondary" className={getStatusColor(student.status)}>
                      {student.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Progress</span>
                      <span className="text-sm text-slate-400">
                        {student.completedItems}/{student.clearanceItems}
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(student.completedItems / student.clearanceItems) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {getStatusIcon(student.status)}
                      <span className="text-slate-300">
                        {student.status === "completed"
                          ? "All clearances completed"
                          : student.status === "in-progress"
                            ? "Clearance in progress"
                            : "Pending clearance items"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clearance Items Overview */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-emerald-400">Clearance Process Overview</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clearanceItems.map((item, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm text-slate-200">{item.name}</CardTitle>
                    {getStatusIcon(item.status)}
                  </div>
                  <CardDescription className="text-xs text-slate-400">{item.department}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-emerald-400">System Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-emerald-400 flex items-center gap-2">
                  <Users size={24} />
                  Multi-Role Management
                </CardTitle>
                <CardDescription>
                  Separate dashboards for students, department heads, and administrators with role-based access control
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center gap-2">
                  <FileCheck size={24} />
                  Digital Clearance
                </CardTitle>
                <CardDescription>
                  Paperless clearance process with digital signatures and automated notifications
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center gap-2">
                  <Shield size={24} />
                  Secure & Reliable
                </CardTitle>
                <CardDescription>
                  JWT authentication, data encryption, and comprehensive audit trails for security
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>Single Center Clearance System - Built with React, Node.js, and MongoDB</p>
        </div>
      </footer>
    </div>
  )
}
