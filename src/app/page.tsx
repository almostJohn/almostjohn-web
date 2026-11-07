import { Intro } from "@/components/Intro";
import { Links } from "@/components/Links";
import { Projects } from "@/components/Projects";

export default function HomePage() {
	return (
		<div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:py-6">
			<div className="flex flex-col gap-8">
				<Intro />
				<Projects />
				<Links />
			</div>
		</div>
	);
}
