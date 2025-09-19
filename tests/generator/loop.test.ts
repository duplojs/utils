import { DArray, DGenerator } from "@scripts/index";

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
});
