import { useEffect, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [clickCount, setClickCount] = useState(1);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleControls = (e) => {
    if (e.target.id !== "audio-button" && clickCount===1) {
      setIsAudioPlaying(true);
      setIsIndicatorActive(true);
    }
    setClickCount((prev) => prev+1)
  }

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    lenis.on("scroll", ({ direction, progress}) => {
      setScrollDirection(direction);
      setScrollProgress(progress);
    })
  }, []);

  return (
    <main onClick={handleControls} className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar controls={{ isAudioPlaying, setIsAudioPlaying, isIndicatorActive, setIsIndicatorActive, scrollDirection, scrollProgress }} />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
