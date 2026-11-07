import { Hash } from "lucide-react";
import type * as React from "react";
import { cn } from "@/util/cn";

type SectionProps = React.ComponentProps<"section"> & {
	sectionTitle: string;
	sectionDescription: string;
};

export function Section({
	sectionTitle,
	sectionDescription,
	className,
	children,
	...props
}: SectionProps) {
	return (
		<section className={cn("flex flex-col gap-4", className)} {...props}>
			<div className="flex min-w-0 flex-col gap-2">
				<div className="group pointer-events-none flex w-fit cursor-pointer items-center gap-2 select-none">
					<Hash className="size-5 shrink-0 text-neutral-400" />
					<h3 className="leading-tight underline underline-offset-4">
						{sectionTitle}
					</h3>
				</div>
				<p className="w-full text-sm leading-relaxed text-pretty">
					{sectionDescription}
				</p>
			</div>
			{children}
		</section>
	);
}
