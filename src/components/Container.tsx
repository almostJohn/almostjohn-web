import type * as React from "react";
import { cn } from "@/util/cn";

export function Container({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn("mx-auto flex max-w-7xl flex-col", className)}
			{...props}
		/>
	);
}
