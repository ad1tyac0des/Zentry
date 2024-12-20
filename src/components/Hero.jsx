import { useState, useRef, useEffect } from "react";
import Button from "./Button";

import { TiLocationArrow } from "react-icons/ti";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    /* https://rentry.co/ht3e7st4 */
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);
    };

    useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
    }, [loadedVideos]);

    // Handle Video Click Animation on Hero Page
    useGSAP(
        () => {
            if (hasClicked) {
                gsap.set("#next-video", { visibility: "visible" });

                gsap.to("#next-video", {
                    transformOrigin: "center center",
                    scale: 1,
                    width: "100%",
                    height: "100%",
                    duration: 1,
                    ease: "power1.inOut",
                    onStart: () => nextVideoRef.current.play(),
                });

                gsap.from("#current-video", {
                    transformOrigin: "center center",
                    scale: 0,
                    duration: 1.5,
                    ease: "power1.inOut",
                });
            }
        },
        {
            dependencies: [currentIndex],
            revertOnUpdate: true,
        }
    );

    // Handle Video Clip Animation on Scroll
    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0%, 74% 0%, 90% 90%, -3% 100%)",
            borderRadius: "0% 0% 39% 0%",
        });

        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                // markers: true,
                scrub: true,
            },
        });
    });

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    return (
        <div id="home" className="relative h-screen w-screen overflow-x-hidden">
            {/* Preloader Animation */}
            {isLoading && (
                <div className="flex-center absolute z-[100] h-screen w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                    </div>
                </div>
            )}

            <div
                id="video-frame"
                className="relative z-10 h-screen w-screen overflow-hidden rounded-lg bg-blue-75"
            >
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div
                            onClick={handleMiniVdClick}
                            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                        >
                            <video
                                loop
                                muted
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center"
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                onCanPlayThrough={handleVideoLoad}
                            />
                        </div>
                    </div>

                    <video
                        loop
                        muted
                        id="next-video"
                        className="absolute-center invisible absolute z-20 size-64 object-cover object-center rounded-lg"
                        onCanPlayThrough={handleVideoLoad}
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                    />

                    <video
                        autoPlay
                        loop
                        muted
                        src={getVideoSrc(
                            currentIndex === totalVideos - 1 ? 1 : currentIndex
                        )}
                        className="absolute top-0 left-0 size-full object-cover object-center"
                        onCanPlayThrough={handleVideoLoad}
                    />
                </div>

                <h1 className="hero-heading special-font z-40 absolute bottom-5 right-5 text-blue-75">
                    G<b>a</b>ming
                </h1>

                <div className="absolute top-0 left-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="hero-heading special-font text-blue-100">
                            Redefi<b>n</b>e
                        </h1>

                        <p className="mb-5 max-w-64 font-robert-regular text-blue-100 leading-tight">
                            Enter the Metagame
                            <br />
                            Unleash the Play Economy
                        </p>

                        <Button
                            id="watch-trailer"
                            title="Watch Trailer"
                            leftIcon={<TiLocationArrow />}
                            containerClass="!bg-yellow-300 flex-center gap-2"
                        />
                    </div>
                </div>
            </div>

            <h1 className="hero-heading special-font absolute bottom-5 right-5 text-black">
                G<b>a</b>ming
            </h1>
        </div>
    );
};

export default Hero;
