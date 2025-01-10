import React, { useEffect, useState } from 'react';
import { Cloud, Sun, Wind, Droplets } from 'lucide-react';
import axios from 'axios';

interface WeatherData {
  temperature: number;
  windSpeed: number;
  humidity: number;
  conditions: string;
}

const fallbackWeather: WeatherData = {
  temperature: 27,
  windSpeed: 15,
  humidity: 75,
  conditions: "Partly Cloudy"
};

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData>(fallbackWeather);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        
        if (!apiKey) {
          console.warn('Weather API key not found, using fallback data');
          setWeather(fallbackWeather);
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=-19.7577&lon=63.3610&appid=${apiKey}&units=metric`
        );

        setWeather({
          temperature: Math.round(response.data.main.temp),
          windSpeed: Math.round(response.data.wind.speed * 3.6),
          humidity: response.data.main.humidity,
          conditions: response.data.weather[0].main
        });
        setLoading(false);
      } catch (err) {
        console.error('Weather fetch error:', err);
        setWeather(fallbackWeather);
        setError('Unable to fetch live weather data');
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="weather" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Current Weather</h2>
        
        <div className="relative">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl"></div>
          
          <div className="relative p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col items-center p-6 bg-white rounded-lg">
                  <Sun className="h-12 w-12 text-yellow-500 mb-4 animate-pulse-soft" />
                  <span className="text-3xl font-bold">{weather.temperature}°C</span>
                  <span className="text-gray-600 mt-2">Temperature</span>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col items-center p-6 bg-white rounded-lg">
                  <Wind className="h-12 w-12 text-blue-500 mb-4 animate-float" />
                  <span className="text-3xl font-bold">{weather.windSpeed} km/h</span>
                  <span className="text-gray-600 mt-2">Wind Speed</span>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col items-center p-6 bg-white rounded-lg">
                  <Droplets className="h-12 w-12 text-blue-400 mb-4 animate-bounce" />
                  <span className="text-3xl font-bold">{weather.humidity}%</span>
                  <span className="text-gray-600 mt-2">Humidity</span>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 to-slate-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col items-center p-6 bg-white rounded-lg">
                  <Cloud className="h-12 w-12 text-gray-400 mb-4 animate-float" />
                  <span className="text-3xl font-bold">{weather.conditions}</span>
                  <span className="text-gray-600 mt-2">Conditions</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-blue-800 glass-effect px-6 py-3 rounded-full inline-block">
                Weather information is updated every 30 minutes
                {error && <span className="text-red-600 block mt-2">{error}</span>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}