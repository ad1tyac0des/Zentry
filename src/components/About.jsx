import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                // markers: true,
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: "0",
        });
    });

    return (
        <div id="about" className="w-screen min-h-screen">
            <div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
                <h2 className="font-general uppercase text-sm md:text-[12px]">
                    Welcome to Zentry
                </h2>

                <AnimatedTitle
                    title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
                    containerClass="mt-5 !text-black text-center" 
                />

                <div className="about-subtext">
                    <p>The Game of Games begins-your life, now an epic MMORPG</p>

                    <p>Zentry unites every player from countless games and platforms</p>
                </div>
            </div>

            <div id="clip" className="h-dvh w-screen">
                <div className="mask-clip-path about-image">
                    <img
                        src="img/about.webp"
                        className="absolute top-0 left-0 size-full object-cover"
                        alt="AboutBackground"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
