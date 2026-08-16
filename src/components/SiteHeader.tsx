import Link from "next/link";

export function SiteHeader() {
	return (
		<header className="flex items-center gap-2 text-sm font-medium">
			<Link href="/" className="underline underline-offset-4">
				almostjohn
			</Link>
			/
			<a
				href="https://facebook.com/alsojohn01"
				rel="noreferrer"
				target="_blank"
				className="underline underline-offset-4"
			>
				facebook
			</a>
			/
			<a
				href="https://github.com/almostJohn"
				rel="noreferrer"
				target="_blank"
				className="underline underline-offset-4"
			>
				github
			</a>
		</header>
	);
}
