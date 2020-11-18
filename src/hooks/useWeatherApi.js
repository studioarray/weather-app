import { useEffect, useState } from "react";
import useFetch from "use-http";

export const useWeatherApi = (coords) => {
  const { latitude, longitude } = coords;
  const [weatherData, setWeatherData] = useState();
  const { get, response } = useFetch(
    `${process.env.REACT_APP_PROXY || ""}https://www.metaweather.com`
  );

  useEffect(() => {
    if (latitude && longitude) {
      const fetchData = async () => {
        // Fetch location
        const locationList = await get(
          `/api/location/search/?lattlong=${latitude},${longitude}`
        );
        if (response.ok) {
          // Fetch weather
          const { woeid } = locationList[0];
          const weatherResponse = await get(`/api/location/${woeid}/`);
          if (response.ok) setWeatherData(weatherResponse);
        }
      };
      fetchData();
    }
  }, [get, response, latitude, longitude]);

  return weatherData;
};
