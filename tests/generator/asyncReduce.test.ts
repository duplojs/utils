import { DGenerator, pipe, type ExpectType } from "@scripts/index";

describe("generator asyncReduce", () => {
	it("sum number", async() => {
		const input = [1, 2, 3];

		const result = DGenerator.asyncReduce(
			input,
			0,
			({ element, lastValue, next }) => next(element + lastValue),
		);

		await expect(result).resolves.toBe(6);

		type check = ExpectType<
			typeof result,
			Promise<number>,
			"strict"
		>;
	});

	it("array to objet", async() => {
		const result = DGenerator.asyncReduce(
			[1, 2, 3],
			DGenerator.reduceFrom<Record<number, null>>({}),
			({ element, lastValue, nextWithObject }) => nextWithObject(
				lastValue,
				{ [element.toString()]: null },
			),
		);

		await expect(result).resolves.toStrictEqual({
			1: null,
			2: null,
			3: null,
		});

		type check = ExpectType<
			typeof result,
			Promise<Record<number, null>>,
			"strict"
		>;
	});

	it("exit before end", async() => {
		const result = DGenerator.asyncReduce(
			[1, 2, 3],
			DGenerator.reduceFrom<Record<number, null>>({}),
			({ element, lastValue, exit, nextWithObject }) => element > 1
				? exit({ 100: null })
				: nextWithObject(
					lastValue,
					{ [element.toString()]: null },
				),
		);

		await expect(result).resolves.toStrictEqual({
			100: null,
		});

		type check = ExpectType<
			typeof result,
			Promise<Record<number, null>>,
			"strict"
		>;
	});

	it("use in pipe", async() => {
		const result = pipe(
			[1, 2, 3],
			DGenerator.asyncReduce(
				0,
				({ element, lastValue, next }) => next(element + lastValue),
			),
		);

		await expect(result).resolves.toBe(6);

		type check = ExpectType<
			typeof result,
			Promise<number>,
			"strict"
		>;
	});
});
