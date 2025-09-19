import { DArray, DGenerator, pipe, type ExpectType } from "@scripts/index";

describe("filter", () => {
	const input = new Set([{ type: "test" }, { type: "ok" }]);

	it("default usage", () => {
		const result = DGenerator.filter(input, (element) => element.type === "test");

		expect(DArray.from(result)).toStrictEqual([{ type: "test" }]);

		type check = ExpectType<
			typeof result,
			Generator<
				{
					type: string;
				},
				unknown,
				unknown
			>,
			"strict"
		>;
	});

	it("default usage with predicate", () => {
		const result = DGenerator.filter(["test", "ok"] as const, (element) => element === "test");

		expect(DArray.from(result)).toStrictEqual(["test"]);

		type check = ExpectType<
			typeof result,
			Generator<
				"test",
				unknown,
				unknown
			>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			input,
			DGenerator.filter((element) => element.type === "test"),
		);

		expect(DArray.from(result)).toStrictEqual([{ type: "test" }]);

		type check = ExpectType<
			typeof result,
			Generator<
				{
					type: string;
				},
				unknown,
				unknown
			>,
			"strict"
		>;
	});

	it("use in pipe whit predicate", () => {
		const result = pipe(
			input,
			DGenerator.map(({ type }) => type),
			DGenerator.filter((element) => element === "test"),
		);

		expect(DArray.from(result)).toStrictEqual(["test"]);

		type check = ExpectType<
			typeof result,
			Generator<"test", unknown, unknown>,
			"strict"
		>;
	});
});
