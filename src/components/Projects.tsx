import { ArrowUpRight } from "lucide-react";

type Project = {
	title: string;
	description: string;
	href?: string;
	isPrivate?: boolean;
	category: "personal" | "commission";
	stack: string[];
};

const projectItems: Project[] = [
	{
		title: "servant-advertising-web",
		description:
			"An ERP system admin for servant advertising — printing, graphic design, and software tech company.",
		isPrivate: true,
		category: "commission",
		stack: ["next.js", "typescript", "postgres", "tailwindcss", "jwt"],
	},
	{
		title: "system-admin-web",
		description:
			"An ERP system admin for servant sportswear, raflynn, and x-zeal.",
		isPrivate: true,
		category: "commission",
		stack: ["next.js", "typescript", "postgres", "tailwindcss", "jwt"],
	},
	{
		title: "servantadvertising",
		description:
			"Transform your brand vision into stunning visual reality. From graphic designs to premium signage, we bring your advertising ideas to life with precision and creativity.",
		href: "https://servantadvertising.com",
		isPrivate: false,
		category: "commission",
		stack: ["next.js", "typescript", "tailwindcss"],
	},
	{
		title: "servant-projects-web",
		description:
			"A simple system made for servant advertising for managing their projects and tasks in all-in-one platform.",
		isPrivate: true,
		category: "commission",
		stack: ["next.js", "typescript", "tailwindcss", "postgres", "jwt"],
	},
	{
		title: "online-invitation-web",
		description:
			"An online invitation for birthday debut — simple, single page, and beautifully designed.",
		isPrivate: true,
		category: "commission",
		stack: ["react", "tailwindcss"],
	},
	{
		title: "tsconfig-web",
		description:
			"Generate clean, opinionated tsconfig.json setups for modern TypeScript projects.",
		href: "https://app-tsconfig.vercel.app",
		isPrivate: false,
		category: "personal",
		stack: ["next.js", "typescript", "tailwindcss"],
	},
];

export function Projects() {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-sm font-semibold text-neutral-600">Projects</h2>
			<div className="flex flex-col gap-4">
				{projectItems.map((project, index) => {
					if (!project.href) {
						return (
							<div
								key={index}
								className="flex flex-col gap-4 border-b border-neutral-300 pb-4 last:border-b-0"
							>
								<div className="flex items-center gap-2">
									<p className="text-lg font-bold tracking-tight">
										{project.title}
									</p>
									{project.isPrivate && (
										<div className="pointer-events-none inline-flex items-center justify-center border border-neutral-300 bg-neutral-200 px-2 py-0.5 text-xs font-semibold whitespace-nowrap select-none">
											private
										</div>
									)}
								</div>
								<p className="text-sm leading-relaxed text-neutral-500">
									{project.description}
								</p>
								<div className="grid gap-1">
									<span className="text-xs font-semibold text-neutral-600">
										category
									</span>
									<div className="pointer-events-none inline-flex w-fit items-center justify-center border border-neutral-300 bg-neutral-200 px-2 py-0.5 text-xs font-semibold whitespace-nowrap select-none">
										{project.category}
									</div>
								</div>
								<div className="grid gap-1">
									<span className="text-xs font-semibold text-neutral-600">
										stack
									</span>
									<div className="flex flex-wrap items-center gap-1.5">
										{project.stack.map((stack, i) => (
											<div
												key={i}
												className="pointer-events-none inline-flex items-center justify-center border border-neutral-300 bg-neutral-200 px-2 py-0.5 text-xs font-semibold whitespace-nowrap select-none"
											>
												{stack}
											</div>
										))}
									</div>
								</div>
							</div>
						);
					}

					return (
						<a
							key={index}
							href={project.href}
							className="group flex flex-col border-b border-neutral-300 pb-4 last:border-b-0"
							rel="noreferrer"
							target="_blank"
						>
							<div className="flex flex-col gap-4">
								<div className="flex items-center justify-between">
									<p className="text-lg font-bold tracking-tight">
										{project.title}
									</p>
									<ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
								</div>
								<p className="text-sm leading-relaxed text-neutral-500">
									{project.description}
								</p>
								<div className="grid gap-1">
									<span className="text-xs font-semibold text-neutral-600">
										category
									</span>
									<div className="pointer-events-none inline-flex w-fit items-center justify-center border border-neutral-300 bg-neutral-200 px-2 py-0.5 text-xs font-semibold whitespace-nowrap select-none">
										{project.category}
									</div>
								</div>
								<div className="grid gap-1">
									<span className="text-xs font-semibold text-neutral-600">
										stack
									</span>
									<div className="flex flex-wrap items-center gap-1.5">
										{project.stack.map((stack, i) => (
											<div
												key={i}
												className="pointer-events-none inline-flex items-center justify-center border border-neutral-300 bg-neutral-200 px-2 py-0.5 text-xs font-semibold whitespace-nowrap select-none"
											>
												{stack}
											</div>
										))}
									</div>
								</div>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
}
