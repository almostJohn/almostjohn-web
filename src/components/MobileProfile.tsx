"use client";

import {
	SiDiscord as Discord,
	SiFacebook as Facebook,
	SiGithub as GitHub,
	SiInstagram as Instagram,
	SiX as X,
} from "@icons-pack/react-simple-icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Cake, House, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { DetailsSection } from "./DetailsSection";
import { FeaturedSong } from "./FeaturedSong";
import { Icons } from "./Icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/Sheet";

const SPOTIFY_TRACK_URL =
	"https://open.spotify.com/track/5PYBhh45xHEsM0LiTsIGgr";

type MobileProfileProps = {
	displayName: string;
	username: string;
	avatarUrl: string;
	pronouns: string;
	role: string;
};

export function MobileProfile({
	displayName,
	username,
	avatarUrl,
	pronouns,
	role,
}: MobileProfileProps) {
	const [openSheet, setOpenSheet] = useState(false);

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
		<Sheet open={openSheet} onOpenChange={setOpenSheet}>
			<SheetTrigger asChild>
				<button
					type="button"
					className="group border-r-none inline-flex h-9 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full rounded-r-none border-t border-b border-l border-neutral-700 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-neutral-800"
				>
					<Icons.Menu className="size-6 shrink-0" />
					Profile
				</button>
			</SheetTrigger>
			<SheetContent
				side="right"
				className="flex w-full flex-col rounded-none border-l border-l-neutral-800 bg-neutral-900 sm:max-w-xl"
			>
				<SheetHeader>
					<VisuallyHidden>
						<SheetTitle>Hidden Title</SheetTitle>
						<SheetDescription>Hidden Description</SheetDescription>
					</VisuallyHidden>
				</SheetHeader>
				<div className="-mt-7 flex min-h-0 flex-1 flex-col gap-6 p-4 pt-0">
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
						<p className="text-sm font-medium text-neutral-600">{role}</p>
						<div className="mt-2">
							<FeaturedSong trackUrl={SPOTIFY_TRACK_URL} />
						</div>
					</div>
					<div className="scrollbar-hidden -mx-3 -mt-2 -mb-1 flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 pb-1">
						<DetailsSection
							title="Personal Details"
							items={personalDetails}
							className="px-2"
						/>
						<DetailsSection title="Links" items={links} className="px-2" />
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
