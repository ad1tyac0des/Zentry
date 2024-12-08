import { useRef } from "react";

const LinkGroup = ({ title, items }) => {
  return (
    <div className={`${title === "Resources" ? "max-[900px]:hidden" : ""}`}>
      <p className="font-general text-sm md:text-[12px] text-black uppercase mb-7">
        {title}
      </p>
      {items.map(({ name, link, active = true }) => (
        <a
          key={name}
          href={link}
          className={`block text-[1.8rem] ${active ? "text-black" : "text-black/40"
            } font-circular-web leading-none py-2 hover:text-black/60 transition-colors duration-300`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {name}
        </a>
      ))}
    </div>
  );
};

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

  const exploreItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Prologue",
      link: "#prologue",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const productItems = [
    {
      name: "Radiant",
      link: "#radiant",
      active: false,
    },
    {
      name: "Nexus",
      link: "https://nexus.zentry.com/",
    },
    {
      name: "Zigma",
      link: "#radiant",
      active: false,
    },
    {
      name: "Azul",
      link: "#azul",
      active: false,
    },
  ];

  const resourceItems = [
    {
      name: "Media Kit",
      link: "https://drive.google.com/drive/folders/1ktrz4hN66qlIxIY3wx-gGGglV0cD58q0",
    },
  ];

  const followItems = [
    {
      name: "Discord",
      link: "https://discord.gg/zentry",
    },
    {
      name: "X",
      link: "https://x.com/zentry",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@ZentryHQ",
    },
    {
      name: "Medium",
      link: "https://medium.com/@zentry",
    },
  ];

  return (
    <footer className="h-auto lg:min-h-screen bg-violet-300">
      <div
        className="relative w-full flex flex-col items-center overflow-hidden"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h1
          ref={textRef}
          className="animated-text h-fit font-zentry special-font py-10 md:py-5 leading-[.9] text-[8rem] md:text-[16rem] lg:text-[24rem] xl:text-[30rem] 2xl:text-[36rem] min-[1800px]:text-[43rem] text-[#000] will-change-transform transition-transform duration-700 ease-out"
        >
          Zentr<b>y</b>
        </h1>

        <div className="w-full px-10 py-20 lg:py-44">
          <div className="w-[94%] flex flex-wrap gap-10 justify-between">
            <div className="w-full md:w-auto">
              <img
                src="img/logoBlack.png"
                className="scale-[1] md:scale-[.9]"
              />
            </div>

            {[
              ["Explore", exploreItems],
              ["Products", productItems],
              ["Follow Us", followItems],
              ["Resources", resourceItems],
            ].map(([title, items]) => (
              <LinkGroup key={title} title={title} items={items} />
            ))}
          </div>
        </div>

        <div className="w-full flex justify-between items-center font-general px-4 py-4 md:px-10 md:py-6">
            <p className="uppercase text-[0.7rem] md:text-[12px]">&copy;Zentry 2024. All rights reserved</p>
            <a
              className="uppercase text-[0.7rem] md:text-[12px]"
              href="https://zentry.com/legal/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              Privacy Policy
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
