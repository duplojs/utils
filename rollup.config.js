import typescript from '@rollup/plugin-typescript';
import { defineConfig } from "rollup";

export default defineConfig({
	input: "scripts/index.ts",
	output: [
		{
			dir: "dist",
			format: "esm",
			preserveModules: true,
      		preserveModulesRoot: "scripts",
			entryFileNames: "[name].mjs"
		},
		{
			dir: "dist",
			format: "cjs",
			preserveModules: true,
      		preserveModulesRoot: "scripts",
			entryFileNames: "[name].cjs"
		},
	],
	plugins: [
		typescript({ tsconfig: "tsconfig.build.json" }),
	],
});
