import { useState, useRef } from "react";

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

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
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
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>

                    <video
                        loop
                        muted
                        id="next-video"
                        className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                        onLoadedData={handleVideoLoad}
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
                        onLoadedData={handleVideoLoad}
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
