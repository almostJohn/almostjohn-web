export const siteConfig = {
	name: "almostJohn",
	title: {
		default: "almostJohn",
		template: "%s | almostJohn",
	},
	url:
		process.env.NODE_ENV === "production"
			? "https://almostjohn.vercel.app"
			: "http://localhost:3000",
	description: "My corner of the web — projects, ideas, and things I build.",
	creator: "@almostJohn",
};

export type SiteConfig = typeof siteConfig;
