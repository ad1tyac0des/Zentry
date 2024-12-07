import { useRef } from "react";
import gsap from "gsap";

import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const RoundedCorners = () => {
    return (
        <svg
            className="invisible absolute size-0"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="flt_tag">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="flt_tag"
                    />
                    <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                </filter>
            </defs>
        </svg>
    );
};

const Story = () => {
    const imgRef = useRef(null);
    const img = imgRef.current;

    const handleMouseMove = (e) => {
        if (!img) return;

        const { left, top, width, height } = img.getBoundingClientRect();
        const { clientX, clientY } = e;

        const relativeX = (clientX - left) / width;
        const relativeY = (clientY - top) / height;

        const tiltX = (relativeY - 0.5) * -10;
        const tiltY = (relativeX - 0.5) * 10;

        gsap.to(img, {
            transformPerspective: 500,
            rotationX: tiltX,
            rotationY: tiltY,
            duration: 0.1,
            ease: "power1.inOut",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(img, {
            rotationX: 0,
            rotationY: 0,
            ease: "power1.inOut",
        });
    };

    return (
        <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="size-full flex flex-col items-center py-10 pb-24">
                <p className="font-general uppercase text-sm md:text-[12px]">
                    The open ip universe
                </p>

                <div className="relative size-full">
                    <AnimatedTitle
                        title="The St<b>o</b>ry of <br /> a hidden real<b>m</b>"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />

                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    src="img/entrance.webp"
                                    className="object-contain"
                                    alt="entrance"
                                    ref={imgRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                />
                            </div>
                        </div>

                        <RoundedCorners />
                    </div>
                </div>

                <div className="w-full flex justify-center md:justify-end -mt-80 md:-mt-64 md:me-44">
                    <div className="w-fit h-full flex flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm font-circular-web text-violet-50 text-center md:text-left">
                            Where realms converge, lies Zentry and the boundless pillar.
                            Discover its secrets and shape your fate amidst infinite
                            opportunities.
                        </p>

                        <Button
                            id="realm-button"
                            title="Discover Prologue"
                            containerClass="mt-5"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
