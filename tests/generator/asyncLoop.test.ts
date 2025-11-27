import { DArray, DGenerator, type ExpectType } from "@scripts";

describe("generator asyncLoop", () => {
	it("default usage", async() => {
		const result = DGenerator.asyncLoop(
			(
				{
					exit,
					next,
					previousOutput,
				}: DGenerator.GeneratorLoopParams<number>,
			) => {
				if (previousOutput === 9) {
					return Promise.resolve(exit(previousOutput + 1));
				} else if (typeof previousOutput === "number") {
					return Promise.resolve(next(previousOutput + 1));
				} else {
					return Promise.resolve(next(1));
				}
			},
		);

		await expect(DArray.from(result)).resolves.toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<number, unknown, unknown>,
			"strict"
		>;
	});

	it("use with skip", async() => {
		const result = DGenerator.asyncLoop(
			(
				{
					exit,
					next,
					count,
				}: DGenerator.GeneratorLoopParams<number>,
			) => {
				if (count === 9) {
					return Promise.resolve(exit());
				} else if (count < 2 || count > 5) {
					return Promise.resolve(next(count));
				} else {
					return Promise.resolve(next());
				}
			},
		);

		await expect(DArray.from(result)).resolves.toStrictEqual([0, 1, 6, 7, 8]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<number, unknown, unknown>,
			"strict"
		>;
	});
});

