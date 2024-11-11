"use client";
import Image from "next/image";
import useSWR from "swr";
import lightning from "../app/img/lightning.svg";
import useWeatherData from "./hooks/useWeatherData";
import useCityData from "./hooks/useCityData";
import { LoadingContainer } from "./components/LoadingContainer";

export default function Home() {
  const {
    data: weatherData,
    error: weatherError,
    isLoading: weatherLoading,
  } = useWeatherData();
  const {
    data: cityData,
    error: cityError,
    isLoading: cityLoading,
  } = useCityData();

  console.log(weatherData);
  return (
    <LoadingContainer loading={weatherLoading || cityLoading}>
      <div className="flex flex-col items-center justify-items-center min-h-screen w-full h-screen py-14 px-14 text-black">
        <div className="w-2/3 h-full bg-[#F5F5F5] px-28 rounded-3xl pt-10">
          <div className="w-full flex flex-row gap-2 justify-center items-center">
            <Image alt="lightning" src={lightning} />
            <h1 className="font-normal text-xl font-montserrat ">
              Meteo
              <span className="font-semibold">React</span>
            </h1>
            <input
              className="bg-[#E8EAF6] rounded-lg h-9 w-64 pl-3 ml-auto
            "
              type="text"
              placeholder="Search for cities"
            />
            <div className="flex flex-row gap-3">
              <span>°F</span>
              <span>°C</span>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="pt-20 text-2xl"></p>
            <div className="flex font-semibold flex-row gap-4">
              <div className="text-2xl w-full  flex flex-row gap-5">
                {" "}
                {weatherData?.daily.weather_code.map((temperature, index) => (
                  <p key={index}>{temperature}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-52 rounded-3xl px-6 py-2 mt-10  bg-[#DADFF9]">
            <h1 className="font-medium text-lg py-2">Today Forecast</h1>
            <div className="flex flex-row gap-5 w-full justify-around">
              {weatherData?.daily.time.map((day, index) => (
                <div
                  key={index}
                  className="w-[80px] h-[130px] flex flex-col justify-center  rounded-md bg-white"
                >
                  <p>{day}</p>
                  <div className="flex flex-col items-center">
                    <p>Min: {weatherData?.daily.temperature_2m_min[index]}</p>
                    <p>Max: {weatherData?.daily.temperature_2m_max[index]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LoadingContainer>
  );
}
