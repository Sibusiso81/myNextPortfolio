"use client"

import { useState } from "react"
import { Code } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const initialProjects = [
  { name: "Personal Portfolio", progress: 75 },
  { name: "HRM Dashboard", progress: 40 },
  { name: "React Native App", progress: 10 },
]

export function ProjectTracker() {
  const [projects, setProjects] = useState(initialProjects)
setProjects(initialProjects)
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Project Tracker</CardTitle>
        <Code className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{project.name}</span>
                <span className="text-sm text-muted-foreground">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

