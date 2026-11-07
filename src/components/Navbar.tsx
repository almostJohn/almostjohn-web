import Link from "next/link";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-900/95 backdrop-blur-lg supports-backdrop-filter:bg-neutral-900/60">
			<div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
				<div className="flex items-center justify-start">
					<Link href="/" className="text-sm font-bold">
						almostjohn
					</Link>
				</div>
				<div className="flex items-center justify-end gap-4">
					<a
						href="/#projects"
						className="text-sm font-medium underline-offset-4 hover:underline"
					>
						projects
					</a>
					<div className="h-4 w-0.5 bg-neutral-700" />
					<a
						href="/#links"
						className="text-sm font-medium underline-offset-4 hover:underline"
					>
						links
					</a>
				</div>
			</div>
		</header>
	);
}
