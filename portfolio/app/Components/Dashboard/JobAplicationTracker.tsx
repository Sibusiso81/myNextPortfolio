"use client"

import { useState } from "react"
import { Briefcase } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function JobApplicationTracker() {
  const [applications, setApplications] = useState([
    { company: "TechCorp", position: "Junior Developer", status: "Applied" },
    { company: "HR Solutions", position: "HR Intern", status: "Interview" },
  ])
  const [newApplication, setNewApplication] = useState({ company: "", position: "" })

  const addApplication = () => {
    if (newApplication.company && newApplication.position) {
      setApplications([...applications, { ...newApplication, status: "Applied" }])
      setNewApplication({ company: "", position: "" })
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Job Applications</CardTitle>
        <Briefcase className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <Input
            placeholder="Company"
            value={newApplication.company}
            onChange={(e) => setNewApplication({ ...newApplication, company: e.target.value })}
          />
          <Input
            placeholder="Position"
            value={newApplication.position}
            onChange={(e) => setNewApplication({ ...newApplication, position: e.target.value })}
          />
          <Button onClick={addApplication} className="w-full">Add Application</Button>
        </div>
    
        <ul className="space-y-2">
          {applications.map((app, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{app.company} - {app.position}</span>
              <span className="text-sm text-muted-foreground">{app.status}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

