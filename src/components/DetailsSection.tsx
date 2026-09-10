import { cn } from "@/util/cn";
import { ArrowUpRight } from "lucide-react";
import * as React from "react";

type ItemData = {
	label: string;
	href?: string;
	icon: React.ReactNode;
};

type DetailsSectionProps = React.ComponentProps<"div"> & {
	title: string;
	items: ItemData[];
};

export function DetailsSection({
	title,
	items,
	className,
	...props
}: DetailsSectionProps) {
	return (
		<section className={cn("flex flex-col gap-2", className)} {...props}>
			<h2 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
				{title}
			</h2>
			<div className="flex flex-col gap-2">
				{items.map((item, index) => {
					if (!item.href) {
						return (
							<div key={index} className="flex items-center gap-2.5">
								<div>{item.icon}</div>
								<p className="text-sm">{item.label}</p>
							</div>
						);
					}

					return (
						<a
							key={index}
							href={item.href}
							rel="noreferrer"
							target="_blank"
							className="group flex cursor-pointer items-center justify-between gap-2.5 rounded-md border border-neutral-700 px-3 py-2 transition-all hover:scale-105 hover:bg-neutral-800"
						>
							<div className="flex flex-1 items-center">{item.icon}</div>
							<div className="flex items-center justify-center">
								<p className="text-sm text-neutral-500 transition-colors group-hover:text-neutral-100">
									{item.label}
								</p>
							</div>
							<div className="flex flex-1 justify-end">
								<ArrowUpRight className="block size-4 shrink-0 md:hidden" />
								<ArrowUpRight className="hidden size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 md:block" />
							</div>
						</a>
					);
				})}
			</div>
		</section>
	);
}
