import useGeolocation from "react-hook-geolocation";
import { useEffect, useState } from "react";

export const WeatherApp = () => {
  const { latitude, longitude } = useGeolocation();
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    if (latitude && longitude) {
      console.log(latitude);
      console.log(longitude);
    }
  }, [latitude, longitude]);
  return weatherData ? <div>Data received</div> : <div>Loading</div>;
};
