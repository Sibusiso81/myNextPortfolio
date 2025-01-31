import { BookOpenText } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuoteWidgetProps {
  quote: {
    author: string
    quote: string
  }
}

export function QuoteWidget({ quote }: QuoteWidgetProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Daily Quote</CardTitle>
        <BookOpenText className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{quote.quote}</p>
        <p className="text-xs font-medium mt-2">- {quote.author}</p>
      </CardContent>
    </Card>
  )
}

