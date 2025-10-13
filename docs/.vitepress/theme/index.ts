import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { MonacoTSEditor } from "./components/monacoTSEditor";
import "virtual:group-icons.css";
import "./style.css";

export default {
	extends: DefaultTheme,
	Layout: () => h(DefaultTheme.Layout, null, {
		// https://vitepress.dev/guide/extending-default-theme#layout-slots
	}),
	enhanceApp({ app }) {
		app.component("MonacoTSEditor", MonacoTSEditor);
	},
} satisfies Theme;
