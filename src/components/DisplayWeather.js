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
      <TempSlider temp={temp} setTemp={setTemp} />
      <img
        src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`}
        alt={weather.weather_state_name}
      />
    </>
  );
};

const TempSlider = ({ temp, setTemp }) => {
  return (
    <input
      type="range"
      min="-10"
      max="30"
      value={temp}
      onChange={(e) => setTemp(e.target.value)}
    />
  );
};
