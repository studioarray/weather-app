import useGeolocation from "react-hook-geolocation";
import { DisplayWeather } from "./DisplayWeather";
import { useWeatherApi } from "../hooks/useWeatherApi";

export const WeatherApp = () => {
  const { latitude, longitude } = useGeolocation();
  const weather = useWeatherApi({ latitude, longitude });

  return weather ? <DisplayWeather data={weather} /> : <div>Loading</div>;
};
