import { defineConfig } from "vitepress";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";

export default defineConfig({
	title: "@duplojs/utils",
	description: "Utilitaires fonctionnels et immutables avec une excellente expérience développeur",

	base: "/",
	cleanUrls: true,

	head: [
		[
			"link",
			{
				rel: "icon",
				href: "/assets/images/logo.ico",
			},
		],
	],

	rewrites: {
		"index.md": "v1/fr",
	},

	markdown: {
		lineNumbers: true,
		theme: {
			light: "light-plus",
			dark: "dark-plus",
		},
		config: (md) => {
			md.use(groupIconMdPlugin);
		},
	},

	vite: {
		// temporary fix - conflict vite version v5 vs v6
		plugins: [groupIconVitePlugin() as any],
		optimizeDeps: {
			include: ["monaco-editor"],
		},
		define: {
			global: "globalThis",
		},
		assetsInclude: ["**/*.doc.ts", "public/*"],
	},

	themeConfig: {
		logo: "/assets/images/logo.png",

		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/duplojs/utils",
			},
			{
				icon: "npm",
				link: "https://www.npmjs.com/package/@duplojs/utils",
			},
		],

		search: {
			provider: "local",
		},
	},

	locales: {
		root: {
			label: "Français",
			lang: "fr",
			link: "v1/fr",
			themeConfig: {
				nav: [
					{
						text: "Guide",
						link: "/v1/guide/fr",
					},
					{
						text: "API",
						items: [
							{
								text: "Overview",
								link: "/v1/api/fr",
							},
							{
								text: "String",
								link: "/v1/api/string/fr",
							},
							{
								text: "Number",
								link: "/v1/api/number/fr",
							},
							{
								text: "Array",
								link: "/v1/api/array/fr",
							},
							{
								text: "Object",
								link: "/v1/api/object/fr",
							},
							{
								text: "Pattern",
								link: "/v1/api/pattern/fr",
							},
							{
								text: "Generator",
								link: "/v1/api/generator/fr",
							},
							{
								text: "Either",
								link: "/v1/api/either/fr",
							},
							{
								text: "Common",
								link: "/v1/api/common/fr",
							},
						],
					},
					{
						text: "Reference",
						link: "/v1/reference/fr",
					},
					{
						text: "Exemples",
						link: "/v1/examples/fr",
					},
					{
						text: "v1.x",
						items: [
							{
								text: "v1.x (Current)",
								link: "/v1/fr",
							},
						],
					},
				],
				docFooter: {
					prev: "Page précédente",
					next: "Page suivante",
				},
				outline: { label: "Sur cette page" },
				returnToTopLabel: "Retour en haut",
				darkModeSwitchLabel: "Mode sombre",
			},
		},
	},
});
