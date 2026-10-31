export const siteConfig = {
	name: "John Gale Garcia",
	title: {
		default: "John Gale Garcia",
		template: "%s | John Gale Garcia",
	},
	url:
		process.env.NODE_ENV === "production"
			? "https://almostjohn.vercel.app"
			: "http://localhost:3000",
	description: "My corner of the web — projects, ideas, and things I build.",
	creator: "@almostJohn",
};

export type SiteConfig = typeof siteConfig;
