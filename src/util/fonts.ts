import { Inter, Sanchez } from "next/font/google";

export const inter = Inter({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-inter",
});

export const sanchez = Sanchez({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-sanchez",
	weight: ["400"],
});
