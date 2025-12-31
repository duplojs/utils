import { pipe, type ExpectType } from "@scripts/common";
import { when } from "@scripts/common/when";
import { DArray } from "@scripts";

describe("lengthEqual", () => {
	it("predicate 2", () => {
		const value = ["alpha", "beta"];

		const predicate = DArray.lengthEqual(value, 2);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof value,
				[string, string],
				"strict"
			>;
		}
	});

	it("predicate 0", () => {
		const value = ["alpha", "beta"];

		const predicate = DArray.lengthEqual(value, 0);

		expect(predicate).toBe(false);

		if (predicate) {
			type check = ExpectType<
				typeof value,
				[],
				"strict"
			>;
		}
	});

	it("use in pipe", () => {
		const result = pipe(
			["alpha", "beta"],
			when(
				DArray.lengthEqual(2),
				(value) => {
					type check = ExpectType<
						typeof value,
						[string, string],
						"strict"
					>;

					return true;
				},
			),
		);

		expect(result).toStrictEqual(true);
	});
});
