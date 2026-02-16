import { tool } from "ai";
import { z } from "zod";
import { normalizeF1, normalizeStock, normalizeWeather } from "./utils";

export const getWeather = tool({
  description: "Get the weather in a location (fahrenheit)",
  inputSchema: z.object({
    location: z.string().describe("The location to get the weather for"),
  }),
  execute: async ({ location }) => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=7&hour=0&aqi=no&alerts=no&astro=0`,
      );

      if (!res.ok) throw new Error("Failed to fetch weather data");

      const data = await res.json();

      return normalizeWeather(data);
    } catch (error) {
      console.error("Weather API Error:", error);
      return { error: "Unable to fetch weather data." };
    }
  },
});

export const getF1Matches = tool({
  description: "Get next F1 match race",
  inputSchema: z.object({}),
  execute: async () => {
    try {
      const res = await fetch(
        "https://api.jolpi.ca/ergast/f1/current/next.json",
        { cache: "no-store" },
      );

      if (!res.ok) throw new Error("Failed to fetch F1 data");

      const data = await res.json();

      const race = data?.MRData?.RaceTable?.Races?.[0];

      if (!race) {
        return { message: "No upcoming race found." };
      }

      return normalizeF1(race);
    } catch {
      return { error: "Unable to fetch F1 race data." };
    }
  },
});

export const getStockPrice = tool({
  description: "Get current stock price for a symbol",
  inputSchema: z.object({
    symbol: z.string().describe("Stock ticker symbol (e.g., AAPL)"),
  }),
  execute: async ({ symbol }) => {
    try {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_KEY}`,
      );

      if (!res.ok) throw new Error("Failed to fetch stock data");

      const data = await res.json();
      return normalizeStock(data);
    } catch (error) {
      console.error("Stock API Error:", error);
      return { error: "Unable to fetch stock data." };
    }
  },
});
