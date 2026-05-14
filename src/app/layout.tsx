import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { cn } from "@/util/cn";
import { inter } from "@/util/fonts";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	applicationName: siteConfig.name,

	appleWebApp: {
		title: siteConfig.name,
	},

	metadataBase: new URL(siteConfig.url),

	keywords: [
		"personal-website",
		"almostjohn",
		"john gale garcia",
		"full stack web dev",
	],
	authors: [{ name: siteConfig.creator, url: siteConfig.url }],

	openGraph: {
		siteName: siteConfig.name,
		type: "website",
		title: siteConfig.title,
		description: siteConfig.description,
	},

	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
		creator: siteConfig.creator,
	},

	creator: siteConfig.creator,
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"bg-neutral-100 text-neutral-900 antialiased",
					inter.className,
				)}
			>
				<SiteHeader />
				{children}
				<SiteFooter />
			</body>
		</html>
	);
}
