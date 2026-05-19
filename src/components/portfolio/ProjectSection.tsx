import { cn } from "@/util/cn";
import { SiGithub as GitHubIcon } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";

type ProjectSectionProps = React.ComponentProps<"div"> & {
	projectTitle: string;
	projectDescription: string;
	projectTech: string[];
	projectUrl: {
		live: string;
		github?: string;
	};
	projectImagePath: string;
	projectImageAlt: string;
};

export function ProjectSection({
	projectTitle,
	projectDescription,
	projectTech,
	projectUrl,
	projectImagePath,
	projectImageAlt,
	className,
	...props
}: ProjectSectionProps) {
	return (
		<div
			className={cn(
				"flex flex-col gap-6 md:flex-row md:items-center",
				className,
			)}
			{...props}
		>
			<div className="flex flex-1 flex-col justify-center">
				<h1 className="text-3xl font-bold underline decoration-blue-600 underline-offset-2">
					{projectTitle}
				</h1>
				<p className="mt-2 text-lg font-light text-neutral-500">
					{projectDescription}
				</p>
				<div className="mt-4 flex flex-wrap items-center gap-2">
					{projectTech.map((value, i) => (
						<div
							key={i}
							className="pointer-events-none inline-flex items-center justify-center rounded-md bg-neutral-200 px-2 py-1 text-sm font-medium whitespace-nowrap select-none"
						>
							{value}
						</div>
					))}
				</div>
				<div className="mt-4 flex items-center gap-2">
					<a
						href={projectUrl.live}
						rel="noreferrer"
						target="_blank"
						className="group inline-flex h-9 items-center justify-center gap-2 bg-neutral-900 px-4 py-2 text-base font-semibold whitespace-nowrap text-neutral-100 transition-colors hover:bg-neutral-900/80"
					>
						Live{" "}
						<ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
					</a>
					{projectUrl.github && (
						<a
							href={projectUrl.github}
							rel="noreferrer"
							target="_blank"
							className="inline-flex h-9 items-center justify-center gap-2 border border-neutral-300 px-4 py-2 text-base font-semibold whitespace-nowrap transition-colors hover:bg-neutral-200"
						>
							Source <GitHubIcon className="size-4 shrink-0" />
						</a>
					)}
				</div>
			</div>
			<div className="flex flex-1 flex-col rounded-md border border-neutral-200 shadow-lg">
				<div className="flex items-center justify-center rounded-t-md border-b border-neutral-200 px-6 py-3">
					<div className="pointer-events-none inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-200 px-2 py-0.5 text-xs font-medium whitespace-nowrap select-none">
						<Lock className="size-3 shrink-0" />
						<span>{projectUrl.live}</span>
					</div>
				</div>
				<div className="relative mt-auto w-full overflow-hidden rounded-b-md">
					<Image
						src={projectImagePath}
						alt={projectImageAlt}
						priority
						width={800}
						height={450}
						sizes="(max-width: 768px) 100vw, 50vw"
						placeholder="blur"
						blurDataURL={projectImagePath}
						className="h-auto w-full rounded-b-md"
					/>
				</div>
			</div>
		</div>
	);
}
