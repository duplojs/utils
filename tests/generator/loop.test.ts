import { DArray, DGenerator, type ExpectType } from "@scripts";

describe("", () => {
	it("generator loop", () => {
		const result = DGenerator.loop(
			(
				{
					exit,
					next,
					previousOutput,
				}: DGenerator.GeneratorLoopParams<number>,
			) => {
				if (previousOutput === 9) {
					return exit(previousOutput + 1);
				} else if (typeof previousOutput === "number") {
					return next(previousOutput + 1);
				} else {
					return next(1);
				}
			},
		);

		expect(DArray.from(result)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

		type check = ExpectType<
			typeof result,
			Generator<number, unknown, unknown>,
			"strict"
		>;
	});

	it("use with skip", () => {
		const result = DGenerator.loop(
			(
				{
					exit,
					next,
					count,
				}: DGenerator.GeneratorLoopParams<number>,
			) => {
				if (count === 9) {
					return exit();
				} else if (count < 2 || count > 5) {
					return next(count);
				} else {
					return next();
				}
			},
		);

		expect(DArray.from(result)).toStrictEqual([0, 1, 6, 7, 8]);

		type check = ExpectType<
			typeof result,
			Generator<number, unknown, unknown>,
			"strict"
		>;
	});
});
