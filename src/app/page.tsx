const projects = [
	{
		label: "presencia-lab",
		description:
			"Most local businesses lose customers because they don't have a website. We fix that — fast, affordable, and built right.",
		href: "https://presencia-lab.vercel.app",
	},
	{
		label: "app-kukuys-taryahan",
		description: "kukuys taryahan app for Dota2/CS2",
		href: "https://app-kukuys-taryahan.vercel.app",
	},
	{
		label: "app-stickythoughts",
		description:
			"Share your thoughts freely—anonymously or with your name. A clean, simple space for ideas, reflections, and musings. Built with Next.js, Drizzle ORM, and Tailwind CSS.",
		href: "https://app-stickythoughts.vercel.app",
	},
	{
		label: "app-tsconfig",
		description:
			"Generate clean, opinionated tsconfig.json setups for modern TypeScript projects.",
		href: "https://app-tsconfig.vercel.app",
	},
];

const socials = [
	{
		label: "x (formerly known twitter)",
		href: "https://x.com/almostJohn1",
	},
	{
		label: "instagram",
		href: "https://instagram.com/almostjohn1",
	},
	{
		label: "facebook",
		href: "https://facebook.com/alsojohn01",
	},
];

export default function Page() {
	return (
		<div className="mx-auto mt-6 flex min-h-[calc(100vh-72px)] max-w-2xl flex-col px-6 py-24">
			<div className="flex flex-col gap-4">
				<h1 className="text-2xl font-medium">John Gale Garcia</h1>
				<p className="w-full leading-relaxed">
					I&apos;m a 25 y/o web developer based in the Philippines. I love
					building things and solving problems — from personal projects to real
					businesses. I enjoy language design and web development, and I mostly
					use{" "}
					<a
						href="https://nextjs.org"
						rel="noreferrer"
						target="_blank"
						className="underline decoration-neutral-500 underline-offset-2 transition-colors hover:decoration-neutral-900 dark:hover:decoration-neutral-100"
					>
						Next.js
					</a>{" "}
					— a full stack framework built on top of{" "}
					<a
						href="https://react.dev"
						rel="noreferrer"
						target="_blank"
						className="underline decoration-neutral-500 underline-offset-2 transition-colors hover:decoration-neutral-900 dark:hover:decoration-neutral-100"
					>
						React
					</a>
					.
					<br />
					<br />I also run{" "}
					<a
						href="https://presencia-lab.vercel.app"
						rel="noreferrer"
						target="_blank"
						className="underline decoration-neutral-500 underline-offset-2 transition-colors hover:decoration-neutral-900 dark:hover:decoration-neutral-100"
					>
						Presencia Lab
					</a>
					, where I help local businesses get online with clean and affordable
					websites.
					<br />
					<br />
					Outside of coding, I&apos;m a tech enthusiast and a massive{" "}
					<a
						href="https://open.spotify.com/user/312475ahba5lfhbcvdb3xyihgy64?si=037e048e75084b89"
						rel="noreferrer"
						target="_blank"
						className="underline decoration-neutral-500 underline-offset-2 transition-colors hover:decoration-neutral-900 dark:hover:decoration-neutral-100"
					>
						music fan
					</a>{" "}
					— always either reading about the latest in tech or listening to
					something on repeat.
				</p>
			</div>
			<div className="mt-8 flex flex-col gap-6">
				<div className="flex flex-col gap-4">
					<h2 className="text-xl font-medium">Projects</h2>
					<ul className="list list-inside list-disc space-y-1.5">
						{projects.map((item) => (
							<li key={item.label}>
								<a
									href={item.href}
									rel="noreferrer"
									target="_blank"
									className="underline decoration-neutral-500 underline-offset-2 transition-colors hover:decoration-neutral-900 dark:hover:decoration-neutral-100"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col gap-4">
					<h2 className="text-xl font-medium">Socials</h2>
					<ul className="list list-inside list-disc space-y-1.5">
						{socials.map((item) => (
							<li key={item.label}>
								<a
									href={item.href}
									rel="noreferrer"
									target="_blank"
									className="underline decoration-neutral-500 underline-offset-2 transition-colors hover:decoration-neutral-900 dark:hover:decoration-neutral-100"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<p className="mt-8 w-full leading-relaxed">
				You can find my github profile{" "}
				<a
					href="https://github.com/almostJohn"
					rel="noreferrer"
					target="_blank"
					className="underline decoration-neutral-500 underline-offset-2 transition-colors hover:decoration-neutral-900 dark:hover:decoration-neutral-100"
				>
					here
				</a>
				. If you have any inquiries/questions,{" "}
				<a
					href="mailto:garcia.johngale@gmail.com"
					rel="noreferrer"
					target="_blank"
					className="underline decoration-neutral-500 underline-offset-2 transition-colors hover:decoration-neutral-900 dark:hover:decoration-neutral-100"
				>
					reach out
				</a>{" "}
				if interested.
			</p>
		</div>
	);
}
