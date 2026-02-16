import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  F1MatchOutputSchema,
  StockPriceOutputSchema,
  WeatherOutputSchema,
} from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const normalizeWeather = (data: any) => {
  const normalizedData = {
    location: `${data.location.name}, ${data.location.country}`,
    localTime: data.location.localtime,

    current: {
      tempC: data.current.temp_c,
      tempF: data.current.temp_f,
      condition: data.current.condition.text,
      icon: `https:${data.current.condition.icon}`,
      feelsLikeC: data.current.feelslike_c,
      humidity: data.current.humidity,
      uv: data.current.uv,
    },

    daily: data.forecast.forecastday.map((day: any) => ({
      date: day.date,
      maxC: day.day.maxtemp_c,
      minC: day.day.mintemp_c,
      maxF: day.day.maxtemp_f,
      minF: day.day.mintemp_f,
      condition: day.day.condition.text,
      icon: `https:${day.day.condition.icon}`,
      rainChance: day.day.daily_chance_of_rain,
    })),
  };
  const parsedData = WeatherOutputSchema.parse(normalizedData);
  return parsedData;
};

export const normalizeStock = (data: any) => {
  const quote = data["Global Quote"];

  const normalizedData = {
    symbol: quote["01. symbol"],
    price: Number(quote["05. price"]),
    change: Number(quote["09. change"]),
    changePercent: Number(quote["10. change percent"].replace("%", "")),
    volume: Number(quote["06. volume"]),
    previousClose: Number(quote["08. previous close"]),
    latestTradingDay: quote["07. latest trading day"],
  };
  const parsedData = StockPriceOutputSchema.parse(normalizedData);
  return parsedData;
};

export const normalizeF1 = (race: any) => {
  const raceDateUTC = new Date(`${race.date}T${race.time}`);

  const normalizedData = {
    season: race.season,
    round: race.round,
    raceName: race.raceName,

    circuit: {
      name: race.Circuit.circuitName,
      locality: race.Circuit.Location.locality,
      country: race.Circuit.Location.country,
      lat: Number(race.Circuit.Location.lat),
      long: Number(race.Circuit.Location.long),
    },

    race: {
      dateUTC: raceDateUTC.toISOString(),
      localDate: raceDateUTC.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      localTime: raceDateUTC.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },

    sessions: [
      {
        name: "First Practice",
        time: race.FirstPractice
          ? `${race.FirstPractice.date}T${race.FirstPractice.time}`
          : null,
      },
      {
        name: "Second Practice",
        time: race.SecondPractice
          ? `${race.SecondPractice.date}T${race.SecondPractice.time}`
          : null,
      },
      {
        name: "Third Practice",
        time: race.ThirdPractice
          ? `${race.ThirdPractice.date}T${race.ThirdPractice.time}`
          : null,
      },
      {
        name: "Qualifying",
        time: race.Qualifying
          ? `${race.Qualifying.date}T${race.Qualifying.time}`
          : null,
      },
    ].filter((session) => session.time),
  };

  const parsedData = F1MatchOutputSchema.parse(normalizedData);
  return parsedData;
};
