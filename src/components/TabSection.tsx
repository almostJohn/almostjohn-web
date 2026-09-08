"use client";

import { cn } from "@/util/cn";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { ContactForm } from "./forms/ContactForm";

type ProjectData = {
	title: string;
	description: string;
	href?: string;
	isPrivate?: boolean;
	category: "personal" | "commission";
	techStack: string[];
};

const projects: ProjectData[] = [
	{
		title: "servant-advertising-web",
		description:
			"An ERP system admin for servant advertising — printing, graphic design, and software tech company.",
		isPrivate: true,
		category: "commission",
		techStack: ["next.js", "typescript", "postgres", "tailwindcss", "jwt"],
	},
	{
		title: "system-admin-web",
		description:
			"An ERP system admin for servant sportswear, raflynn, and x-zeal.",
		isPrivate: true,
		category: "commission",
		techStack: ["next.js", "typescript", "postgres", "tailwindcss", "jwt"],
	},
	{
		title: "servantadvertising",
		description:
			"Transform your brand vision into stunning visual reality. From graphic designs to premium signage, we bring your advertising ideas to life with precision and creativity.",
		href: "https://servantadvertising.com",
		isPrivate: false,
		category: "commission",
		techStack: ["next.js", "typescript", "tailwindcss"],
	},
	{
		title: "servant-projects-web",
		description:
			"A simple system made for servant advertising for managing their projects and tasks in all-in-one platform.",
		isPrivate: true,
		category: "commission",
		techStack: ["next.js", "typescript", "tailwindcss", "postgres", "jwt"],
	},
	{
		title: "online-invitation-web",
		description:
			"An online invitation for birthday debut — simple, single page, and beautifully designed.",
		isPrivate: true,
		category: "commission",
		techStack: ["react", "tailwindcss"],
	},
	{
		title: "tsconfig-web",
		description:
			"Generate clean, opinionated tsconfig.json setups for modern TypeScript projects.",
		href: "https://app-tsconfig.vercel.app",
		isPrivate: false,
		category: "personal",
		techStack: ["next.js", "typescript", "tailwindcss"],
	},
];

const tabs = [
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "interests",
		title: "Interests",
	},
	{
		id: "gallery",
		title: "Gallery",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

export function TabSection() {
	const [activeTab, setActiveTab] = useState(tabs[0].id);

	const categoryLabel: Record<string, string> = {
		commission: "Commission",
		personal: "Personal",
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-3">
				<div className="flex w-fit flex-col gap-1.5 overflow-hidden rounded-md bg-neutral-800 px-4 py-2">
					<span className="text-xs font-medium text-neutral-500">Projects</span>
					<p className="text-xl font-bold">{projects.length}</p>
				</div>
				<div className="flex w-fit flex-col gap-1.5 overflow-hidden rounded-md bg-neutral-800 px-4 py-2">
					<span className="text-xs font-medium text-neutral-500">
						Coding since
					</span>
					<p className="text-xl font-bold">2020</p>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-4 border-b border-neutral-800">
					{tabs.map((item) => (
						<button
							key={item.id}
							type="button"
							onClick={() => setActiveTab(item.id)}
							className={cn(
								"-mb-px inline-flex cursor-pointer items-center justify-center py-2 text-sm font-medium transition-colors",
								activeTab === item.id
									? "border-b-2 border-blue-500"
									: "text-neutral-500 hover:text-neutral-100",
							)}
						>
							{item.title}
						</button>
					))}
				</div>
				{activeTab === "projects" && (
					<div className="scrollbar-hidden flex h-72 flex-col gap-3 overflow-y-auto pr-1">
						<h2 className="text-lg font-medium tracking-tight md:text-xl">
							Things I've Made
						</h2>
						{projects.map((project, index) => (
							<a
								key={index}
								href={project.href}
								rel="noreferrer"
								target="_blank"
								className="group flex items-start justify-between gap-3 rounded-md border border-neutral-700 p-4 transition-colors hover:bg-neutral-800"
							>
								<div className="flex flex-col gap-4">
									<div className="flex min-w-0 flex-col">
										<div className="flex items-center gap-3">
											{project.isPrivate && (
												<LockKeyhole className="size-4 shrink-0 text-neutral-400" />
											)}
											<div className="flex flex-col gap-2 md:flex-row md:items-center">
												<div className="text-lg font-bold text-blue-500 group-hover:underline">
													{project.title}
												</div>
												<span className="inline-flex w-fit items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-xs font-semibold whitespace-nowrap select-none">
													{categoryLabel[project.category]}
												</span>
											</div>
										</div>
										<div className="mt-3 text-sm leading-relaxed text-pretty">
											{project.description}
										</div>
									</div>
									<div className="flex flex-col gap-1">
										<span className="text-xs font-semibold tracking-wide text-neutral-400 uppercase">
											Tech Stack
										</span>
										<div className="flex flex-wrap items-center gap-2">
											{project.techStack.map((tech) => (
												<span
													key={tech}
													className="inline-flex items-center justify-center rounded-sm border border-neutral-800 bg-neutral-700 px-2 py-0.5 text-xs font-medium whitespace-nowrap select-none"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
								<ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
							</a>
						))}
					</div>
				)}
				{activeTab === "interests" && (
					<div className="scrollbar-hidden flex h-72 flex-col gap-3 overflow-y-auto pr-1">
						<h2 className="text-lg font-medium tracking-tight md:text-xl">
							Beyond The Code
						</h2>
						<div className="flex items-center justify-center rounded-md border-2 border-dashed border-neutral-800 p-10 text-center">
							<p className="text-sm text-neutral-500">Coming Soon</p>
						</div>
					</div>
				)}
				{activeTab === "gallery" && (
					<div className="scrollbar-hidden flex h-72 flex-col gap-3 overflow-y-auto pr-1">
						<h2 className="text-lg font-medium tracking-tight md:text-xl">
							A Few Frames
						</h2>
						<div className="flex items-center justify-center rounded-md border-2 border-dashed border-neutral-800 p-10 text-center">
							<p className="text-sm text-neutral-500">Coming Soon</p>
						</div>
					</div>
				)}
				{activeTab === "contact" && (
					<div className="scrollbar-hidden flex h-72 flex-col gap-3 overflow-y-auto pr-1">
						<h2 className="text-lg font-medium tracking-tight md:text-xl">
							Say Hello
						</h2>
						<div className="w-full md:max-w-sm">
							<ContactForm />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
