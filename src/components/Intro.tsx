export function Intro() {
	return (
		<section id="introduction" className="mt-2 flex min-w-0 flex-col">
			<p className="text-neutral w-full text-sm leading-relaxed text-pretty">
				I'm 26 y/o software engineer based in the Philippines. I love building
				things and solving problems. I enjoy language design and web
				development. I mostly use{" "}
				<a
					href="https://nextjs.org"
					rel="noopener noreferrer"
					target="_blank"
					className="font-medium text-sky-500 underline underline-offset-4"
				>
					next.js
				</a>
				, a full-stack framework for the web that built on top of{" "}
				<a
					href="https://react.dev"
					rel="noopener noreferrer"
					target="_blank"
					className="font-medium text-sky-500 underline underline-offset-4"
				>
					react
				</a>
				.
			</p>
		</section>
	);
}
