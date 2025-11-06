import { pipe } from "@scripts/common";
import { DArray } from "@scripts";
import { when, type ExpectType } from "dist";

describe("notIncludes", () => {
	const input = [1 as const, "", { test: 10 }];

	it("value is not included", () => {
		const predicate = DArray.notIncludes(input, 1);

		expect(predicate).toBe(false);

		if (predicate) {
			type Check = ExpectType<
				typeof input,
				(string | {
					test: number;
				})[],
				"strict"
			>;
		}
	});

	it("value is included", () => {
		expect(DArray.notIncludes(input as (1 | 2)[], 2)).toBe(true);
	});

	it("use in pipe", () => {
		const result = pipe(
			input,
			when(
				DArray.notIncludes(1),
				(input) => {
					type Check = ExpectType<
				typeof input,
						(string | {
							test: number;
						})[],
						"strict"
					>;
					return 10;
				},
			),
		);

		expect(result).toBe(input);
	});
});
