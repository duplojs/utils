import "vue";
import { defineConfig } from "vitepress";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
	title: "@duplojs/utils",
	description: "Utilitaires fonctionnels et immutables avec une excellente expérience développeur",

	base: "/",
	cleanUrls: true,

	transformPageData(pageData) {
		const frontmatter = pageData.frontmatter ?? {};

		if (frontmatter.layout === "home") {
			return pageData;
		}

		if (typeof frontmatter.pageClass === "string" && frontmatter.pageClass.length > 0) {
			return pageData;
		}

		frontmatter.pageClass = "layout-wide";
		pageData.frontmatter = frontmatter;

		return pageData;
	},

	head: [
		[
			"link",
			{
				rel: "icon",
				href: "/assets/images/logo.ico",
			},
		],
	],

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
		plugins: [
			groupIconVitePlugin(),
			viteStaticCopy({
				structured: true,
				targets: [
					{
						src: "**/*.doc.ts",
						dest: "./",
						transform: {
							encoding: "utf-8",
							handler: (content) => content.replace("@ts-expect-error", ""),
						},
					},
				],
			}),
		],
		optimizeDeps: {
			include: ["monaco-editor"],
		},
		define: {
			global: "globalThis",
		},
		assetsInclude: ["**/*.doc.ts", "public/*"],
		server: {
			host: true,
		},
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
								text: "Common",
								link: "/v1/api/common/fr",
							},
							{
								text: "Array",
								link: "/v1/api/array/fr",
							},
							{
								text: "Clean",
								link: "/v1/api/clean/fr",
							},
							{
								text: "DataParser",
								link: "/v1/api/dataParser/fr",
							},
							{
								text: "Date",
								link: "/v1/api/date/fr",
							},
							{
								text: "Either",
								link: "/v1/api/either/fr",
							},
							{
								text: "Generator",
								link: "/v1/api/generator/fr",
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
								text: "Object",
								link: "/v1/api/object/fr",
							},
							{
								text: "Pattern",
								link: "/v1/api/pattern/fr",
							},
							{
								text: "String",
								link: "/v1/api/string/fr",
							},
						],
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
				sidebar: {
					"/v1/guide/": [
						{
							text: "Commencer",
							items: [
								{
									text: "Introduction",
									link: "/v1/guide/fr",
								},
							],
						},
					],
				},
				outline: { label: "Sur cette page" },
				returnToTopLabel: "Retour en haut",
				darkModeSwitchLabel: "Mode sombre",
				footer: {
					copyright: "Copyright © 2025-présent Contributeurs de DuploJS",
					message: "Diffusé sous licence MIT.",
				},
			},
		},
	},
});
