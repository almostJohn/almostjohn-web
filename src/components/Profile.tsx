import { cn } from "@/util/cn";
import {
	SiDiscord as Discord,
	SiFacebook as Facebook,
	SiGithub as GitHub,
	SiInstagram as Instagram,
	SiX as X,
} from "@icons-pack/react-simple-icons";
import { Cake, House, MapPin, Send } from "lucide-react";
import type React from "react";
import type { PropsWithChildren } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

type ProfileProps = {
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

export function Profile({
	name,
	avatarUrl,
	pronouns,
	role,
	birthdate,
	livesIn,
	hometown,
}: ProfileProps) {
	return (
		<div className="flex h-full w-full flex-col overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 p-4 md:max-w-xs">
			<div className="flex flex-col gap-6">
				<div className="relative h-26 w-full">
					<div className="size-full rounded-md bg-linear-to-br from-blue-500 via-blue-300 to-blue-500" />
				</div>
				<div className="relative">
					<div className="absolute -top-13 left-3">
						<Avatar className="size-15 shrink-0 rounded-md">
							<AvatarImage src={avatarUrl} alt={name} className="rounded-md" />
							<AvatarFallback className="rounded-md bg-linear-to-br from-blue-500 via-blue-300 to-blue-500 text-2xl font-semibold text-white">
								{name.trim().charAt(0).toUpperCase()}
							</AvatarFallback>
						</Avatar>
					</div>
				</div>
				<div className="-mt-1 flex min-w-0 flex-col gap-1 pl-2">
					<div className="flex items-center gap-1.5">
						<h2 className="text-xl font-bold">{name}</h2>
						<span className="text-sm text-neutral-500">•</span>
						<p className="text-sm text-neutral-500">{pronouns}</p>
					</div>
					<p className="text-sm font-medium text-neutral-600">{role}</p>
				</div>
				<div className="flex flex-col gap-4 pb-1">
					<div className="border-t border-neutral-800" />
					<div className="flex flex-col gap-2">
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
					<div className="border-t border-neutral-800" />
					<div className="flex flex-col gap-2">
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
		</div>
	);
}
