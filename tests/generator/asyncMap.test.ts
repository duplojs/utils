import { DArray, DGenerator, pipe, type ExpectType } from "@scripts/index";

describe("asyncMap", () => {
	const input = new Set([{ type: "test" }, { type: "ok" }]);

	it("default usage", async() => {
		const result = DGenerator.asyncMap(input, ({ type }) => Promise.resolve(type));

		await expect(DArray.from(result)).resolves.toStrictEqual(["test", "ok"]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<string, unknown, unknown>,
			"strict"
		>;
	});

	it("use in pipe", async() => {
		const result = pipe(
			input,
			DGenerator.asyncMap(({ type }) => Promise.resolve(type)),
		);

		await expect(DArray.from(result)).resolves.toStrictEqual(["test", "ok"]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<string, unknown, unknown>,
			"strict"
		>;
	});
});
