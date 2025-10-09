import { DGenerator, pipe } from "@scripts/index";

describe("generator execute", () => {
	const input = new Set([{ type: "test" }, { type: "ok" }]);

	it("default usage", () => {
		const result: string[] = [];

		DGenerator.execute(
			DGenerator.map(input, ({ type }) => result.push(type)),
		);

		expect(result).toStrictEqual(["test", "ok"]);
	});

	it("default usage async ", async() => {
		const result: string[] = [];

		await DGenerator.execute(
			DGenerator.asyncMap(input, ({ type }) => Promise.resolve(result.push(type))),
		);

		expect(result).toStrictEqual(["test", "ok"]);
	});

	it("use in pipe", () => {
		const result: string[] = [];

		pipe(
			input,
			DGenerator.map(({ type }) => result.push(type)),
			DGenerator.execute,
		);

		expect(result).toStrictEqual(["test", "ok"]);
	});
});
