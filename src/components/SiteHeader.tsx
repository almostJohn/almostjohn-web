"use client";

import { cn } from "@/util/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
	label: string;
	href: string;
};

const navItems: NavItem[] = [
	{
		label: "interests",
		href: "/interests",
	},
	{
		label: "gallery",
		href: "/gallery",
	},
	{
		label: "contact",
		href: "/contact",
	},
];

export function SiteHeader() {
	const pathname = usePathname();

	const activeNav = navItems.find((nav) => nav.href === pathname);

	return (
		<nav className="mt-5 flex items-center gap-2 font-semibold md:mt-0">
			<Link
				href="/"
				className={cn(
					"underline underline-offset-4 transition-colors",
					pathname === "/"
						? "text-neutral-900"
						: "text-neutral-500 hover:text-neutral-900",
				)}
				aria-label="home"
			>
				almostjohn
			</Link>
			{activeNav ? (
				<>
					/
					<Link
						href={activeNav.href}
						className="text-neutral-900 underline underline-offset-4 transition-colors"
						aria-label={activeNav.label}
					>
						{activeNav.label}
					</Link>
				</>
			) : (
				navItems.map((nav) => (
					<span key={nav.href} className="flex items-center gap-2">
						/
						<Link
							href={nav.href}
							className="text-neutral-500 underline underline-offset-4 transition-colors hover:text-neutral-900"
							aria-label={nav.label}
						>
							{nav.label}
						</Link>
					</span>
				))
			)}
		</nav>
	);
}
