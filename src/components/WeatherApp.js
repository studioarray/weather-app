import { DisplayWeather } from "./DisplayWeather";
import { useGeolocation } from "../hooks/useGeolocation";
import { useWeatherApi } from "../hooks/useWeatherApi";
import { StatusText } from "./Styles";

export const WeatherApp = () => {
  const { latitude, longitude } = useGeolocation();
  const weather = useWeatherApi({ latitude, longitude });

  return weather ? (
    <DisplayWeather data={weather} />
  ) : latitude && longitude ? (
    <StatusText>Loading weather data</StatusText>
  ) : (
    <StatusText>Fetching your location</StatusText>
  );
};
