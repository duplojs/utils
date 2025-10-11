import { equal, forward, pipe, type ExpectType } from "@scripts/common";
import { DPattern } from "@scripts/index";

describe("pattern when", () => {
	it("match", () => {
		const result = DPattern.when(
			"duplojs" as "duplojs" | "laravel",
			(value) => value === "duplojs",
			(value) => value,
		);

		expect(result).toStrictEqual(DPattern.result("duplojs"));

		type check = ExpectType<
			typeof result,
			"laravel" | DPattern.PatternResult<"duplojs">,
			"strict"
		>;
	});

	it("match", () => {
		const result = DPattern.when(
			"laravel" as "duplojs" | "laravel",
			(value) => value === "duplojs",
			(value) => value,
		);

		expect(result).toBe("laravel");

		type check = ExpectType<
			typeof result,
			"laravel" | DPattern.PatternResult<"duplojs">,
			"strict"
		>;
	});

	it("wraps matched input into pattern result", () => {
		const result = pipe(
			"duplojs" as "duplojs" | "laravel",
			DPattern.when(
				(value) => value === "duplojs",
				(value) => {
					type checkValue = ExpectType<
						typeof value,
						"duplojs",
						"strict"
					>;

					return {
						framework: value,
						matched: true as const,
					};
				},
			),
			DPattern.when(
				equal("laravel"),
				(value) => {
					type checkValue = ExpectType<
						typeof value,
						"laravel",
						"strict"
					>;

					return {
						framework: value,
						matched: true as const,
					};
				},
			),
			DPattern.exhaustive,
		);

		expect(result).toStrictEqual({
			framework: "duplojs",
			matched: true,
		});

		type check = ExpectType<
			typeof result,
			{
				framework: "duplojs";
				matched: true;
			} | {
				framework: "laravel";
				matched: true;
			},
			"strict"
		>;
	});
});
