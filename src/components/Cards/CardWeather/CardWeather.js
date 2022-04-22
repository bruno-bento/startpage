import "./CardWeather.css";
import WeatherApi from "../../../service/WeatherApi";
import { useState, useEffect } from "react";

const CardWeather = () => {
  const [climate, setClimate] = useState("");
  const [climateStatus, setClimateStatus] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude, longitude } = position.coords;
        getWeather(latitude + "," + longitude);
      },
      function (error) {
        getWeather("Sao-Paulo");
      }
    );
  }, []);

  function getWeather(region){
    WeatherApi.get(`${region}?format=j1`).then((response) => {
      setClimate(response.data.current_condition[0].temp_C + "°C");
      setClimateStatus(response.data.current_condition[0].lang_pt[0].value);
      setCity(response.data.nearest_area[0].areaName[0].value);
    });
  }

  return (
    <div className="card card-weather">
      <h1>{climate}</h1>
      <p>{climateStatus}</p>
      <p>{city}</p>
    </div>
  );
};

export default CardWeather;
