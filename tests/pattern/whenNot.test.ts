import { DPattern, equal, pipe, type ExpectType } from "@scripts";

describe("pattern whenNot", () => {
	it("match", () => {
		const result = DPattern.whenNot(
			"laravel" as "duplojs" | "laravel",
			(value) => value === "duplojs",
			(value) => value,
		);

		expect(result).toStrictEqual(DPattern.result("laravel"));

		type check = ExpectType<
			typeof result,
			"duplojs" | DPattern.PatternResult<"laravel">,
			"strict"
		>;
	});

	it("match", () => {
		const result = DPattern.whenNot(
			"duplojs" as "duplojs" | "laravel",
			(value) => value === "duplojs",
			(value) => value,
		);

		expect(result).toBe("duplojs");

		type check = ExpectType<
			typeof result,
			"duplojs" | DPattern.PatternResult<"laravel">,
			"strict"
		>;
	});

	it("wraps unmatched input into pattern result", () => {
		const result = pipe(
			"duplojs" as "duplojs" | "laravel",
			DPattern.whenNot(
				(value) => value === "duplojs",
				(value) => {
					type checkValue = ExpectType<
						typeof value,
						"laravel",
						"strict"
					>;

					return {
						framework: value,
						matched: false as const,
					};
				},
			),
			DPattern.when(
				equal("duplojs"),
				(value) => {
					type checkValue = ExpectType<
						typeof value,
						"duplojs",
						"strict"
					>;

					return {
						framework: value,
						matched: false as const,
					};
				},
			),
			DPattern.exhaustive,
		);

		expect(result).toStrictEqual({
			framework: "duplojs",
			matched: false,
		});

		type check = ExpectType<
			typeof result,
			{
				framework: "duplojs";
				matched: false;
			} | {
				framework: "laravel";
				matched: false;
			},
			"strict"
		>;
	});
});
