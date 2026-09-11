import {
	SiDiscord as Discord,
	SiFacebook as Facebook,
	SiGithub as GitHub,
	SiInstagram as Instagram,
	SiX as X,
} from "@icons-pack/react-simple-icons";
import { Send } from "lucide-react";

type Link = {
	label: string;
	href: string;
	icon: React.ReactNode;
};

const links: Link[] = [
	{
		label: "Email",
		href: "mailto:garcia.johngale@gmail.com",
		icon: <Send className="size-3 shrink-0" />,
	},
	{
		label: "GitHub",
		href: "https://github.com/almostJohn",
		icon: <GitHub className="size-3 shrink-0" />,
	},
	{
		label: "Twitter",
		href: "https://x.com/almostJohn1",
		icon: <X className="size-3 shrink-0" />,
	},
	{
		label: "Discord",
		href: "https://discord.com/users/996354867708841984",
		icon: <Discord className="size-3 shrink-0" />,
	},
	{
		label: "Instagram",
		href: "https://instagram.com/almostjohn1",
		icon: <Instagram className="size-3 shrink-0" />,
	},
	{
		label: "Facebook",
		href: "https://facebook.com/alsojohn01",
		icon: <Facebook className="size-3 shrink-0" />,
	},
];

export function Links() {
	return (
		<div className="flex flex-col gap-1">
			<h2 className="text-sm font-semibold text-neutral-600">Links</h2>
			<div className="flex flex-wrap items-center gap-4">
				{links.map((link, index) => (
					<a
						key={index}
						href={link.href}
						className="inline-flex items-center justify-center gap-2 border border-neutral-300 bg-neutral-200 px-2 py-1 text-xs font-medium whitespace-nowrap"
					>
						{link.icon}
						{link.label}
					</a>
				))}
			</div>
		</div>
	);
}
