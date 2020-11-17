import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [state, setState] = useState({ latitude: null, longitude: null });

  const successHandler = (position) => {
    console.log(position);
    const { latitude, longitude } = position.coords;
    setState({ latitude, longitude });
  };

  const errorHandler = (error) => console.error(error.message);

  useEffect(() => {
    console.log("getting location");
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    );
  }, []);

  return state;
};

const options = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};
