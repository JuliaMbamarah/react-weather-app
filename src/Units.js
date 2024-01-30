import React from "react";
export default function Unit() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="clearfix weather-temperature">
          <img src="" class="float-left" id="icon" />
          <span className="float-left">
            <strong id="temperature">12</strong>
            <small className="units">
              <a href="" id="celcius" class="active">
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
            Humidity: <span id="humidity">73</span>%
          </li>
          <li>
            Wind: <span id="wind">2 </span>km/h
          </li>
        </ul>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
