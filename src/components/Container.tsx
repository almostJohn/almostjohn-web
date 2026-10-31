import { cn } from "@/util/cn";
import * as React from "react";

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
