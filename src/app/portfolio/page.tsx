import { ProjectSection } from "@/components/portfolio/ProjectSection";
import { projectInfo } from "@/util/constants";

export const metadata = {
	title: "Portfolio",
};

export default function PortfolioPage() {
	return (
		<div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-5xl flex-col px-6 py-24 sm:px-4">
			<div className="flex flex-col">
				<h1 className="text-5xl leading-tight font-bold">Portfolio</h1>
				<p className="mt-2 text-xl font-light text-neutral-500">
					Take a look at some of my projects I've worked on, and the websites
					I've made.
				</p>
				<div className="mt-10 flex flex-col gap-8">
					<ProjectSection
						projectTitle={projectInfo.voxlyWeb.title}
						projectDescription={projectInfo.voxlyWeb.description}
						projectTech={projectInfo.voxlyWeb.tech}
						projectUrl={projectInfo.voxlyWeb.url}
						projectImagePath="/voxly-web-image.png"
						projectImageAlt="VoxlyProjectImage"
						className="flex-col-reverse md:flex-row-reverse"
					/>
					<ProjectSection
						projectTitle={projectInfo.tsConfigWeb.title}
						projectDescription={projectInfo.tsConfigWeb.description}
						projectTech={projectInfo.tsConfigWeb.tech}
						projectUrl={projectInfo.tsConfigWeb.url}
						projectImagePath="/tsconfig-web-image.png"
						projectImageAlt="TsConfigProjectImage"
						className="flex-col-reverse"
					/>
				</div>
			</div>
		</div>
	);
}
