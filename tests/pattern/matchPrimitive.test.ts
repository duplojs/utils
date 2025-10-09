import { pipe, type ExpectType } from "@scripts/common";
import { DPattern } from "@scripts/index";

describe("pattern matchPrimitive", () => {
	it("use in pipe", () => {
		const result = pipe(
			10 as 10 | "car" | "train",
			DPattern.matchPrimitive(
				"car",
				(value) => {
					type checkValue = ExpectType<
						typeof value,
						"car",
						"strict"
					>;

					return 100;
				},
			),
			DPattern.matchPrimitive(
				[10, "train"],
				(value) => {
					type checkValue = ExpectType<
						typeof value,
						10 | "train",
						"strict"
					>;

					return 500;
				},
			),
			DPattern.exhaustive,
		);

		expect(result).toBe(500);

		type check = ExpectType<
			typeof result,
			100 | 500,
			"strict"
		>;
	});
});
