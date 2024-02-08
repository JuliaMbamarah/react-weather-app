import React from "react";
export default function Description(props) {
  let dateTime = new Date(props.time * 1000);
  let hours = dateTime.getHours();
  let minutes = dateTime.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dateTime.getDay()];
  console.log(dateTime);

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="overview">
      <h1 id="city">{props.cityName}</h1>
      <ul>
        <li>
          <span id="date">
            {day} {hours}:{minutes}
          </span>
        </li>
        <li id="description">{props.description}</li>
      </ul>
    </div>
  );
}
