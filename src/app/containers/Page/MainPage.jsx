"use client";
import React, { useEffect, useRef, useState } from "react";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";

export default function MainPage() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            const startAudio = async () => {
                try {
                    if (audioRef.current) {
                        await audioRef.current.play();
                    }
                } catch (error) {
                    console.error("Failed to play audio:", error);
                }
            };

            startAudio();
        }
    }, [isPlaying]);

    const handleInteraction = () => {
        setIsPlaying(true);
        window.removeEventListener("click", handleInteraction);
        window.removeEventListener("touchstart", handleInteraction);
        window.removeEventListener("scroll", handleInteraction);
    };

    useEffect(() => {
        window.addEventListener("click", handleInteraction);
        window.addEventListener("touchstart", handleInteraction);
        window.removeEventListener("scroll", handleInteraction);

        return () => {
            window.removeEventListener("click", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
            window.removeEventListener("scroll", handleInteraction);
        };
    }, []);

    return (
        <div className="fade-in w-[80%] p-4 md:p-10 lg:p-16">
            <div className="w-full flex flex-col  gap-4  md:gap-10 lg:gap-16">
                <div className="text-center text-[2rem] font-2xl font-bold uppercase">
                    memory of us
                </div>
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
            <audio
                ref={audioRef}
                src="/music/HYBS-RideOfficialAudio.mp3"
                loop
            />
        </div>
    );
}
