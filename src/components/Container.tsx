import { cn } from "@/util/cn";
import type React from "react";

export function Container({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn("mx-auto flex max-w-7xl px-6 sm:px-4", className)}
			{...props}
		/>
	);
}
