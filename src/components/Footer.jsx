import { useRef } from "react";

const Footer = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const text = textRef.current;
    const container = containerRef.current;

    if (!text || !container) return;

    const { width, left } = container.getBoundingClientRect();
    const centerX = width / 2;

    const mouseX = e.clientX - left;
    const relativeX = (mouseX - centerX) / centerX;

    let matrix;

    if (Math.abs(relativeX) < 0.1) {
      // at Center
      matrix = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";
    } else if (relativeX > 0) {
      // at Right
      const intensity = Math.min(Math.abs(relativeX), 1);
      matrix = `matrix3d(
                ${0.912144 + (1 - 0.912144) * (1 - intensity)}, 
                ${-0.221361 * intensity}, 
                0, 
                ${0.0011759 * intensity}, 
                ${0.266799 * intensity}, 
                ${0.327775 + (1 - 0.327775) * (1 - intensity)}, 
                0, 
                ${-0.0004667 * intensity}, 
                0, 0, 1, 0, 
                ${334.04 * intensity}, 
                ${-143.073 * intensity}, 
                0, 1)`;
    } else {
      // at Left
      const intensity = Math.min(Math.abs(relativeX), 1);
      matrix = `matrix3d(
                ${0.956236 + (1 - 0.956236) * (1 - intensity)}, 
                ${0.232741 * intensity}, 
                0, 
                ${-0.0012364 * intensity}, 
                ${-0.1329 * intensity}, 
                ${0.293217 + (1 - 0.293217) * (1 - intensity)}, 
                0, 
                ${-0.0002324 * intensity}, 
                0, 0, 1, 0, 
                ${-378.999 * intensity}, 
                ${-141.278 * intensity}, 
                0, 1)`;
    }

    text.style.transform = matrix;
  };

  const handleMouseLeave = () => {
    const text = textRef.current;

    if (!text) return;

    text.style.transform =
      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";
  };

  return (
    <footer className="min-h-screen bg-violet-300">
      <div
        className="relative w-full h-screen flex justify-center overflow-hidden"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h1
          ref={textRef}
          className="animated-text h-fit font-zentry special-font leading-[.9] text-[8rem] md:text-[16rem] lg:text-[24rem] xl:text-[30rem] 2xl:text-[36rem] min-[1800px]:text-[43rem] text-[#000] will-change-transform transition-transform duration-700 ease-out"
        >
          Zentr<b>y</b>
        </h1>

        
      </div>
    </footer>
  );
};

export default Footer;
