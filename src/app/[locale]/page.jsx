"use client";
import React, { use, useEffect, useState } from "react";
import Loading from "../containers/Loading";
import Intro from "../containers/Page/Intro";
import MainPage from "../containers/Page/MainPage";

export default function Page() {
    const [isLoading, setLoading] = useState(false);
    const [isIntro, setIntro] = useState(false);
    const [isMainPage, setMainPage] = useState(false);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setIntro(true);
        }, 3000);
    }, []);
    return (
        <div className="flex flex-col items-center">
            {isLoading && <Loading />}
            {isIntro && (
                <Intro
                    setMainPage={setMainPage}
                    setIntro={setIntro}
                />
            )}
            {isMainPage && <MainPage />}
        </div>
    );
}
