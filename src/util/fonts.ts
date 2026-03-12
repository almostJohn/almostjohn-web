import { JetBrains_Mono, PT_Serif } from "next/font/google";

export const jetBrainsMono = JetBrains_Mono({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
});

export const ptSerif = PT_Serif({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-pt-serif",
	weight: ["400", "700"],
});
