const BentoCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 size-full object-cover object-center"
            />

            <div className="relative z-10 size-full flex flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 font-robert-regular text-xs md:text-base">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">
                        Dive into the &apos;Game of Games&apos; Universe
                    </p>

                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Immerse yourself in a rich and ever-expanding ecosystem where a
                        vibrant array of products converge into an interconnected universe.
                    </p>
                </div>

                <div className="border-hsla w-full h-96 md:h-[65vh] relative mb-7 overflow-hidden rounded-md">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={
                            <>
                                radia<b>n</b>t
                            </>
                        }
                        description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                    />
                </div>

                <div className="h-[135vh] grid grid-cols-2 grid-rows-3 gap-7">
                    <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 me-16 md:me-0">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={
                                <>
                                    zig<b>m</b>a
                                </>
                            }
                            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                        />
                    </div>

                    <div className="bento-tilt_1 row-span-1 ms-24 md:col-span-1 md:ms-0">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={
                                <>
                                    n<b>e</b>xus
                                </>
                            }
                            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                        />
                    </div>

                    <div className="bento-tilt_1 me-16 md:me-0 md:col-span-1">
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title={
                                <>
                                    a<b>z</b>ul
                                </>
                            }
                            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
                        />
                    </div>

                    <div className="bento-tilt_2">
                        <div className="flex flex-col justify-between size-full bg-violet-300 p-5">
                            <h1 className="bento-title special-font max-w-64 text-black">m<b>o</b>re co<b>m</b>ing s<b>o</b>on.</h1>

                            <img src="img/logo.png" className="m-5 scale-[.8] md:scale-[1.3] self-end filter invert" />
                        </div>
                    </div>

                    <div className="bento-tilt_2">
                        <video
                            src="videos/feature-5.mp4"
                            autoPlay
                            loop
                            muted
                            className="size-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
