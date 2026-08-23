import { cn } from "@/util/cn";
import type { PropsWithChildren } from "react";

type MobileLayoutProps = PropsWithChildren & {
	className?: string;
};

export function MobileLayout({ className, children }: MobileLayoutProps) {
	return (
		<div
			className={cn(
				"items flex w-full justify-center md:hidden lg:hidden",
				className,
			)}
		>
			{children}
		</div>
	);
}
