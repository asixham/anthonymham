import { Nunito, Public_Sans } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";
import { Outfit } from "next/font/google";
import { Gabarito } from "next/font/google";
import { Zalando_Sans_Expanded } from "next/font/google";
import localFont from "next/font/local"

export const outfit = Outfit({
    subsets: ["latin"],
    weight: "400",
});

export const gabarito = Gabarito({
    subsets: ["latin"],
    weight: "400",
});


export const redHatDisplay = Red_Hat_Display({
    subsets: ["latin"],
    weight: "400",
});

export const nunitoSans = Nunito({
    subsets: ["latin"],
    weight: "400",
})

export const zalandoSansExpanded = Zalando_Sans_Expanded({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"], // all supported weights
    style: ["normal", "italic"], // allows both formats
    variable: "--font-zalando-sans-expanded", // optional, for Tailwind/CSS usage
    display: "swap",
});

export const publicSans = Public_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    variable: "--font-public-sans",
    display: "swap",
});

export const helveticaNowDisplay = localFont({
    src: [

        // 300 Light
        { path: "./fonts/HelveticaNowDisplay-Light.ttf", weight: "300", style: "normal" },
        { path: "./fonts/HelveticaNowDisplay-LightIta.ttf", weight: "300", style: "italic" },

        // 400 Regular
        { path: "./fonts/HelveticaNowDisplay-Regular.ttf", weight: "400", style: "normal" },
        { path: "./fonts/HelveticaNowDisplay-RegIta.ttf", weight: "400", style: "italic" },
        // 500 Medium
        { path: "./fonts/HelveticaNowDisplay-Medium.ttf", weight: "500", style: "normal" },
        { path: "./fonts/HelveticaNowDisplay-MedIta.ttf", weight: "500", style: "italic" },

        // 700 Bold
        { path: "./fonts/HelveticaNowDisplay-Bold.ttf", weight: "700", style: "normal" },
        { path: "./fonts/HelveticaNowDisplay-BoldIta.ttf", weight: "700", style: "italic" },

    ],
    variable: "--font-helvetica-now-display",
    display: "swap",
});