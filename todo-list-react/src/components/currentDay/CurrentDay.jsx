import React from "react";
import { useState, useEffect } from "react";
import "./index.css";

const CurrentDay = () => {
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const day = getDayOfWeek();
    setCurrentDay(day);
  }, []);

  const getDayOfWeek = () => {
    const today = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = today.getDay();
    return daysOfWeek[dayIndex];
  };

  return (
    <div className="currentDay">
      <p>{currentDay}</p>
    </div>
  );
};

export default CurrentDay;
