import { useState, useEffect } from "react";
import { useColourFromTemp } from "../hooks/useColourFromTemp";
import {
  InfoWrapper,
  AbsoluteCenter,
  WeatherImage,
  RangeSlider,
} from "./Styles";

export const DisplayWeather = ({ data }) => {
  const { title, consolidated_weather } = data;
  const weather = consolidated_weather[0];
  const [temp, setTemp] = useState(Math.round(weather.the_temp));
  const colour = useColourFromTemp(temp);

  useEffect(() => {
    setBackgroundColour(colour);
  }, [colour]);

  return (
    <>
      <InfoWrapper>
        <div>{title}</div>
        <div>{weather.weather_state_name}</div>
        <div>{temp}&#176;c</div>
      </InfoWrapper>
      <TempSlider temp={temp} setTemp={setTemp} />
      <AbsoluteCenter>
        <WeatherImage
          src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`}
          alt={weather.weather_state_name}
        />
      </AbsoluteCenter>
    </>
  );
};

const TempSlider = ({ temp, setTemp }) => (
  <RangeSlider
    type="range"
    min="-20"
    max="40"
    value={temp}
    onChange={(e) => setTemp(e.target.value)}
  />
);

const setBackgroundColour = (colour) =>
  document.documentElement.style.setProperty("--bg-colour", colour);
