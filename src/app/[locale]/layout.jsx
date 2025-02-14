import Favicon from "../favicon.ico";
import "../../css/loading-dinocap.css";
import "../../css/main.css";

export const metadata = {
    title: "HAPPY VALENTINE'S DAY",
    description: "Happy Valentine's Day Nong Fa",
    icons: [{ rel: "icon", url: Favicon.src }],
};

export default async function LocaleLayout({ children }) {
    return <div>{children}</div>;
}
