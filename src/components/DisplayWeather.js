import { useState } from "react";

export const DisplayWeather = ({ data }) => {
  const { title, consolidated_weather } = data;
  const weather = consolidated_weather[0];
  const [temp, setTemp] = useState(Math.round(weather.the_temp));
  console.log(weather);
  return (
    <>
      <h1>{title}</h1>
      <h2>{weather.weather_state_name}</h2>
      <div>{temp}ºc</div>
    </>
  );
};
