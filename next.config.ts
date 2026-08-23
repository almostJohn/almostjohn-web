import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["ts", "mdx", "tsx"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.spotifycdn.com",
			},
			{
				protocol: "https",
				hostname: "i.scdn.co",
			},
		],
	},
};

export default nextConfig;
