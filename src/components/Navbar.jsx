import { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
        audioElementRef.current.play();
    } else {
        audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="w-full absolute top-1/2 -translate-y-1/2">
        <nav className="size-full flex items-center justify-between p-4">
          <div className="nav-left flex items-center gap-7">
            <img src="img/logo.png" alt="logo" className="w-10" />

            <Button
              id="product-button"
              title="Products"
              rightIcon={
                <TiLocationArrow style={{ transform: "rotate(135deg)" }} />
              }
              containerClass="bg-blue-50 hidden md:flex-center gap-2"
            />
          </div>

          <div className="nav-right h-full flex items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  className="nav-hover-btn"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="ml-8 flex items-center space-x-0.5 px-2 py-3"
              onClick={toggleAudioIndicator}
            >
              <audio ref={audioElementRef} className="hidden" src="audio/music_main.mp3" loop />
                {[1, 2, 3, 4].map((musicBar) => (
                  <div
                    key={musicBar}
                    className={`indicator-line ${
                      isIndicatorActive ? "active" : ""
                    }`}
                    style={{
                        "--animation-order": musicBar*2
                    }}
                  />
                ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
