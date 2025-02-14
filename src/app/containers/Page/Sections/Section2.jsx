import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Section2() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        if (!emblaApi) return;

        let timer;
        if (autoPlay) {
            timer = setInterval(() => {
                if (emblaApi.canScrollNext()) {
                    emblaApi.scrollNext();
                } else {
                    emblaApi.scrollTo(0);
                }
            }, 3000);
        }

        return () => clearInterval(timer);
    }, [emblaApi, autoPlay]);

    const slides = [
        { type: "image", src: "/images/" },
        // { type: "video", src: "/videos/video_nongfa.mp4" },
        { type: "video", src: "/videos/video_nongfa.mp4" },
    ];

    const classImag = "w-full h-auto rounded-lg aspect-square object-cover";

    return (
        <div className="flex lg:flex-row md:flex-col flex-col-reverse gap-4">
            <div className="flex-none w-[300px]">
                <div
                    className="embla"
                    ref={emblaRef}
                >
                    <div className="embla__container">
                        <div className="embla__slide">
                            <img
                                src="/images/sec2.webp"
                                alt="Sample 1"
                                className={classImag}
                            />
                        </div>
                        <div className="embla__slide">
                            <img
                                src="/images/sec2_1.webp"
                                alt="Sample 2"
                                className={classImag}
                            />
                        </div>
                        <div className="embla__slide">
                            <img
                                src="/images/sec2_2.webp"
                                alt="Sample 3"
                                className={classImag}
                            />
                        </div>
                        <div className="embla__slide">
                            <img
                                src="/images/sec2_3.webp"
                                alt="Sample 4"
                                className={classImag}
                            />
                        </div>
                        <div className="embla__slide">
                            <img
                                src="/images/sec2_4.webp"
                                alt="Sample 5"
                                className={classImag}
                            />
                        </div>
                        <div className="embla__slide">
                            <img
                                src="/images/sec2_5.webp"
                                alt="Sample 6"
                                className={classImag}
                            />
                        </div>
                        <div className="embla__slide">
                            <img
                                src="/images/sec2_6.webp"
                                alt="Sample 7"
                                className={classImag}
                            />
                        </div>
                        <div className="embla__slide">
                            <img
                                src="/images/sec2_7.webp"
                                alt="Sample 8"
                                className={classImag}
                            />
                        </div>
                        <div className="embla__slide">
                            <img
                                src="/images/sec2_8.webp"
                                alt="Sample 9"
                                className={classImag}
                            />
                        </div>
                        <div className="embla__slide">
                            <img
                                src="/images/sec2_9.webp"
                                alt="Sample 10"
                                className={classImag}
                            />
                        </div>
                        <div className="embla__slide">
                            <img
                                src="/images/sec2_10.webp"
                                alt="Sample 11"
                                className={classImag}
                            />
                        </div>
                        <div className="embla__slide">
                            <img
                                src="/images/sec2_11.webp"
                                alt="Sample 12"
                                className={classImag}
                            />
                        </div>
                        <div className="embla__slide">
                            <img
                                src="/images/sec2_12.webp"
                                alt="Sample 13"
                                className={classImag}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full p-4">
                ทริปที่เราไปด้วยกัน ที่เราเก็บไว้ในความทรงจำ
                <br />
                <br />
                ตลอดเวลาที่คบกันมาพี่มีความสุขมาก ๆ ที่เราได้ไปเที่ยวกันหลาย
                ๆที่ มีความทรงจำมากมาย ได้ร่วมเหนื่อย
                และพร้อมเอ็นจอยไปด้วยกันตลอด และพี่สัญญาว่าจะพาหนูไปเทึ่ยว
                ได้ดูวิวที่สวยงามไปด้วยกันอีกหลายที่
                <br />
                <br />
                ไปเก็บความทรงจำร่วมกันเยอะๆเลย :D
            </div>
        </div>
    );
}
