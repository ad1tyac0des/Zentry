import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => {
    return (
        <div className={clipClass}>
            <img src={src} />
        </div>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="my-20 min-h-96 w-screen px-10">
            <div className="relative bg-black py-24 rounded-lg text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden w-72 h-full overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        src={"img/contact-1.webp"}
                        clipClass="contact-clip-path-1"
                    />

                    <ImageClipBox
                        src={"img/contact-2.webp"}
                        clipClass="contact-clip-path-2 translate-y-60 lg:translate-y-40"
                    />
                </div>

                <div className="absolute -top-40 left-20 w-60 lg:w-80 sm:top-1/2 md:left-auto md:right-10 lg:top-20">
                    <ImageClipBox
                        src={"img/swordman-partial.webp"}
                        clipClass="absolute md:scale-125"
                    />
                    <ImageClipBox
                        src={"img/swordman.webp"}
                        clipClass="sword-man-clip-path md:scale-125"
                    />
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="font-general text-sm md:text-[12px] uppercase">
                        Join Zentry
                    </p>

                    <p className="w-full mt-10 font-zentry special-font text-5xl md:text-[6rem] leading-[0.9]">
                        Let&apos;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether
                    </p>

                    <Button
                        id="contact-button"
                        title="Contact Us"
                        containerClass="mt-10"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
