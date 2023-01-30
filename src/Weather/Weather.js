import "./Weather.css";
import React, { useState } from "react";
function Weather() {
  const unit = "metric";
  const [input, setInput] = useState("");
  const [Datas, setDatas] = useState({});
  const apiKey = "7baf326eb291c2e30faf7873305e31b4";
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=${unit}`;
  
  const Data = async () => {
    const response = await fetch(API);
    const UserData = await response.json();
    setDatas(UserData);
  };
  console.log(Datas)
  function InputChange(event) {
    setInput(event.target.value);
  }

  function ShowItem() {
    Data();
    setInput("");
  }
  console.log(Datas)
  return (
    <>
      <div className="Inputss">
        <h2>Weather App</h2>
        <br />

        <input
          onChange={InputChange}
          placeholder="Enter City Name"
          value={input}
        ></input>
        <button onClick={ShowItem}>Search</button>
      </div>
      <div className="WeatherApp">
        <img src="Images/unnamed.png" alt="" className="WeatherIcon"></img>
        <h4 className="Weathercity">{Datas.name}</h4>
        <h6 className="WeatherTemp">
          {Datas.name && (
            <div>
              {" "}
              <p style={{ margin: "0" }}>{Datas.main.temp} °c</p>
            </div>
          )}{" "}
        </h6>
        {/* <p>{Datas.wind}</p> */}
      </div>
    </>
  );
}

export default Weather;


