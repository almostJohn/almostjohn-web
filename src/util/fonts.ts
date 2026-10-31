import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";

export const fontSans = Schibsted_Grotesk({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-sans",
});

export const fontMono = JetBrains_Mono({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-mono",
});
