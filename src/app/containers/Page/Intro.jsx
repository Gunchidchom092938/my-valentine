import React, { useEffect, useState } from "react";

export default function Intro({ setMainPage, setIntro }) {
    const words = [
        "สวัสดีครับ น้องฟา :)",
        "วันนี้เป็นวันพิเศษ เนาะ",
        "Happy Valentine's Day นะคะ :)",
        "พี่รักหนูมากๆนะ",
        "ทุกวันที่พี่มีหนู มันพิเศษทุกวันเลย ขอบคุณนะคะ",
        "เดี๋ยวมาลองทบทวนความทรงจำกันดูนะคะ",
    ];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        if (currentWordIndex < words.length - 1) {
            const timeout = setTimeout(() => {
                setCurrentWordIndex(currentWordIndex + 1);
            }, 5000);
            return () => clearTimeout(timeout);
        } else {
            const endTimeout = setTimeout(() => {
                setIntro(false);
                setMainPage(true);
            }, 5000);
            return () => clearTimeout(endTimeout);
        }
    }, [currentWordIndex, setIntro]);

    return (
        <div className="h-screen flex justify-center items-center p-10 md:p-4 lg:p-0">
            <div className="fade-word text-center text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold">
                {words[currentWordIndex]}
            </div>
        </div>
    );
}
