import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WeatherOutput } from "@/types";
import { MapPin, CloudRain, Droplets, Sun, Calendar } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const WeatherCard = ({
  weatherData,
}: {
  weatherData: WeatherOutput;
}) => {
  if (!weatherData) return null;

  return (
    <Card className="w-full max-w-md overflow-hidden border-t-4 border-t-primary">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-2xl font-bold tracking-tight">
            {weatherData.location}
          </CardTitle>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" />
            {weatherData.localTime.split(" ")[1]}
          </div>
        </div>
        <CardDescription className="flex items-center gap-2 font-medium text-lg">
          <img
            src={weatherData.current.icon}
            alt={weatherData.current.condition}
            className="w-8 h-8"
          />
          {weatherData.current.condition}
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-4xl font-bold">
              {weatherData.current.tempC}°C
            </span>
            <span className="text-sm text-muted-foreground">
              Feels like {weatherData.current.feelsLikeC}°C
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Droplets className="w-3 h-3" />
              <span>{weatherData.current.humidity}%</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Sun className="w-3 h-3" />
              <span>UV {weatherData.current.uv}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <Calendar className="w-3 h-3" /> 7-Day Forecast
          </h4>
          <Separator />
          <div className="grid grid-cols-1 gap-2">
            {weatherData.daily.map((day) => (
              <div
                key={day.date}
                className="flex items-center justify-between text-sm"
              >
                <span className="w-16 font-medium text-muted-foreground">
                  {new Date(day.date).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </span>
                <div className="flex items-center gap-2 flex-1">
                  <img src={day.icon} alt={day.condition} className="w-6 h-6" />
                  {/* <span className="text-xs truncate max-w-[100px]">{day.condition}</span> */}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-xs text-blue-500">
                    <CloudRain className="w-3 h-3" />
                    {day.rainChance}%
                  </div>
                  <span className="font-semibold text-right">
                    {Math.round(day.maxC)}°{" "}
                    <span className="text-muted-foreground font-normal">
                      / {Math.round(day.minC)}°
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
