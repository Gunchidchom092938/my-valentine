import React from "react";

export default function Section1() {
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 w-full p-4">
                คลิปนี้เป็นวันแรกเลยนะ ที่พี่รู้สึกว่า "โอ้ะ
                ฉันอยากทำให้เธอคนนี้เอ็นจอยไปแบบนี้ทุกวันจัง"
                ในวันนั้นพี่ดีใจนะที่คิดอยากให้หนูมาดูคอนด้วยกัน
                อย่างน้อยก็อาจจะช่วยให้คลายทุกข์ที่หนูมีได้ 5555
                ก็นะ...ตามที่หวังเหมือนในคลิปเลย :P
                <br />
                <br />
                หลังจากวันนั้นพี่ก็เริ่มต้นอยากจีบหนูแบบจริงจังเลยแหละ
                อยากจะให้หนูมาอยู่ในชีวิตพี่ไว ๆ
                เพราะพี่เองก็อยากที่จะมีึความทรงจำดีๆกับหนู อยากทำให้มีความสุข
                ไม่เหมือนที่หนูเจอมา
            </div>
            <div className="flex-none">
                <video
                    src="/videos/video_nongfa.mp4"
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-[300px] h-auto rounded-lg"
                />
            </div>
        </div>
    );
}
