import { cn } from "@/util/cn";
import type { PropsWithChildren } from "react";

type DesktopLayoutProps = PropsWithChildren & {
	className?: string;
};

export function DesktopLayout({ className, children }: DesktopLayoutProps) {
	return (
		<div className={cn("mx-auto hidden w-full max-w-5xl md:flex", className)}>
			{children}
		</div>
	);
}
