import {duplojsEslintOpen, duplojsEslintTest} from "@duplojs/eslint";

export default [
	{
		...duplojsEslintTest,
		languageOptions: {
			...duplojsEslintTest.languageOptions,
			parserOptions: {
				...duplojsEslintTest.languageOptions.parserOptions,
				projectService: true,
			},
		},
		files: ["**/*.test.ts", "**/*.bench.ts", "test/**/*.ts"],
		ignores: ["**/*.d.ts"]
	},
	{
		...duplojsEslintOpen,
		languageOptions: {
			...duplojsEslintOpen.languageOptions,
			parserOptions: {
				...duplojsEslintOpen.languageOptions.parserOptions,
				projectService: true,
			},
		},
		files: ["**/*.ts"],
		ignores: ["**/*.test.ts", "**/*.bench.ts", "test/**/*.ts", "**/*.d.ts"],
	},
	{
		files: ["**/*.doc.ts"],
		rules: {
			"@typescript-eslint/no-confusing-void-expression": "off",
			"no-nested-ternary": "off",
		},
	},
	{
		ignores: ["coverage", "dist", "docs/public/*", "docs/.vitepress/cache/*"]
	}
];
