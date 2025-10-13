import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import tscAlias from "rollup-plugin-tsc-alias";
import { defineConfig } from "rollup";
import { generateMetadataPlugin } from "./rollup-plugins/generate-metadata.js";

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
	treeshake: {
		moduleSideEffects: false,
	},
	plugins: [
		del({ targets: "dist" }),
		typescript({ tsconfig: "tsconfig.build.json" }),
		tscAlias({ configFile: "tsconfig.build.json" }),
		generateMetadataPlugin(),
	],
});
