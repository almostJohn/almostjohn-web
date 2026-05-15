import { projectInfo } from "@/util/constants";
import { SiGithub as GitHubIcon } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";

export function TsConfigProject() {
	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
			<div className="flex flex-col rounded-md border border-neutral-200 shadow-lg">
				<div className="flex h-16 items-center justify-between rounded-t-md border-b border-neutral-200 px-6 py-4">
					<div className="flex items-center gap-2">
						{Array.from({ length: 3 }).map((_, i) => (
							<div
								key={i + 1}
								className="inline-flex size-3 shrink-0 items-center justify-center rounded-full bg-neutral-500"
							/>
						))}
					</div>
					<div className="flex items-center justify-center">
						<div className="pointer-events-none inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-200 p-2 text-xs font-medium whitespace-nowrap select-none">
							<Lock className="size-3 shrink-0" />
							<span>{projectInfo.tsConfigWeb.url.live}</span>
						</div>
					</div>
					<div className="w-14" />
				</div>
				<div className="mt-auto rounded-b-md">
					<Image
						src="/tsconfig-web-image.png"
						alt="TsConfigProjectImage"
						width={500}
						height={500}
						priority
						className="w-full rounded-b-md"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center">
				<h1 className="text-3xl font-bold underline decoration-sky-500 underline-offset-2">
					{projectInfo.tsConfigWeb.title}
				</h1>
				<p className="mt-2 text-lg font-light text-neutral-500">
					{projectInfo.tsConfigWeb.description}
				</p>
				<div className="mt-4 flex flex-wrap items-center gap-2">
					{projectInfo.tsConfigWeb.tech.map((value, i) => (
						<div
							key={i + 1}
							className="inline-flex items-center justify-center rounded-md bg-neutral-200 px-2 py-1 text-sm font-medium whitespace-nowrap"
						>
							{value}
						</div>
					))}
				</div>
				<div className="mt-4 flex items-center gap-3">
					<a
						href={projectInfo.tsConfigWeb.url.live}
						className="group inline-flex h-9 items-center justify-center gap-2 bg-neutral-900 px-4 py-2 text-base font-semibold whitespace-nowrap text-neutral-100 transition-colors hover:bg-neutral-900/80"
						rel="noreferrer"
						target="_blank"
					>
						Live{" "}
						<ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
					</a>
					<a
						href={projectInfo.tsConfigWeb.url.github}
						className="inline-flex h-9 items-center justify-center gap-2 border border-neutral-300 px-4 py-2 text-base font-semibold whitespace-nowrap transition-colors hover:bg-neutral-200"
						rel="noreferrer"
						target="_blank"
					>
						Source <GitHubIcon className="size-4 shrink-0" />
					</a>
				</div>
			</div>
		</div>
	);
}
