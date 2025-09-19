import { DArray, DGenerator, pipe, type ExpectType } from "@scripts/index";

describe("asyncFilter", () => {
	const input = new Set([{ type: "test" }, { type: "ok" }]);

	it("default usage", async() => {
		const result = DGenerator.asyncFilter(input, (element) => element.type === "test");

		await expect(DArray.from(result)).resolves.toStrictEqual([{ type: "test" }]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<
				{
					type: string;
				},
				unknown,
				unknown
			>,
			"strict"
		>;
	});

	it("default usage with predicate", async() => {
		const result = DGenerator.asyncFilter(["test", "ok"] as const, (element) => element === "test");

		await expect(DArray.from(result)).resolves.toStrictEqual(["test"]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<
				"test",
				unknown,
				unknown
			>,
			"strict"
		>;
	});

	it("use in pipe", async() => {
		const result = pipe(
			input,
			DGenerator.asyncFilter((element) => element.type === "test"),
		);

		await expect(DArray.from(result)).resolves.toStrictEqual([{ type: "test" }]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<
				{
					type: string;
				},
				unknown,
				unknown
			>,
			"strict"
		>;
	});

	it("use in pipe whit predicate", async() => {
		const result = pipe(
			input,
			DGenerator.map(({ type }) => type),
			DGenerator.asyncFilter((element) => element === "test"),
		);

		await expect(DArray.from(result)).resolves.toStrictEqual(["test"]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<"test", unknown, unknown>,
			"strict"
		>;
	});
});
