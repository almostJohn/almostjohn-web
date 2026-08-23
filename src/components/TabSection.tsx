"use client";

import { cn } from "@/util/cn";
import { Globe } from "lucide-react";
import { useState } from "react";
import { ContactForm } from "./forms/ContactForm";

const projects = [
	{
		title: "servantadvertising",
		description:
			"Transform your brand vision into stunning visual reality. From graphic designs to premium signage, we bring your advertising ideas to life with precision and creativity.",
		href: "https://servantadvertising.com",
	},
	{
		title: "tsconfig-web",
		description:
			"Generate clean, opinionated tsconfig.json setups for modern TypeScript projects.",
		href: "https://app-tsconfig.vercel.app",
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

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-2">
				<div className="flex w-fit flex-col gap-1.5 overflow-hidden rounded-md bg-neutral-800 px-4 py-3">
					<span className="text-xs font-medium text-neutral-500">Projects</span>
					<p className="text-xl font-bold">{projects.length}</p>
				</div>
				<div className="flex w-fit flex-col gap-1.5 overflow-hidden rounded-md bg-neutral-800 px-4 py-3">
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
					<div className="scrollbar-hidden flex h-68 flex-col gap-3 overflow-y-auto pr-1">
						<h2 className="text-xl font-medium tracking-tight">
							Things I've Made
						</h2>
						{projects.map((project) => (
							<a
								key={project.href}
								href={project.href}
								rel="noreferrer"
								target="_blank"
								className="group flex items-center gap-3 rounded-md border border-neutral-700 p-4 transition-colors hover:bg-neutral-800"
							>
								<div className="inline-flex items-center justify-center rounded-md bg-neutral-600 p-2">
									<Globe className="size-5 shrink-0 text-neutral-300" />
								</div>
								<div className="flex min-w-0 flex-col">
									<div className="text-lg font-bold text-blue-500 group-hover:underline">
										{project.title}
									</div>
									<div className="text-sm leading-relaxed text-pretty">
										{project.description}
									</div>
								</div>
							</a>
						))}
					</div>
				)}
				{activeTab === "interests" && (
					<div className="scrollbar-hidden flex h-68 flex-col gap-3 overflow-y-auto pr-1">
						<h2 className="text-xl font-medium tracking-tight">
							Beyond The Code
						</h2>
						<div className="flex items-center justify-center rounded-md border-2 border-dashed border-neutral-800 p-10 text-center">
							<p className="text-sm text-neutral-500">Coming Soon</p>
						</div>
					</div>
				)}
				{activeTab === "gallery" && (
					<div className="scrollbar-hidden flex h-68 flex-col gap-3 overflow-y-auto pr-1">
						<h2 className="text-xl font-medium tracking-tight">A Few Frames</h2>
						<div className="flex items-center justify-center rounded-md border-2 border-dashed border-neutral-800 p-10 text-center">
							<p className="text-sm text-neutral-500">Coming Soon</p>
						</div>
					</div>
				)}
				{activeTab === "contact" && (
					<div className="scrollbar-hidden flex h-68 flex-col gap-3 overflow-y-auto pr-1">
						<h2 className="text-xl font-medium tracking-tight">Say Hello</h2>
						<div className="w-full md:max-w-sm">
							<ContactForm />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
