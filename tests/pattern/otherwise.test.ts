import { pipe } from "@scripts/common";
import { type ExpectType } from "@scripts/common/types/expectType";
import { DArray, DPattern } from "@scripts/index";

describe("otherwise", () => {
	it("not match on when", () => {
		const result = pipe(
			["test"],
			DPattern.when(
				DArray.includes("toto"),
				() => 50,
			),
			DPattern.otherwise(
				(value) => {
					type check = ExpectType<
						typeof value,
						readonly string[],
						"strict"
					>;

					return DArray.first(value);
				},
			),
		);

		expect(result).toStrictEqual("test");

		type check = ExpectType<
			typeof result,
			string | 50 | undefined,
			"strict"
		>;
	});

	it("match on when and skip ", () => {
		const result = pipe(
			["test"],
			DPattern.when(
				DArray.includes("test"),
				() => 50,
			),
			DPattern.otherwise(DArray.first),
		);

		expect(result).toStrictEqual(50);

		type check = ExpectType<
			typeof result,
			string | 50 | undefined,
			"strict"
		>;
	});
});

