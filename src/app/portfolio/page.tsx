import { TsConfigProject } from "@/components/portfolio/TsConfigProject";
import { VoxlyProject } from "@/components/portfolio/VoxlyProject";

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
					<VoxlyProject />
					<TsConfigProject />
				</div>
			</div>
		</div>
	);
}
