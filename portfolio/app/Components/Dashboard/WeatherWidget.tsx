'use client'
import { Cloud } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
/* import { useEffect, useState } from 'react'
import { getWeather } from '@/lib/data'
import { useScroll } from 'framer-motion' */

interface WeatherWidgetProps {
  weather: {
    current: {
      temp_c: number
      condition: {
        text: string
      }
    }
  }
}

export function WeatherWidget({ weather }: WeatherWidgetProps) {
  return (
    <Card className="w-full md:w-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Weather</CardTitle>
        <Cloud className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{weather.current.temp_c}°C</div>
        <p className="text-xs text-muted-foreground">{weather.current.condition.text}</p>
      </CardContent>
    </Card>
  )
}
