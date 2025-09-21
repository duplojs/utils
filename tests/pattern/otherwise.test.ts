import { pipe } from "@scripts/common";
import { type ExpectType } from "@scripts/common/types/expectType";
import { DPattern, DString } from "@scripts/index";

describe("otherwise", () => {
	it("not match on when", () => {
		const result = pipe(
			"test" as "titi" | "test",
			DPattern.whenPrimitive(
				"titi",
				() => 50,
			),
			DPattern.otherwise(
				(value) => {
					type check = ExpectType<
						typeof value,
						"test",
						"strict"
					>;

					return DString.toUpperCase(value);
				},
			),
		);

		expect(result).toStrictEqual("TEST");

		type check = ExpectType<
			typeof result,
			"TEST" | 50,
			"strict"
		>;
	});

	it("match on when and skip ", () => {
		const result = pipe(
			"test" as "titi" | "test",
			DPattern.whenPrimitive(
				"test",
				() => 50,
			),
			DPattern.otherwise(DString.toUpperCase),
		);

		expect(result).toStrictEqual(50);

		type check = ExpectType<
			typeof result,
			"TITI" | 50,
			"strict"
		>;
	});
});

