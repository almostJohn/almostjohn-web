import { FeaturedSong } from "@/components/FeaturedSong";
import { Links } from "@/components/Links";
import { Projects } from "@/components/Projects";

const SPOTIFY_TRACK_URL =
	"https://open.spotify.com/track/5PYBhh45xHEsM0LiTsIGgr";

export default function HomePage() {
	return (
		<div className="mt-10 flex flex-col">
			<div className="flex min-w-0 flex-col gap-1">
				<span className="text-sm text-neutral-600">hey, I'm</span>
				<h1 className="text-5xl font-bold">John</h1>
			</div>
			<p className="mt-6 w-full text-sm leading-relaxed whitespace-pre-wrap md:max-w-md">
				self-taught software engineer and designer based in Philippines,
				building web-systems and side projects.
			</p>
			<div className="mt-6 flex w-full flex-col gap-2 md:max-w-md">
				<h2 className="text-sm font-semibold text-neutral-600">
					Featured Song
				</h2>
				<FeaturedSong trackUrl={SPOTIFY_TRACK_URL} />
			</div>
			<div className="mt-10 flex w-full flex-col gap-6 md:max-w-md">
				<Projects />
				<Links />
			</div>
		</div>
	);
}
