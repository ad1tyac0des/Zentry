import { useRef, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Navbar = ({ controls }) => {
  const { isAudioPlaying, setIsAudioPlaying, isIndicatorActive, setIsIndicatorActive } = controls;
  
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  const fadeInAudio = () => {
    const audio = audioElementRef.current;
    if (!audio) return;

    // clear existing fade interval (if any)
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    // play the audio --> but first ensure that volume is set to 0
    audio.volume = 0;
    audio.play();

    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume < 0.99) {
        audio.volume = Math.min(audio.volume + 0.1, 1);
      } else {
        audio.volume = 1;
        // after volume reached its max --> stop the fadeInterval and then reset its value
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
      }
    }, 50);
  };

  const fadeOutAudio = () => {
    const audio = audioElementRef.current;
    if (!audio) return;

    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume > 0.01) {
        audio.volume = Math.max(audio.volume - 0.1, 0);
      } else {
        // pause the audio --> but first ensure that audio is set to 0
        audio.volume = 0;
        audio.pause();
        // after audio is paused --> stop the fadeInterval and then reset its value
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
      }
    }, 50);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      fadeInAudio();
    } else {
      fadeOutAudio();
    }

    // Ensure that fade interval is cleared when component unmounts
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
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
              id="audio-button"
              className="ml-8 flex items-center space-x-1 px-2 py-3"
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
