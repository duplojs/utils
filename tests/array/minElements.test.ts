import { pipe, type ExpectType } from "@scripts/common";
import { when } from "@scripts/common/when";
import { DArray } from "@scripts/index";

describe("minElements", () => {
	it("predicate 10", () => {
		const value = ["string"];

		const predicate = DArray.minElements(value, 10);

		expect(predicate).toBe(false);

		if (predicate) {
			type check = ExpectType<
				typeof value,
				[string, string, string, string, string, string, string, string, string, string, ...string[]],
				"strict"
			>;
		}
	});

	it("use in pipe", () => {
		const result = pipe(
			["string"],
			when(
				DArray.minElements(10),
				(value) => {
					type check = ExpectType<
						typeof value,
						[string, string, string, string, string, string, string, string, string, string, ...string[]],
						"strict"
					>;

					return true;
				},
			),
		);

		expect(result).toStrictEqual(["string"]);
	});
});
