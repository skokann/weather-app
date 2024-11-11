import useSWR from "swr";
import { WeatherResponse } from "../types/WeatherResponse";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch weather data");
    return res.json();
  });

export default function useWeatherData() {
  const latitude = 50.3833;
  const longitude = 13.2667;
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code&hourly=temperature_2m,dew_point_2m,precipitation_probability,rain,snowfall,weather_code,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=1&models=best_match`;

  return useSWR<WeatherResponse>(apiUrl, fetcher);
}
