import { Nunito } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";
import { Outfit } from "next/font/google";
import { Gabarito } from "next/font/google";

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