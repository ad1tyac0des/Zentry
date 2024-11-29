import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import About from "./components/About";
import Hero from "./components/Hero";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
};

export default App;
