import React from "react";
export default function Unit(props) {
  return (
    <div className="row">
      <div className="col-6">
        <div className="clearfix weather-temperature">
          <img src={props.img} className="float-left" id="icon" />
          <span className="float-left">
            <strong id="temperature">{Math.round(props.temp - 273.15)}</strong>
            <small className="units">
              <a href="" id="celcius" className="active">
                ℃
              </a>
              |
              <a href="" id="farenheit">
                ℉
              </a>
            </small>
          </span>
        </div>
      </div>

      <div className="col-6">
        <ul>
          <li>
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind">{Math.round(props.speed * 10) / 10}</span>km/h
          </li>
        </ul>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
