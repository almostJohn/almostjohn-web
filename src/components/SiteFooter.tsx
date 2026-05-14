import {
	SiDiscord as DiscordIcon,
	SiFacebook as FacebookIcon,
	SiGithub as GitHubIcon,
	SiGmail as GmailIcon,
	SiInstagram as InstagramIcon,
	SiX as XIcon,
} from "@icons-pack/react-simple-icons";

export function SiteFooter() {
	return (
		<footer className="bottom-0 w-full">
			<div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-12 sm:px-4 md:flex-row md:justify-between">
				<div className="flex items-center gap-2">
					<a
						href="mailto:garcia.johngale@gmail.com"
						rel="noreferrer"
						target="_blank"
						className="inline-flex size-10 shrink-0 items-center justify-center p-2 transition-colors hover:text-sky-500"
					>
						<GmailIcon className="size-6 shrink-0" />
					</a>
					<a
						href="https://github.com/almostJohn"
						rel="noreferrer"
						target="_blank"
						className="inline-flex size-10 shrink-0 items-center justify-center p-2 transition-colors hover:text-sky-500"
					>
						<GitHubIcon className="size-6 shrink-0" />
					</a>
					<a
						href="https://discord.com/users/996354867708841984"
						rel="noreferrer"
						target="_blank"
						className="inline-flex size-10 shrink-0 items-center justify-center p-2 transition-colors hover:text-sky-500"
					>
						<DiscordIcon className="size-6 shrink-0" />
					</a>
					<a
						href="https://x.com/almostJohn1"
						rel="noreferrer"
						target="_blank"
						className="inline-flex size-10 shrink-0 items-center justify-center p-2 transition-colors hover:text-sky-500"
					>
						<XIcon className="size-6 shrink-0" />
					</a>
					<a
						href="https://instagram.com/almostjohn1"
						rel="noreferrer"
						target="_blank"
						className="inline-flex size-10 shrink-0 items-center justify-center p-2 transition-colors hover:text-sky-500"
					>
						<InstagramIcon className="size-6 shrink-0" />
					</a>
					<a
						href="https://facebook.com/alsojohn01"
						rel="noreferrer"
						target="_blank"
						className="inline-flex size-10 shrink-0 items-center justify-center p-2 transition-colors hover:text-sky-500"
					>
						<FacebookIcon className="size-6 shrink-0" />
					</a>
				</div>
				<div>
					<p className="text-center text-neutral-500">
						&copy; 2021 - {new Date().getFullYear()} almostJohn
					</p>
				</div>
			</div>
		</footer>
	);
}
