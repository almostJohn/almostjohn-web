import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";

type Project = {
	title: string;
	href?: string;
	isPrivate?: boolean;
	description: string;
	techStack: string[];
};

const FULLSTACK = [
	"next.js",
	"react",
	"tailwindcss",
	"postgresql",
	"neon",
	"drizzle-orm",
];
const LANDING_PAGE = ["next.js", "react", "tailwindcss"];

const projects: Project[] = [
	{
		title: "tsconfig-web",
		href: "https://app-tsconfig.vercel.app",
		description:
			"Generate clean, opinionated tsconfig.json setups for modern TypeScript projects.",
		techStack: ["next.js", "react", "tailwindcss"],
	},
	{
		title: "servant-advertising-web",
		isPrivate: true,
		description:
			"System ERP Admin for servant advertising graphic and printing design shop",
		techStack: FULLSTACK,
	},
	{
		title: "app-workspace-web",
		isPrivate: true,
		description:
			"A workspace system admin app built with Next.js, TypeScript and Tailwind CSS.",
		techStack: FULLSTACK,
	},
	{
		title: "servant-projects-web",
		isPrivate: true,
		description:
			"Servant projects web system for basically tracking work progress.",
		techStack: FULLSTACK,
	},
	{
		title: "servant-ads-landing",
		href: "https://servantadvertising.com",
		description: "Servant Advertising landing page.",
		techStack: LANDING_PAGE,
	},
	{
		title: "online-invitation-web",
		isPrivate: true,
		description: "Online web invitation for birthday debut.",
		techStack: ["react", "vite", "tailwindcss"],
	},
];

export function Projects() {
	return (
		<Section
			id="projects"
			sectionTitle="projects"
			sectionDescription="take a look at some of the projects I have worked on."
		>
			<div className="flex flex-col divide-y divide-neutral-800">
				{projects.map((project) => {
					if (!project.href) {
						return (
							<div
								key={project.title}
								className="py-1.5 transition-colors hover:bg-neutral-800"
							>
								<div className="flex min-w-0 flex-col gap-1">
									<div className="flex items-center gap-2">
										<p className="text-sm font-medium underline underline-offset-4">
											{project.title}
										</p>
										<span className="pointer-events-none inline-flex items-center justify-center border border-neutral-600 bg-neutral-700 px-1.5 py-0.5 text-xs font-medium whitespace-nowrap select-none">
											Private
										</span>
									</div>
									<p className="text-sm leading-relaxed text-neutral-500">
										{project.description}
									</p>
								</div>
							</div>
						);
					}

					return (
						<a
							key={project.href}
							href={project.href}
							rel="noopener noreferrer"
							target="_blank"
							className="group flex items-center justify-between py-1.5 transition-colors hover:bg-neutral-800"
						>
							<div className="flex min-w-0 flex-col gap-1">
								<p className="text-sm font-medium underline underline-offset-4">
									{project.title}
								</p>
								<p className="text-sm leading-relaxed text-neutral-500">
									{project.description}
								</p>
							</div>
							<div className="mr-4">
								<ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
							</div>
						</a>
					);
				})}
			</div>
		</Section>
	);
}
