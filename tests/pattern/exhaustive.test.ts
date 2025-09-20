import { type ExpectType } from "@scripts/common/types/expectType";
import { exhaustive } from "@scripts/pattern/exhaustive";
import { result } from "@scripts/pattern/result";

describe("exhaustive", () => {
	it("returns the wrapped value", () => {
		const sample = { foo: 42 } as const;
		const patternResult = result(sample);

		const extracted = exhaustive(patternResult);

		expect(extracted).toBe(sample);

		type check = ExpectType<
			typeof extracted,
			typeof sample,
			"strict"
		>;
	});
});

