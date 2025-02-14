"use client";
import React, { useEffect, useRef, useState } from "react";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";

export default function MainPage() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [visibleSections, setVisibleSections] = useState({
        section1: true,
        section2: false,
        section3: false,
    });

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

    const handleScroll = () => {
        const section1 = document.getElementById("section1");
        const section2 = document.getElementById("section2");
        const section3 = document.getElementById("section3");

        if (
            section1 &&
            window.scrollY + window.innerHeight >
                section1.offsetTop + section1.offsetHeight / 4
        ) {
            setVisibleSections((prev) => ({ ...prev, section1: true }));
        }
        if (
            section2 &&
            window.scrollY + window.innerHeight >
                section2.offsetTop + section2.offsetHeight / 4
        ) {
            setVisibleSections((prev) => ({ ...prev, section2: true }));
        }
        if (
            section3 &&
            window.scrollY + window.innerHeight >
                section3.offsetTop + section3.offsetHeight / 4
        ) {
            setVisibleSections((prev) => ({ ...prev, section3: true }));
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fade-in w-[80%] p-4 md:p-10 lg:p-16">
            <div className="w-full flex flex-col  gap-4  md:gap-10 lg:gap-16">
                <div className="text-center text-[2rem] font-2xl font-bold uppercase">
                    memory of us
                </div>
                <div
                    id="section1"
                    className={`transition-opacity duration-300  ${
                        visibleSections.section1 ? "fade-in" : "opacity-0"
                    }`}
                >
                    <Section1 />
                </div>
                <div
                    id="section2"
                    className={`transition-opacity duration-300 ${
                        visibleSections.section2 ? "fade-in" : "opacity-0"
                    }`}
                >
                    <Section2 />
                </div>
                <div
                    id="section3"
                    className={`transition-opacity duration-300 ${
                        visibleSections.section3 ? "fade-in" : "opacity-0"
                    }`}
                >
                    <Section3 />
                </div>
            </div>
            <audio
                ref={audioRef}
                src="/music/HYBS-RideOfficialAudio.mp3"
                loop
            />
        </div>
    );
}
