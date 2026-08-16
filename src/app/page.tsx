import { ContactForm } from "@/components/forms/ContactForm";

const projects = [
	{
		title: "voxly-web",
		description:
			"Write a letter to anyone, anonymously or not. No sign-up required. Voxly is a free, open space for letters that deserve to be written.",
		href: "https://app-voxly.vercel.app",
	},
	{
		title: "tsconfig-web",
		description:
			"Generate clean, opinionated tsconfig.json setups for modern TypeScript projects.",
		href: "https://app-tsconfig.vercel.app",
	},
];

export default function HomePage() {
	return (
		<>
			<div className="flex w-full flex-col gap-1.5">
				<p className="leading-relaxed text-pretty text-neutral-700">
					I'm a full-stack web developer at Servant Advertising.
				</p>
				<p className="leading-relaxed text-pretty text-neutral-700 md:whitespace-nowrap">
					I created{" "}
					<a
						href="https://servantadvertising.com"
						rel="noreferrer"
						target="_blank"
						className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-950"
					>
						servantadvertising
					</a>
					,{" "}
					<a
						href="https://servant-advertising-web.vercel.app"
						rel="noreferrer"
						target="_blank"
						className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-950"
					>
						servant-advertising-web
					</a>{" "}
					and{" "}
					<a
						href="https://system-admin-web.vercel.app"
						rel="noreferrer"
						target="_blank"
						className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-950"
					>
						system-admin-web
					</a>
					.
				</p>
				<p className="leading-relaxed text-pretty text-neutral-700">
					I co-created{" "}
					<a
						href="https://upskwela.com"
						rel="noreferrer"
						target="_blank"
						className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-950"
					>
						Upskwela
					</a>{" "}
					with BossRod, and with other developers.
				</p>
			</div>
			<div className="flex w-full max-w-md flex-col gap-6">
				{projects.map((project, i) => (
					<a
						key={i}
						href={project.href}
						rel="noreferrer"
						target="_blank"
						className="flex flex-col gap-2 bg-neutral-200/60 px-6 py-4"
					>
						<h2 className="text-lg font-semibold tracking-tight underline underline-offset-4">
							{project.title}
						</h2>
						<p className="text-sm leading-relaxed text-pretty text-neutral-600">
							{project.description}
						</p>
					</a>
				))}
				<ContactForm />
			</div>
		</>
	);
}
