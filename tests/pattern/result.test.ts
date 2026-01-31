import { type ExpectType, keyKindPrefix, wrapValue, DPattern } from "@scripts";

describe("Pattern result", () => {
	it("wraps value and tags with pattern-result kind", () => {
		const input = "test" as const;
		const patternResult = DPattern.result(input);

		expect(patternResult).toStrictEqual({
			[`${keyKindPrefix}pattern-result`]: null,
			...wrapValue(input),
		});

		type check = ExpectType<
			typeof patternResult,
			DPattern.PatternResult<typeof input>,
			"strict"
		>;
	});

	it("identifies pattern results via type guard", () => {
		const sample = { foo: 42 } as const;
		const patternResult = DPattern.result(sample);
		const notPattern = { value: sample };

		expect(DPattern.isResult(patternResult)).toBe(true);
		expect(DPattern.isResult(notPattern)).toBe(false);

		const unionPattern: DPattern.PatternResult<typeof sample> | typeof notPattern = patternResult;

		if (DPattern.isResult(unionPattern)) {
			type check = ExpectType<
				typeof unionPattern,
				DPattern.PatternResult<typeof sample>,
				"strict"
			>;
		}

		const unionNotPattern: DPattern.PatternResult<typeof sample> | typeof notPattern = notPattern;

		if (!DPattern.isResult(unionNotPattern)) {
			type check = ExpectType<
				typeof unionNotPattern,
				typeof notPattern,
				"strict"
			>;
		}
	});
});
