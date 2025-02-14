import React from "react";
import Image from "next/image";
import dino_cap from "../../assets/images/dino_cap.png";

export default function Loading() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col">
                <Image
                    className="rolling"
                    src={dino_cap}
                    alt="Dino Cap"
                    width={200}
                    height={200}
                />
                <div className="text-2xl font-extrabold text-center">
                    กำลังโหลด...
                </div>
            </div>
        </div>
    );
}
