import { type ExpectType } from "@scripts/common/types/expectType";
import { otherwise } from "@scripts/pattern/otherwise";
import { result } from "@scripts/pattern/result";

describe("otherwise", () => {
	it("unwraps pattern result values", () => {
		const sample = { foo: "bar" } as const;
		const patternResult = result(sample);

		const output = otherwise(patternResult);

		expect(output).toBe(sample);

		type check = ExpectType<
			typeof output,
			typeof sample,
			"strict"
		>;
	});

	it("returns non pattern values unchanged", () => {
		const fallback = "fallback";

		const output = otherwise(fallback);

		expect(output).toBe(fallback);

		type check = ExpectType<
			typeof output,
			typeof fallback,
			"strict"
		>;
	});
});

