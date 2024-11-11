export interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    precipitation: string;
    weather_code: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    precipitation: number;
    weather_code: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    dew_point_2m: string;
    precipitation_probability: string;
    rain: string;
    snowfall: string;
    weather_code: string;
    visibility: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    dew_point_2m: number[];
    precipitation_probability: number[];
    rain: number[];
    snowfall: number[];
    weather_code: number[];
    visibility: number[];
  };
  daily_units: {
    time: string;
    weather_code: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    sunrise: string;
    sunset: string;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
  };
}
