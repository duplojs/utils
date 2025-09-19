import { DGenerator, pipe, type ExpectType } from "@scripts/index";

describe("generator reduce", () => {
	it("sum number", () => {
		const input = [1, 2, 3];

		const result = DGenerator.reduce(
			input,
			0,
			({ element, lastValue, next }) => next(element + lastValue),
		);

		expect(result).toBe(6);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("array to objet", () => {
		const result = DGenerator.reduce(
			[1, 2, 3],
			({ from }) => from<Record<number, null>>({}),
			({ element, lastValue, nextWithObject }) => nextWithObject(
				lastValue,
				{ [element.toString()]: null },
			),
		);

		expect(result).toStrictEqual({
			1: null,
			2: null,
			3: null,
		});

		type check = ExpectType<
			typeof result,
			Record<number, null>,
			"strict"
		>;
	});

	it("exit before end", () => {
		const result = DGenerator.reduce(
			[1, 2, 3],
			({ from }) => from<Record<number, null>>({}),
			({ element, lastValue, exit, nextWithObject }) => element > 1
				? exit({ 100: null })
				: nextWithObject(
					lastValue,
					{ [element.toString()]: null },
				),
		);

		expect(result).toStrictEqual({
			100: null,
		});

		type check = ExpectType<
			typeof result,
			Record<number, null>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3],
			DGenerator.reduce(
				0,
				({ element, lastValue, next }) => next(element + lastValue),
			),
		);

		expect(result).toBe(6);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
