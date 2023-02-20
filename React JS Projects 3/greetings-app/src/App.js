import React, { useState, useEffect } from "react";
import "./App.css";

function Greeting() {
  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 6 && hour < 12) {
      setTimeOfDay("morning");
      setBgImage(
        "https://c4.wallpaperflare.com/wallpaper/532/857/84/5k-good-morning-mountain-hill-wallpaper-preview.jpg"
      );
    } else if (hour >= 12 && hour < 18) {
      setTimeOfDay("afternoon");
      setBgImage(
        "https://live.staticflickr.com/8632/16036204534_2088e966b3_b.jpg"
      );
    } else {
      setTimeOfDay("night");
      setBgImage(
        "https://c4.wallpaperflare.com/wallpaper/750/664/987/night-starry-stars-milky-way-wallpaper-preview.jpg"
      );
    }
  }, []);

  return (
    <div className="greeting" style={{ backgroundImage: `url(${bgImage})` }}>
      <h1>Good {timeOfDay}!</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Greeting />
    </div>
  );
}

export default App;
