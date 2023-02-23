import { useEffect, useState } from "react";
import "./styles.css";
import data from "./url.json";

const count = data.videoURLs.length

export default function App() {
  const [frameURL, setFrameURL] = useState("");

  useEffect(() => {
    shuffle();
  }, []);

  const shuffle = () => {
    const r = Math.round(Math.random() * count);
    setFrameURL(data.videoURLs.find((a, i) => i === r) || "");
  };

  return (
    <div className="App">
      <button onClick={shuffle}>SHUFFLE</button>
      <iframe src={frameURL} title="random highlight" />
    </div>
  );
}
