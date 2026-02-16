import { z } from "zod";

export const WeatherOutputSchema = z.object({
  location: z.string().describe("City and country"),
  localTime: z.string().describe("Local time of the location"),

  current: z.object({
    tempC: z.number().describe("Current temperature in Celsius"),
    tempF: z.number().describe("Current temperature in Fahrenheit"),
    condition: z.string().describe("Weather condition text"),
    icon: z.string().describe("Weather condition icon URL"),
    feelsLikeC: z.number().describe("Feels like temperature in Celsius"),
    humidity: z.number().describe("Humidity percentage"),
    uv: z.number().describe("UV index"),
  }),

  daily: z.array(
    z.object({
      date: z.string().describe("Forecast date"),
      maxC: z.number().describe("Max temperature in Celsius"),
      minC: z.number().describe("Min temperature in Celsius"),
      maxF: z.number().describe("Max temperature in Fahrenheit"),
      minF: z.number().describe("Min temperature in Fahrenheit"),
      condition: z.string().describe("Forecast condition text"),
      icon: z.string().describe("Forecast condition icon URL"),
      rainChance: z.number().describe("Chance of rain percentage"),
    }),
  ),
});

export const F1MatchOutputSchema = z.object({
  season: z.string().describe("Season year"),
  round: z.string().describe("Round number"),
  raceName: z.string().describe("Name of the Grand Prix"),

  circuit: z.object({
    name: z.string().describe("Circuit name"),
    locality: z.string().describe("City where circuit is located"),
    country: z.string().describe("Country of the circuit"),
    lat: z.number().describe("Circuit latitude"),
    long: z.number().describe("Circuit longitude"),
  }),

  race: z.object({
    dateUTC: z.string().describe("Race date in UTC ISO format"),
    localDate: z.string().describe("Race date formatted for local timezone"),
    localTime: z.string().describe("Race time formatted for local timezone"),
  }),

  sessions: z.array(
    z.object({
      name: z.string().describe("Session name"),
      time: z.string().nullable().describe("Session datetime"),
    }),
  ),
});

export const StockPriceOutputSchema = z.object({
  symbol: z.string().describe("Stock symbol"),
  price: z.number().describe("Current stock price"),
  change: z.number().describe("Price change"),
  changePercent: z.number().describe("Price change percentage"),
  volume: z.number().describe("Trading volume"),
  previousClose: z.number().describe("Previous closing price"),
  latestTradingDay: z.string().describe("Latest trading day date"),
});

export type WeatherOutput = z.infer<typeof WeatherOutputSchema>;
export type F1MatchOutput = z.infer<typeof F1MatchOutputSchema>;
export type StockPriceOutput = z.infer<typeof StockPriceOutputSchema>;
