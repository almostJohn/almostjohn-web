import {
	SiDiscord as DiscordIcon,
	SiFacebook as FacebookIcon,
	SiGithub as GitHubIcon,
	SiInstagram as InstagramIcon,
	SiX as XIcon,
} from "@icons-pack/react-simple-icons";
import { Send } from "lucide-react";
import { Section } from "@/components/Section";

const links = [
	{
		title: "Email",
		href: "mailto:garcia.johngale@gmail.com",
		icon: <Send className="size-4 shrink-0" />,
	},
	{
		title: "GitHub",
		href: "https://github.com/almostJohn",
		icon: <GitHubIcon className="size-4 shrink-0" />,
	},
	{
		title: "Twitter",
		href: "https://x.com/almostJohn1",
		icon: <XIcon className="size-4 shrink-0" />,
	},
	{
		title: "Instagram",
		href: "https://instagram.com/almostjohn1",
		icon: <InstagramIcon className="size-4 shrink-0" />,
	},
	{
		title: "Facebook",
		href: "https://facebook.com/alsojohn01",
		icon: <FacebookIcon className="size-4 shrink-0" />,
	},
	{
		title: "Discord",
		href: "https://discord.com/users/996354867708841984",
		icon: <DiscordIcon className="size-4 shrink-0" />,
	},
];

export function Links() {
	return (
		<Section
			id="links"
			sectionTitle="links"
			sectionDescription="Connect with me on social media."
		>
			<div className="flex flex-wrap gap-4 sm:gap-6">
				{links.map((link) => (
					<a
						key={link.href}
						href={link.href}
						rel="noopener noreferrer"
						target="_blank"
						className="flex items-center gap-2"
					>
						{link.icon}
						<p className="text-sm font-medium underline underline-offset-4">
							{link.title}
						</p>
					</a>
				))}
			</div>
		</Section>
	);
}
