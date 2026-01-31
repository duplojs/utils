import { type ExpectType, DPattern } from "@scripts";

describe("exhaustive", () => {
	it("returns the wrapped value", () => {
		const sample = { foo: 42 } as const;
		const patternResult = DPattern.result(sample);

		const extracted = DPattern.exhaustive(patternResult);

		expect(extracted).toBe(sample);

		type check = ExpectType<
			typeof extracted,
			typeof sample,
			"strict"
		>;
	});
});

