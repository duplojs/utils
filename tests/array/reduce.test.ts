import { DArray, pipe, type ExpectType } from "@scripts";

describe("reduce", () => {
	it("sum number", () => {
		const input = [1, 2, 3];

		const result = DArray.reduce(
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

	it("provides self reference equal to input", () => {
		const input = [1, 2, 3];
		const selfRefs: typeof input[] = [];

		const result = DArray.reduce(
			input,
			0,
			({ element, lastValue, next, self }) => {
				selfRefs.push(self);
				return next(lastValue + element);
			},
		);

		expect(selfRefs.every((ref) => ref === input)).toBe(true);
		expect(result).toBe(6);
	});

	it("array to objet", () => {
		const result = DArray.reduce(
			[1, 2, 3],
			DArray.reduceFrom<Record<number, null>>({}),
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
		const result = DArray.reduce(
			[1, 2, 3],
			DArray.reduceFrom<Record<number, null>>({}),
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
			Record<number, null> | {
				100: null;
			},
			"strict"
		>;
	});

	it("array push", () => {
		const result = DArray.reduce(
			[1, 2, 3],
			DArray.reduceFrom<number[]>([]),
			({ nextPush, lastValue, element }) => pipe(
				element,
				(value) => value + 1,
				(value) => nextPush(lastValue, value),
			),
		);

		expect(result).toStrictEqual([2, 3, 4]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3],
			DArray.reduce(
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
