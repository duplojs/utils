import { defineConfig } from "vitest/config";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	test: {
		watch: false,
		globals: true,
		include: [
			"tests/**/*.test.ts",
			"integration/**/*.test.ts",
		],
		coverage: {
			provider: "istanbul",
			reporter: ["text", "json", "html", "json-summary"],
			reportsDirectory: "coverage",
			include: ["scripts"],
			exclude: [
				"**/*.test.ts", 
				"bin", 
				"dist",
				"docs",
			],
			thresholds: {
				lines: 100,
				branches: 100,
				functions: 100,
				statements: 100
			}
		},
		benchmark: {
			include: [
				"tests/**/*.bench.ts",
				"integration/**/*.bench.ts",
			]
		}
	},
	plugins: [tsconfigPaths()],
});
