"use client";

import { cn } from "@/util/cn";
import {
	SiDiscord as Discord,
	SiFacebook as Facebook,
	SiGithub as GitHub,
	SiInstagram as Instagram,
	SiX as X,
} from "@icons-pack/react-simple-icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Cake, House, MapPin, Send } from "lucide-react";
import type React from "react";
import type { PropsWithChildren } from "react";
import { useState } from "react";
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
	"https://open.spotify.com/track/5BZsQlgw21vDOAjoqkNgKb";

type MobileProfileProps = {
	name: string;
	avatarUrl: string;
	pronouns: string;
	role: string;
	birthdate: string;
	livesIn: string;
	hometown: string;
};

function IconBadge({ children }: PropsWithChildren) {
	return (
		<div className="pointer-events-none inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-800 p-2">
			{children}
		</div>
	);
}

function SocialLink({
	className,
	label,
	...props
}: React.ComponentProps<"a"> & {
	label?: string;
}) {
	return (
		<a
			className={cn("font-medium underline underline-offset-4", className)}
			{...props}
		>
			{label}
		</a>
	);
}

export function MobileProfile({
	name,
	avatarUrl,
	pronouns,
	role,
	birthdate,
	livesIn,
	hometown,
}: MobileProfileProps) {
	const [openSheet, setOpenSheet] = useState(false);

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
				className="w-full rounded-none border-l border-l-neutral-800 bg-neutral-900 sm:max-w-xl"
			>
				<SheetHeader>
					<VisuallyHidden>
						<SheetTitle>Hidden Title</SheetTitle>
						<SheetDescription>Hidden Description</SheetDescription>
					</VisuallyHidden>
				</SheetHeader>
				<div className="-mt-7 flex flex-col gap-6 p-4 pt-0">
					<div className="relative h-26 w-full">
						<div className="size-full rounded-md bg-linear-to-br from-blue-500 via-blue-300 to-blue-500" />
					</div>
					<div className="relative">
						<div className="absolute -top-14 left-3">
							<Avatar className="size-15 shrink-0 rounded-md">
								<AvatarImage
									src={avatarUrl}
									alt={name}
									className="rounded-md"
								/>
								<AvatarFallback className="rounded-md bg-linear-to-br from-blue-500 via-blue-300 to-blue-500 text-2xl font-semibold text-white">
									{name.trim().charAt(0).toUpperCase()}
								</AvatarFallback>
							</Avatar>
						</div>
					</div>
					<div className="-mt-2 flex min-w-0 flex-col gap-1 px-1">
						<div className="flex items-center gap-1.5">
							<h2 className="text-xl font-bold">{name}</h2>
							<span className="text-sm text-neutral-500">•</span>
							<p className="text-sm text-neutral-500">{pronouns}</p>
						</div>
						<p className="text-sm font-medium text-neutral-600">{role}</p>
						<div className="mt-2">
							<FeaturedSong trackUrl={SPOTIFY_TRACK_URL} />
						</div>
					</div>
					<div className="scrollbar-hidden -mt-2 flex h-68 flex-col gap-4 overflow-y-auto px-1">
						<span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
							Personal Details
						</span>
						<div className="-mt-1.5 flex flex-col gap-2">
							<div className="flex items-center gap-2">
								<IconBadge>
									<Cake className="size-3.5 shrink-0 text-neutral-500" />
								</IconBadge>
								<span className="text-sm text-neutral-600">{birthdate}</span>
							</div>
							<div className="flex items-center gap-2">
								<IconBadge>
									<MapPin className="size-3.5 shrink-0 text-neutral-500" />
								</IconBadge>
								<span className="text-sm text-neutral-600">{livesIn}</span>
							</div>
							<div className="flex items-center gap-2">
								<IconBadge>
									<House className="size-3.5 shrink-0 text-neutral-500" />
								</IconBadge>
								<span className="text-sm text-neutral-600">{hometown}</span>
							</div>
						</div>
						<span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
							Social Links
						</span>
						<div className="-mt-1.5 flex flex-col gap-2">
							<div className="flex items-center gap-2">
								<Send className="size-4 shrink-0 text-neutral-500" />
								<SocialLink
									href="mailto:garcia.johngale@gmail.com"
									rel="noreferrer"
									target="_blank"
									label="garcia.johngale@gmail.com"
									className="text-sm text-blue-500"
								/>
							</div>
							<div className="flex items-center gap-2">
								<GitHub className="size-4 shrink-0 text-neutral-500" />
								<SocialLink
									href="https://github.com/almostJohn"
									rel="noreferrer"
									target="_blank"
									label="@almostJohn"
									className="text-sm text-blue-500"
								/>
							</div>
							<div className="flex items-center gap-2">
								<Discord className="size-4 shrink-0 text-neutral-500" />
								<SocialLink
									href="https://discord.com/users/996354867708841984"
									rel="noreferrer"
									target="_blank"
									label="almostjohn"
									className="text-sm text-blue-500"
								/>
							</div>
							<div className="flex items-center gap-2">
								<X className="size-4 shrink-0 text-neutral-500" />
								<SocialLink
									href="https://x.com/almostJohn1"
									rel="noreferrer"
									target="_blank"
									label="@almostJohn1"
									className="text-sm text-blue-500"
								/>
							</div>
							<div className="flex items-center gap-2">
								<Instagram className="size-4 shrink-0 text-neutral-500" />
								<SocialLink
									href="https://instagram.com/almostjohn1"
									rel="noreferrer"
									target="_blank"
									label="@almostjohn1"
									className="text-sm text-blue-500"
								/>
							</div>
							<div className="flex items-center gap-2">
								<Facebook className="size-4 shrink-0 text-neutral-500" />
								<SocialLink
									href="https://facebook.com/alsojohn01"
									rel="noreferrer"
									target="_blank"
									label="@alsojohn01"
									className="text-sm text-blue-500"
								/>
							</div>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
