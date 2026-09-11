"use client";

import { cn } from "@/util/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
	const pathname = usePathname();

	return (
		<nav className="mt-5 flex items-center gap-2 font-medium md:mt-0">
			<Link
				href="/"
				className={cn(
					"underline underline-offset-4 transition-colors",
					pathname === "/"
						? "text-neutral-900"
						: "text-neutral-600 hover:text-neutral-900",
				)}
				aria-label="home"
			>
				almostjohn
			</Link>
			/
			<Link
				href="/interests"
				className={cn(
					"underline underline-offset-4 transition-colors",
					pathname === "/interests"
						? "text-neutral-900"
						: "text-neutral-600 hover:text-neutral-900",
				)}
				aria-label="interests"
			>
				interests
			</Link>
			/
			<Link
				href="/gallery"
				className={cn(
					"underline underline-offset-4 transition-colors",
					pathname === "/gallery"
						? "text-neutral-900"
						: "text-neutral-600 hover:text-neutral-900",
				)}
				aria-label="gallery"
			>
				gallery
			</Link>
			/
			<Link
				href="/contact"
				className={cn(
					"underline underline-offset-4 transition-colors",
					pathname === "/contact"
						? "text-neutral-900"
						: "text-neutral-600 hover:text-neutral-900",
				)}
				aria-label="contact"
			>
				contact
			</Link>
		</nav>
	);
}
