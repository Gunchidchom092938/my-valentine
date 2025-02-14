import { Kanit } from "next/font/google";
import Favicon from "./favicon.ico";
import "./globals.css";

// Defining metadata using the Next.js metadata API
export const metadata = {
    title: "HAPPY VALENTINE'S DAY",
    description: "Happy Valentine's Day Nong Fa",
    icons: [{ rel: "icon", url: Favicon.src }],
    openGraph: {
        title: "HAPPY VALENTINE'S DAY",
        description: "Happy Valentine's Day Nong Fa",
        image: Favicon.src,
        url: "https://nong-fa-valentine's-day.com",
    },
    twitter: {
        description: "HAPPY VALENTINE'S DAY",
        image: Favicon.src,
    },
};

export const generateViewport = () => ({
    width: "device-width",
    initialScale: 1.0,
});

const kanit = Kanit({
    weight: "300",
    subsets: ["latin", "latin-ext", "thai"],
});

export default async function RootLayout({ children }) {
    return (
        <html>
            <body className={kanit.className}>{children}</body>
        </html>
    );
}
