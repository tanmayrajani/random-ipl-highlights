import { useEffect, useState } from "react";
import "./styles.css";
import data from "./url.json";

export default function App() {
  const [frameURL, setFrameURL] = useState("");

  useEffect(() => {
    shuffle();
  }, []);

  const shuffle = () => {
    const r = Math.round(Math.random() * 717);
    setFrameURL(data.videoURLs.find((a, i) => i === r) || "");
  };

  return (
    <div className="App">
      <button onClick={shuffle}>SHUFFLE</button>
      <iframe src={frameURL} title="random highlight" />
    </div>
  );
}
