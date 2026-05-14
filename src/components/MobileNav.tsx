"use client";

import { cn } from "@/util/cn";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icons } from "./Icons";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerTitle,
	DrawerTrigger,
} from "./ui/Drawer";

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

export function MobileNav() {
	const pathname = usePathname();
	const [interacted, setInteracted] = useState(false);

	return (
		<Drawer open={interacted} onOpenChange={setInteracted}>
			<DrawerTrigger asChild>
				<button className="inline-flex size-9 shrink-0 cursor-pointer items-center justify-center p-2 transition-colors hover:text-sky-500 md:hidden">
					<Icons.Menu className="size-6 shrink-0" />
				</button>
			</DrawerTrigger>
			<DrawerContent className="border-none bg-neutral-100 p-0 text-neutral-900 shadow-xl">
				<VisuallyHidden>
					<DrawerTitle>Hidden Title</DrawerTitle>
					<DrawerDescription>Hidden Description</DrawerDescription>
				</VisuallyHidden>
				<div className="p-8">
					<nav className="flex flex-col items-center justify-center gap-2">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"inline-flex h-10 items-center justify-center px-4 py-2 text-lg font-medium whitespace-nowrap transition-colors",
									pathname === item.href
										? "text-sky-500 underline underline-offset-2"
										: "underline-offset-2 hover:text-sky-500 hover:underline",
								)}
								onClick={() => setInteracted(false)}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
