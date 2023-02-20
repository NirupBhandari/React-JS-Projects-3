import React, { useState, useEffect } from "react";
import "./DateTimeCard.css";
export default function DateTimeCard() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="card">
      <h1>{dateTime.toLocaleDateString()}</h1>
      <h2>{dateTime.toLocaleTimeString()}</h2>
    </div>
  );
}
