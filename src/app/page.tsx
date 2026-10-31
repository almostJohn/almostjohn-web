import { cn } from "@/util/cn";
import { fontMono } from "@/util/fonts";
import {
	SiFacebook as FacebookIcon,
	SiGithub as GitHubIcon,
	SiX as XIcon,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
	{
		title: "tsconfig-web",
		href: "https://app-tsconfig.vercel.app/",
		disabled: false,
		description:
			"Generate clean, opinionated tsconfig.json setups for modern TypeScript projects.",
		techStack: ["nextjs", "react", "tailwindcss", "typescript"],
	},
	{
		title: "servant-advertising-web",
		href: undefined,
		disabled: true,
		description:
			"System ERP Admin for servant advertising graphic and printing design shop.",
		techStack: [
			"nextjs",
			"react",
			"tailwindcss",
			"typescript",
			"posgresql",
			"drizzle",
			"neon",
		],
	},
	{
		title: "app-workspace-web",
		href: undefined,
		disabled: true,
		description:
			"A workspace system admin app built with Next.js, TypeScript and Tailwind CSS.",
		techStack: [
			"nextjs",
			"react",
			"tailwindcss",
			"typescript",
			"posgresql",
			"drizzle",
			"neon",
		],
	},
	{
		title: "servant-projects-web",
		href: undefined,
		disabled: true,
		description:
			"Servant projects web system for basically tracking work progress.",
		techStack: [
			"nextjs",
			"react",
			"tailwindcss",
			"typescript",
			"posgresql",
			"drizzle",
			"neon",
		],
	},
	{
		title: "servant-ads-landing",
		href: "https://servantadvertising.com/",
		disabled: false,
		description: "Servant Advertising business landing page.",
		techStack: ["nextjs", "react", "tailwindcss", "typescript", "resend"],
	},
	{
		title: "online-invitation-web",
		href: undefined,
		disabled: true,
		description: "Online web invitation for birthday debut.",
		techStack: ["react", "vite", "tailwindcss", "typescript"],
	},
];

export default function HomePage() {
	return (
		<>
			{/* header */}
			<div className="mx-auto mt-6 mb-8 flex w-full max-w-xl items-center justify-between px-4 sm:px-0">
				<Link href="/" className="text-lg font-bold">
					almostjohn
				</Link>
				<div className="flex items-center justify-end gap-2">
					<a
						href="https://facebook.com/alsojohn01"
						rel="noopener noreferrer"
						target="_blank"
						className="inline-flex size-6 shrink-0 items-center justify-center p-2 transition-colors hover:bg-neutral-800"
					>
						<FacebookIcon className="size-4 shrink-0" aria-hidden />
					</a>
					<a
						href="https://twitter.com/almostJohn1"
						rel="noopener noreferrer"
						target="_blank"
						className="inline-flex size-6 shrink-0 items-center justify-center p-2 transition-colors hover:bg-neutral-800"
					>
						<XIcon className="size-4 shrink-0" aria-hidden />
					</a>
					<a
						href="https://github.com/almostJohn"
						rel="noopener noreferrer"
						target="_blank"
						className="inline-flex size-6 shrink-0 items-center justify-center p-2 transition-colors hover:bg-neutral-800"
					>
						<GitHubIcon className="size-4 shrink-0" aria-hidden />
					</a>
				</div>
			</div>
			{/* content */}
			<div className="mx-auto mt-3 flex min-h-screen max-w-xl flex-col px-4 pb-10 sm:px-0">
				<div className="mb-6 grid gap-1">
					<p className="text-3xl font-bold tracking-tight">John Gale Garcia</p>
					<p className={cn("text-sm text-neutral-500", fontMono.className)}>
						Software Engineer • Philippines
					</p>
				</div>
				<p className="mb-6 w-full text-sm leading-relaxed text-pretty text-neutral-400">
					I'm a 26 y/o software engineer based in the Philippines. I love
					building things and solving problems. I enjoy language design and web
					development. I mostly use{" "}
					<a
						href="https://nextjs.org"
						rel="noopener noreferrer"
						target="_blank"
						className="underline decoration-neutral-500 underline-offset-4 hover:decoration-white"
					>
						Next.js
					</a>
					, a framework for the web that built on-top of{" "}
					<a
						href="https://react.dev"
						rel="noopener noreferrer"
						target="_blank"
						className="underline decoration-neutral-500 underline-offset-4 hover:decoration-white"
					>
						React
					</a>
					.
				</p>
				<div className="mt-3 flex flex-col gap-1.5">
					<div className="grid gap-1">
						<p className="font-bold tracking-tight">Projects</p>
						<div className="w-full border-t border-neutral-800" />
					</div>
					<div className="flex flex-col gap-1">
						{projects.map((project) => {
							if (!project.href) {
								return (
									<div
										key={project.title}
										className="inline-flex items-center justify-between py-1 transition-colors hover:bg-neutral-800"
									>
										<div className="flex min-w-0 flex-col">
											<div className="flex items-center gap-2">
												<p className="text-sm font-medium">{project.title}</p>
												<span className="inline-flex items-center justify-center rounded-full border border-neutral-800 bg-neutral-700 px-1 text-xs font-medium whitespace-nowrap">
													private
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
									key={project.title}
									href={project.href}
									rel="nooponer noreferrer"
									className="group inline-flex items-center justify-between py-1 transition-colors hover:bg-neutral-800"
								>
									<div className="flex min-w-0 flex-col">
										<p className="text-sm font-medium">{project.title}</p>
										<p className="text-sm leading-relaxed text-neutral-500">
											{project.description}
										</p>
									</div>
									<div className="mr-3">
										<ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
									</div>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
