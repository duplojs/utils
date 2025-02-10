import { defineConfig } from "vitest/config";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	test: {
		watch: false,
		globals: true,
		setupFiles: ["./test/setup.ts"],
		include: [
			"scripts/**/*.test.ts", 
		],
		coverage: {
			provider: "istanbul",
			reporter: ["text", "json", "html", "json-summary"],
			reportsDirectory: "coverage",
			exclude: [
				"**/*.test.ts", 
				"bin", 
				"dist",
			],
		},
	},
	plugins: [tsconfigPaths()],
});
