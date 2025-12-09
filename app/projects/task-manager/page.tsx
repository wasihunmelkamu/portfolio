"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, CheckCircle, Clock, AlertCircle, Users, Calendar, Filter, Github } from "lucide-react"
import Link from "next/link"

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design Homepage",
      description: "Create wireframes and mockups for the new homepage",
      status: "in-progress",
      priority: "high",
      assignee: "John Doe",
      dueDate: "2024-01-15",
    },
    {
      id: 2,
      title: "API Integration",
      description: "Integrate payment gateway API",
      status: "completed",
      priority: "medium",
      assignee: "Jane Smith",
      dueDate: "2024-01-10",
    },
    {
      id: 3,
      title: "Database Migration",
      description: "Migrate user data to new database schema",
      status: "pending",
      priority: "high",
      assignee: "Mike Johnson",
      dueDate: "2024-01-20",
    },
  ])

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium",
    assignee: "",
    dueDate: "",
  })

  const [showAddTask, setShowAddTask] = useState(false)
  const [filter, setFilter] = useState("all")

  const addTask = () => {
    if (newTask.title.trim()) {
      const task = {
        id: tasks.length + 1,
        ...newTask,
        status: "pending",
      }
      setTasks([...tasks, task])
      setNewTask({ title: "", description: "", priority: "medium", assignee: "", dueDate: "" })
      setShowAddTask(false)
    }
  }

  const updateTaskStatus = (id: number, status: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status } : task)))
  }

  const filteredTasks = tasks.filter((task) => filter === "all" || task.status === filter)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-green-400" size={20} />
      case "in-progress":
        return <Clock className="text-yellow-400" size={20} />
      default:
        return <AlertCircle className="text-red-400" size={20} />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-900/50 text-red-300 border-red-700"
      case "medium":
        return "bg-yellow-900/50 text-yellow-300 border-yellow-700"
      default:
        return "bg-green-900/50 text-green-300 border-green-700"
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
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              TaskFlow
            </h1>
            <Button onClick={() => setShowAddTask(true)} className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="mr-2" size={16} />
              Add Task
            </Button>
            <Button
              variant="outline"
              className="bg-white text-slate-900 border-white hover:bg-slate-100 hover:border-slate-200 transition-all duration-300 hover:scale-105 group"
              onClick={() => window.open("https://github.com/wasihunmelkamu", "_blank")}
            >
              <Github className="mr-2 transition-transform duration-300 group-hover:rotate-12" size={16} />
              GitHub
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Task Management App Demo
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Collaborative task management with real-time updates using Next.js and TypeScript
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Prisma", "Real-time Sync"].map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-emerald-900/50 text-emerald-300 border-emerald-700">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="text-slate-400" size={20} />
              <span className="text-slate-300">Filter by status:</span>
            </div>
            {["all", "pending", "in-progress", "completed"].map((status) => (
              <Button
                key={status}
                variant={filter === status ? "default" : "outline"}
                onClick={() => setFilter(status)}
                className={
                  filter === status ? "bg-emerald-600 hover:bg-emerald-700" : "border-slate-600 hover:bg-slate-800 text-black"
                }
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tasks Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTasks.map((task) => (
              <Card
                key={task.id}
                className="bg-slate-800/50 border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-emerald-400 flex items-center gap-2">
                      {getStatusIcon(task.status)}
                      {task.title}
                    </CardTitle>
                    <Badge variant="secondary" className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                  </div>
                  <CardDescription>{task.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Users size={16} />
                      {task.assignee}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar size={16} />
                      Due: {task.dueDate}
                    </div>
                    <div className="flex gap-2">
                      {task.status !== "completed" && (
                        <Button
                          size="sm"
                          onClick={() =>
                            updateTaskStatus(task.id, task.status === "pending" ? "in-progress" : "completed")
                            
                          }
                          className="bg-balck hover:bg-emerald-700 "
                        >
                          {task.status === "pending" ? "Start" : "Complete"}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add Task Modal */}
      {showAddTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="bg-slate-800 border-slate-700 w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-emerald-400">Add New Task</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Task title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                className="bg-slate-700/50 border-slate-600 text-white"
              />
              <Textarea
                placeholder="Task description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                className="bg-slate-700/50 border-slate-600 text-white"
              />
              <Input
                placeholder="Assignee"
                value={newTask.assignee}
                onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
                className="bg-slate-700/50 border-slate-600 text-white"
              />
              <Input
                type="date"
                value={newTask.dueDate}
                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                className="bg-slate-700/50 border-slate-600 text-white"
              />
              <div className="flex gap-2">
                <Button onClick={addTask} className="bg-emerald-600 hover:bg-emerald-700">
                  Add Task
                </Button>
                <Button variant="outline" onClick={() => setShowAddTask(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-emerald-400">App Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-emerald-400">⚡ Real-time Updates</CardTitle>
                <CardDescription>Live synchronization across all team members using Socket.io</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">👥 Team Collaboration</CardTitle>
                <CardDescription>Assign tasks, track progress, and collaborate effectively</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-400">📊 Progress Tracking</CardTitle>
                <CardDescription>Visual progress indicators and detailed analytics</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>Task Management App Demo - Built with Next.js, TypeScript, and PostgreSQL</p>
        </div>
      </footer>
    </div>
  )
}
