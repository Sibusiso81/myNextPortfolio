/* import { QuoteWidget } from "@/app/Components/Dashboard/QoteWidget";
import { WeatherWidget } from "@/app/Components/Dashboard/WeatherWidget"; */

export async function getWeather() {
    const { NEXT_WEATHER_API_KEY } = process.env;
    const response =
      await fetch(`http://api.weatherapi.com/v1/current.json?key=${NEXT_WEATHER_API_KEY}&q=Johannesburg
      // 
      //&aqi=no`);
    const weatherData = await response.json();
    console.log(weatherData);
  
    return weatherData;
  }

getWeather();
export const getNews = async ()=>{
  const NEXT_NEWS_API_KEY = process.env.NEXT_NEWS_API_KEY

  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${NEXT_NEWS_API_KEY}
`
try {
  if(!NEXT_NEWS_API_KEY){
    throw new Error('No api key provided')
  }
  const response = await fetch(url)
  const news = response.json()
  return news
  console.log(news)
} catch (error) {
  console.log(error)
}

}
getNews()
export const getMotivationalQuote = async () => {
  const url = 'https://api.api-ninjas.com/v1/quotes';
  const NEXT_QUOTE_API_KEY = process.env.NEXT_QUOTE_API_KEY;

  try {
    if (!NEXT_QUOTE_API_KEY) {
      throw new Error('NEXT_QUOTE_API_KEY is not defined');
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key':'jfCf0OOz9rXCGk2KK/jreA==zsU8DERfjeMDNtSN'
        ,
        'Content-Type': 'application/json'
      }
    });


    const quote = await response.json();
  
    console.log(quote[0].quote);
    
    return quote;
  } catch (error) {
    console.log('Fetch error:', error);
  }
};

getMotivationalQuote();
