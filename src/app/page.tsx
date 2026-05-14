import Link from "next/link";

export default function HomePage() {
	return (
		<div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-5xl flex-col px-6 pt-24 sm:px-4">
			<div className="mt-3 flex flex-col justify-center">
				<h1 className="text-6xl leading-tight font-bold">
					Hey, I'm <span className="text-sky-500">John</span>!
				</h1>
				<p className="text-2xl font-light">Full Stack Web Developer</p>
				<p className="mt-6 w-full max-w-xl text-lg text-balance">
					I am a 25 year old <strong>full-stack web developer</strong>, and a{" "}
					<strong>graphic designer</strong> from the{" "}
					<strong>Philippines</strong>. I love <strong>building things</strong>{" "}
					and <strong>solving problems</strong>. I enjoy{" "}
					<strong>language design</strong>,{" "}
					<strong>programming interfaces</strong>, and{" "}
					<strong>web development</strong>. I mostly use{" "}
					<strong>Next.js</strong>, a full-stack framework built on top{" "}
					<strong>React.js</strong>.
				</p>
				<div className="mt-6 flex w-full flex-col gap-3 md:flex-row">
					<Link
						href="/portfolio"
						className="inline-flex h-9 shrink-0 items-center justify-center bg-neutral-900 px-3 py-2 text-base font-medium text-neutral-100 transition-colors"
					>
						View Portfolio
					</Link>
					<Link
						href="/contact"
						className="inline-flex h-9 shrink-0 items-center justify-center border border-neutral-300 px-3 py-2 text-base font-medium transition-colors hover:bg-neutral-200"
					>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
}
