import { DArray, pipe, type ExpectType } from "@scripts/index";

describe("reduceRight", () => {
	it("concat string", () => {
		const input = ["a", "b", "c"];

		const result = DArray.reduceRight(
			input,
			"",
			({ element, lastValue, next }) => next(lastValue + element),
		);

		expect(result).toBe("cba");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("array to objet", () => {
		const result = DArray.reduceRight(
			["one", "two", "three"],
			({ from }) => from<Record<string, null>>({}),
			({ element, lastValue, index, nextWithObject }) => nextWithObject(
				lastValue,
				{ [`${element}${index}`]: null },
			),
		);

		expect(result).toStrictEqual({
			three2: null,
			two1: null,
			one0: null,
		});

		type check = ExpectType<
			typeof result,
			Record<string, null>,
			"strict"
		>;
	});

	it("exit before end", () => {
		const result = DArray.reduceRight(
			[1, 2, 3],
			({ from }) => from<Record<number, null>>({}),
			({ element, lastValue, exit, nextWithObject }) => element < 3
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
			["a", "b", "c"],
			DArray.reduceRight(
				"",
				({ element, lastValue, next }) => next(lastValue + element),
			),
		);

		expect(result).toBe("cba");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
