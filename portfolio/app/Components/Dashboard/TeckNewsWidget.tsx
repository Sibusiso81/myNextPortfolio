'use client'
import { useEffect, useState } from "react";
import { Newspaper } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getNews } from "@/lib/data";

interface NewsItem {
  title: string;
  url: string;
}

export function TechNewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    getNews().then(data => setNews(data));
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Tech News</CardTitle>
        <Newspaper className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {/* {news.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="text-sm hover:underline">
                {item.title}
              </a>
            </li>
          ))} */}
        </ul>
      </CardContent>
    </Card>
  );
}
