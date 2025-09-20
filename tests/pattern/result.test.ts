import { type ExpectType } from "@scripts/common/types/expectType";
import { isResult, result, type PatternResult } from "@scripts/pattern/result";

describe("Pattern result", () => {
	it("wraps value and tags with pattern-result kind", () => {
		const input = "test" as const;
		const patternResult = result(input);

		expect(patternResult).toStrictEqual({
			"kind-pattern-result": null,
			value: input,
		});

		type check = ExpectType<
			typeof patternResult,
			PatternResult<typeof input>,
			"strict"
		>;
	});

	it("identifies pattern results via type guard", () => {
		const sample = { foo: 42 } as const;
		const patternResult = result(sample);
		const notPattern = { value: sample };

		expect(isResult(patternResult)).toBe(true);
		expect(isResult(notPattern)).toBe(false);

		const unionPattern: PatternResult<typeof sample> | typeof notPattern = patternResult;

		if (isResult(unionPattern)) {
			type check = ExpectType<
				typeof unionPattern,
				PatternResult<typeof sample>,
				"strict"
			>;
		}

		const unionNotPattern: PatternResult<typeof sample> | typeof notPattern = notPattern;

		if (!isResult(unionNotPattern)) {
			type check = ExpectType<
				typeof unionNotPattern,
				typeof notPattern,
				"strict"
			>;
		}
	});
});
