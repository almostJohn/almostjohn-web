"use client";

import { Music4 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type SpotifyOEmbedResponse = {
	title: string;
	thumbnail_url: string;
	thumbnail_width: string;
	thumbnail_height: string;
	provider_name: string;
	html: string;
};

async function getTrackEmbed(
	trackUrl: string,
): Promise<SpotifyOEmbedResponse | null> {
	try {
		const response = await fetch(
			`https://open.spotify.com/oembed?url=${encodeURIComponent(trackUrl)}`,
			{ next: { revalidate: 86_400 } },
		);

		if (!response.ok) {
			return null;
		}

		return response.json();
	} catch (error) {
		return null;
	}
}

type FeaturedSongProps = {
	trackUrl: string;
};

export function FeaturedSong({ trackUrl }: FeaturedSongProps) {
	const [track, setTrack] = useState<SpotifyOEmbedResponse | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let cancelled = false;

		setIsLoading(true);

		getTrackEmbed(trackUrl).then((result) => {
			if (!cancelled) {
				setTrack(result);
				setIsLoading(false);
			}
		});

		return () => {
			cancelled = true;
		};
	}, [trackUrl]);

	if (isLoading) {
		return (
			<div className="flex animate-pulse items-center justify-between gap-2 rounded-md bg-neutral-800 p-3">
				<div className="flex items-center gap-2">
					<div className="size-8 shrink-0 animate-pulse rounded-md bg-neutral-900" />
					<div className="flex flex-col gap-1">
						<div className="h-3 w-35 animate-pulse rounded-md bg-neutral-900" />
						<div className="h-4 w-25 animate-pulse rounded-md bg-neutral-900" />
					</div>
				</div>
			</div>
		);
	}

	if (!track) {
		return null;
	}

	return (
		<a
			href={trackUrl}
			rel="noreferrer"
			target="_blank"
			className="flex items-center justify-between gap-2 rounded-md border border-neutral-700 px-3 py-2 text-sm font-medium transition-colors hover:bg-neutral-800"
			title={`${trackUrl}`}
		>
			<div className="flex items-center gap-2">
				<div className="relative size-8 shrink-0 overflow-hidden rounded-md">
					<Image
						src={track.thumbnail_url}
						alt={track.title}
						fill
						sizes="48px"
						className="object-cover"
					/>
				</div>
				<div className="flex flex-col overflow-hidden">
					<span className="text-xs font-medium text-neutral-500">
						Currently vibing to
					</span>
					<p className="truncate text-sm font-medium">{track.title}</p>
				</div>
			</div>
			<div className="flex items-center justify-end pr-2">
				<Music4 className="size-4 shrink-0 text-neutral-400" />
			</div>
		</a>
	);
}
