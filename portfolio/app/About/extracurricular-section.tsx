"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


const activities = [
  {
    title: "Member of Technopreneurship Center",
    subtitle: "University of Johannesburg",
    period: "March 2024 - Present",
    description:
      "Participating in innovative hackathons, applying technology to solve real-world problems including the use of AI and data analytics.",
    highlights: ["GIS & Remote Mapping Hackathon"],
  
    image: "https://i.ibb.co/F4VwpJHY/53968984837-36524434b7-o-1.jpg",
  },
  {
    title: "Recreational Runner",
    subtitle: "Standard Bank Sole to Sole 10km",
    period: "2023 - Present",
    description:
      "Completed 10km races, showcasing discipline, goal-setting and resilience, skills that translate into professional and personal growth.",
    highlights: ["Multiple 10km races completed", "Focus on continuous improvement"],
    image: "https://i.ibb.co/JXwqhfs/Screenshot-2025-02-06-214023.png",
  },
]

export default function ExtracurricularSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % activities.length)
  }
  return (
    <section className="w-full  px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-2xl font-medium text-white">Extracurricular Activities</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              className="h-8 w-8 rounded-full text-gray-400 hover:text-white"
              aria-label="Previous activity"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="h-8 w-8 rounded-full text-gray-400 hover:text-white"
              aria-label="Next activity"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="  ">
                <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
                  <div className="relative h-fit overflow-hidden rounded-lg sm:aspect-square">
                    <Image
                      src={activities[currentIndex].image  }
                      alt={activities[currentIndex].title}
                      fill
                      className={`${activities[currentIndex].title === 'Recreational Runner' ? 'object-contain' : 'object-cover'} h-fit`}
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-medium text-white">
                          {activities[currentIndex].title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400">
                        {activities[currentIndex].subtitle}
                      </p>
                      <p className="text-sm text-green-400">
                        {activities[currentIndex].period}
                      </p>
                    </div>
                    <p className="text-gray-300">
                      {activities[currentIndex].description}
                    </p>
                    <ul className="space-y-2">
                      {activities[currentIndex].highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <span className="h-1 w-1 rounded-full bg-green-400" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Activity indicators */}
          <div className="mt-4 flex justify-center gap-2">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex ? "w-6 bg-green-400" : "w-1.5 bg-gray-700"
                }`}
                aria-label={`Go to activity ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

