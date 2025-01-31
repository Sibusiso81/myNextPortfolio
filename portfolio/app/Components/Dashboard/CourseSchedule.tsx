import { GraduationCap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const courses = [
  { name: "Advanced HRM Strategies", time: "Mon, Wed 10:00 AM" },
  { name: "Organizational Behavior", time: "Tue, Thu 2:00 PM" },
  { name: "Business Ethics", time: "Fri 1:00 PM" },
]

export function CourseSchedule() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Course Schedule</CardTitle>
        <GraduationCap className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {courses.map((course, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="font-medium">{course.name}</span>
              <span className="text-sm text-muted-foreground">{course.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}