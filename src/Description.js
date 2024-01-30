import React from "react";
export default function Description() {
  return (
    <div className="overview">
      <h1 id="city">New York</h1>
      <ul>
        <li>
          Last updated: <span id="date">Friday 05:00</span>
        </li>
        <li id="description">Clear</li>
      </ul>
    </div>
  );
}
