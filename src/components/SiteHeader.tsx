import Link from "next/link";
import { Icons } from "./Icons";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-neutral-100/95 backdrop-blur-md supports-backdrop-filter:bg-neutral-100/60">
			<div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 sm:px-4">
				<Link href="/">
					<Icons.CurlyBrackets className="size-9 shrink-0 transition-colors hover:text-blue-600" />
				</Link>
				<MainNav />
				<MobileNav />
			</div>
		</header>
	);
}
