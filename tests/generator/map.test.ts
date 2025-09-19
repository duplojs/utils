import { DGenerator, pipe, type ExpectType } from "@scripts/index";

describe("map", () => {
	const input = new Set([{ type: "test" }, { type: "ok" }]);

	it("default usage", () => {
		const result = DGenerator.map(input, ({ type }) => type);

		expect([...result]).toStrictEqual(["test", "ok"]);

		type check = ExpectType<
			typeof result,
			Generator<string, unknown, unknown>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			input,
			DGenerator.map(({ type }) => type),
		);

		expect([...result]).toStrictEqual(["test", "ok"]);

		type check = ExpectType<
			typeof result,
			Generator<string, unknown, unknown>,
			"strict"
		>;
	});
});
