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
				href: "/images/logo.ico",
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
							handler: (content) => content.replace(/ ?@ts-expect-error/g, ""),
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
		assetsInclude: ["public/*"],
		server: {
			host: true,
		},
	},

	themeConfig: {
		logo: "/images/logo.png",

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
		fr: {
			label: "Français",
			lang: "fr",
			link: "/fr/",
			themeConfig: {
				nav: [
					{
						text: "Guide",
						link: "/fr/v1/guide/",
					},
					{
						text: "API",
						items: [
							{
								text: "Overview",
								link: "/en/v1/api/",
							},
							{
								text: "Common",
								link: "/fr/v1/api/common/",
							},
							{
								text: "Array",
								link: "/fr/v1/api/array/",
							},
							{
								text: "Clean",
								link: "/fr/v1/api/clean/",
							},
							{
								text: "DataParser",
								link: "/fr/v1/api/dataParser/",
							},
							{
								text: "Date",
								link: "/fr/v1/api/date/",
							},
							{
								text: "Either",
								link: "/fr/v1/api/either/",
							},
							{
								text: "Generator",
								link: "/fr/v1/api/generator/",
							},
							{
								text: "String",
								link: "/fr/v1/api/string/",
							},
							{
								text: "Number",
								link: "/fr/v1/api/number/",
							},
							{
								text: "Object",
								link: "/fr/v1/api/object/",
							},
							{
								text: "Pattern",
								link: "/fr/v1/api/pattern/",
							},
						],
					},
					{
						text: "v1.x (LTS)",
						items: [
							{
								text: "v1.x (LTS)",
								link: "/fr/v1/guide/",
							},
						],
					},
				],
				docFooter: {
					prev: "Page précédente",
					next: "Page suivante",
				},
				sidebar: {
					"/fr/v1/guide/": [
						{
							text: "Commencer",
							items: [
								{
									text: "Introduction",
									link: "/fr/v1/guide/",
								},
								{
									text: "Démarrage rapide",
									link: "/fr/v1/guide/quickStart",
								},

							],
						},
						{
							text: "Conceptes",
							items: [
								{
									text: "La curryfication",
									link: "/fr/v1/guide/currying",
								},
								{
									text: "Le pipe",
									link: "/fr/v1/guide/pipe",
								},
								{
									text: "Either",
									link: "/fr/v1/guide/either",
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
		root: {
			label: "English",
			lang: "en",
			link: "/en/",
			themeConfig: {
				nav: [
					{
						text: "Guide",
						link: "/en/v1/guide/",
					},
					{
						text: "API",
						items: [
							{
								text: "Overview",
								link: "/en/v1/api/",
							},
							{
								text: "Common",
								link: "/en/v1/api/common/",
							},
							{
								text: "Array",
								link: "/en/v1/api/array/",
							},
							{
								text: "Clean",
								link: "/en/v1/api/clean/",
							},
							{
								text: "DataParser",
								link: "/en/v1/api/dataParser/",
							},
							{
								text: "Date",
								link: "/en/v1/api/date/",
							},
							{
								text: "Either",
								link: "/en/v1/api/either/",
							},
							{
								text: "Generator",
								link: "/en/v1/api/generator/",
							},
							{
								text: "String",
								link: "/en/v1/api/string/",
							},
							{
								text: "Number",
								link: "/en/v1/api/number/",
							},
							{
								text: "Object",
								link: "/en/v1/api/object/",
							},
							{
								text: "Pattern",
								link: "/en/v1/api/pattern/",
							},
						],
					},
					{
						text: "v1.x (LTS)",
						items: [
							{
								text: "v1.x (LTS)",
								link: "/en/v1/guide/",
							},
						],
					},
				],
				docFooter: {
					prev: "Previous page",
					next: "Next page",
				},
				sidebar: {
					"/en/v1/guide/": [
						{
							text: "Getting Started",
							items: [
								{
									text: "Introduction",
									link: "/en/v1/guide/",
								},
								{
									text: "Quick Start",
									link: "/en/v1/guide/quickStart",
								},
							],
						},
						{
							text: "Concepts",
							items: [
								{
									text: "Currying",
									link: "/en/v1/guide/currying",
								},
								{
									text: "Pipe",
									link: "/en/v1/guide/pipe",
								},
								{
									text: "Either",
									link: "/en/v1/guide/either",
								},
							],
						},
					],
				},
				outline: { label: "On this page" },
				returnToTopLabel: "Return to top",
				darkModeSwitchLabel: "Dark mode",
				footer: {
					copyright: "Copyright © 2025-present DuploJS Contributors",
					message: "Released under the MIT license.",
				},
			},
		},
	},
});
