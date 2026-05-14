"use client";

import { cn } from "@/util/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Portfolio",
		href: "/portfolio",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];

export function MainNav() {
	const pathname = usePathname();

	return (
		<nav className="hidden items-center gap-6 md:flex">
			{navItems.map((item) => (
				<Link
					href={item.href}
					key={item.href}
					className={cn(
						"text-base font-medium whitespace-nowrap transition-colors",
						pathname === item.href
							? "text-sky-500 underline underline-offset-2"
							: "underline-offset-2 hover:text-sky-500 hover:underline",
					)}
				>
					{item.label}
				</Link>
			))}
		</nav>
	);
}
