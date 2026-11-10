import { Container } from "@/components/Container";
import { Projects } from "@/components/Projects";

export default function HomePage() {
	return (
		<Container className="mx-auto mt-8 w-full max-w-2xl p-4 sm:mt-10 sm:p-6">
			<div className="flex flex-col gap-6 sm:gap-8">
				<a
					href="https://x.com/almostJohn1"
					rel="noopener noreferrer"
					target="_blank"
					className="w-fit text-xl font-bold tracking-tight underline-offset-4 hover:underline sm:text-2xl"
				>
					@almostJohn1
				</a>
				<div className="flex flex-col gap-2">
					<p className="text-sm font-medium">Bio</p>
					<div className="w-full border-t border-neutral-800" />
				</div>
				<p className="-mt-3 text-sm leading-relaxed text-pretty">
					I'm a 26 year old software engineer based in the Philippines. I love
					building things and solving problems. I enjoy language design and web
					development. I mostly use{" "}
					<a
						href="https://nextjs.org"
						rel="noopener noreferrer"
						target="_blank"
						className="underline decoration-neutral-500 underline-offset-4 transition-colors hover:decoration-neutral-100"
					>
						Next.js
					</a>
					, a full-stack framework for the web that built on top{" "}
					<a
						href="https://react.dev"
						rel="noopener noreferrer"
						target="_blank"
						className="underline decoration-neutral-500 underline-offset-4 transition-colors hover:decoration-neutral-100"
					>
						React
					</a>
					.
				</p>
				<p className="-mt-3 text-sm leading-relaxed text-pretty">
					Curious how I build? Peek at my code on{" "}
					<a
						href="https://github.com/almostJohn"
						rel="noopener noreferrer"
						target="_blank"
						className="underline decoration-neutral-500 underline-offset-4 transition-colors hover:decoration-neutral-100"
					>
						GitHub
					</a>
					, or{" "}
					<a
						href="mailto:garcia.johngale@gmail.com"
						className="underline decoration-neutral-500 underline-offset-4 transition-colors hover:decoration-neutral-100"
					>
						email
					</a>{" "}
					me if you'd rather just talk.
				</p>
				<p className="-mt-3 text-sm leading-relaxed text-pretty">
					If you like what I build, you can support me through{" "}
					<a
						href="https://github.com/sponsors/almostJohn"
						rel="noopener noreferrer"
						target="_blank"
						className="underline decoration-neutral-500 underline-offset-4 transition-colors hover:decoration-neutral-100"
					>
						GitHub Sponsors
					</a>
					.
				</p>
				<div className="flex flex-col gap-1.5">
					<p className="section-heading">Projects</p>
					<Projects />
				</div>
			</div>
		</Container>
	);
}
