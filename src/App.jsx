import { useEffect, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [clickCount, setClickCount] = useState(1);


  const handleControls = (e) => {
    if (e.target.id !== "audio-button" && clickCount===1) {
      setIsAudioPlaying(true);
      setIsIndicatorActive(true);
    }
    setClickCount((prev) => prev+1)
  }

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);

  return (
    <main onClick={handleControls} className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar controls={{ isAudioPlaying, setIsAudioPlaying, isIndicatorActive, setIsIndicatorActive }} />
      <Hero />
      <About />
    </main>
  );
};

export default App;
