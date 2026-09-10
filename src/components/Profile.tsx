import {
	SiDiscord as Discord,
	SiFacebook as Facebook,
	SiGithub as GitHub,
	SiInstagram as Instagram,
	SiX as X,
} from "@icons-pack/react-simple-icons";
import { Cake, House, MapPin, Send } from "lucide-react";
import { DetailsSection } from "./DetailsSection";
import { FeaturedSong } from "./FeaturedSong";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

const SPOTIFY_TRACK_URL =
	"https://open.spotify.com/track/5PYBhh45xHEsM0LiTsIGgr";

type ProfileProps = {
	displayName: string;
	username: string;
	avatarUrl: string;
	pronouns: string;
	role: string;
};

export function Profile({
	displayName,
	username,
	avatarUrl,
	pronouns,
	role,
}: ProfileProps) {
	const personalDetails = [
		{
			label: "September 25, 2000",
			icon: (
				<div>
					<Cake className="size-4 shrink-0 text-neutral-500" />
				</div>
			),
		},
		{
			label: "Lives in Olongapo City",
			icon: (
				<div>
					<MapPin className="size-4 shrink-0 text-neutral-500" />
				</div>
			),
		},
		{
			label: "From Malolos, Bulacan",
			icon: (
				<div>
					<House className="size-4 shrink-0 text-neutral-500" />
				</div>
			),
		},
	];

	const links = [
		{
			label: "Email",
			href: "mailto:garcia.johngale@gmail.com",
			icon: (
				<div>
					<Send className="size-4 shrink-0 text-neutral-500 transition-colors group-hover:text-neutral-100" />
				</div>
			),
		},
		{
			label: "almostJohn",
			href: "https://github.com/almostJohn",
			icon: (
				<div>
					<GitHub className="size-4 shrink-0 text-neutral-500 transition-colors group-hover:text-neutral-100" />
				</div>
			),
		},
		{
			label: "@almostjohn",
			href: "https://discord.com/users/996354867708841984",
			icon: (
				<div>
					<Discord className="size-4 shrink-0 text-neutral-500 transition-colors group-hover:text-neutral-100" />
				</div>
			),
		},
		{
			label: "@almostJohn1",
			href: "https://x.com/almostJohn1",
			icon: (
				<div>
					<X className="size-4 shrink-0 text-neutral-500 transition-colors group-hover:text-neutral-100" />
				</div>
			),
		},
		{
			label: "@almostjohn1",
			href: "https://instagram.com/almostjohn1",
			icon: (
				<div>
					<Instagram className="size-4 shrink-0 text-neutral-500 transition-colors group-hover:text-neutral-100" />
				</div>
			),
		},
		{
			label: "@alsojohn01",
			href: "https://facebook.com/alsojohn01",
			icon: (
				<div>
					<Facebook className="size-4 shrink-0 text-neutral-500 transition-colors group-hover:text-neutral-100" />
				</div>
			),
		},
	];

	return (
		<div className="hidden h-full w-full flex-col rounded-md border border-neutral-700 bg-neutral-900 p-4 md:flex md:max-w-xs">
			<div className="flex flex-col gap-6">
				<div className="relative h-24 w-full">
					<div className="size-full rounded-md bg-linear-to-br from-sky-700 via-sky-400 to-blue-700" />
				</div>
				<div className="relative">
					<div className="absolute -top-14 left-3">
						<Avatar className="size-15 shrink-0 rounded-md">
							<AvatarImage
								src={avatarUrl}
								alt={username}
								className="rounded-md"
							/>
							<AvatarFallback className="rounded-md bg-linear-to-br from-blue-500 via-blue-300 to-blue-500 text-2xl font-semibold text-white">
								{displayName.trim().charAt(0).toUpperCase()}
							</AvatarFallback>
						</Avatar>
					</div>
				</div>
				<div className="-mt-2 flex min-w-0 flex-col gap-1 px-1">
					<div className="flex min-w-0 flex-col">
						<h2 className="text-lg font-bold">{displayName}</h2>
						<div className="flex items-center gap-1">
							<p className="text-sm text-neutral-400">@{username}</p>
							<span className="text-xs text-neutral-500">•</span>
							<p className="text-sm text-neutral-500">{pronouns}</p>
						</div>
					</div>
					<p className="text-sm font-medium text-neutral-500">{role}</p>
					<div className="mt-1">
						<FeaturedSong trackUrl={SPOTIFY_TRACK_URL} />
					</div>
				</div>
				<div className="scrollbar-hidden -mx-2 -mt-2 -mb-1 flex h-62 flex-col gap-4 overflow-y-auto px-2 pb-1">
					<DetailsSection
						title="Personal Details"
						items={personalDetails}
						className="px-1.5"
					/>
					<DetailsSection title="Links" items={links} className="px-1.5" />
				</div>
			</div>
		</div>
	);
}
