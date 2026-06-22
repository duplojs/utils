import { DEither, type ExpectType, pipe } from "@scripts";

describe("whenIsBoolTruthyOtherwise", () => {
	it("preserves the normal when callback contract", () => {
		const input = true
			? "value" as const
			: "" as const;
		const result = DEither.whenIsBoolTruthyOtherwise(
			input,
			(value) => {
				type check = ExpectType<
					typeof value,
					"value",
					"strict"
				>;
				return "truthy" as const;
			},
			(value) => {
				type check = ExpectType<
					typeof value,
					"",
					"strict"
				>;
				return "falsy" as const;
			},
		);

		expect(result).toBe("truthy");
		type check = ExpectType<
			typeof result,
			"truthy" | "falsy",
			"strict"
		>;
	});

	it("passes the raw input to otherwise", () => {
		const input = "" as const;
		const result = DEither.whenIsBoolTruthyOtherwise(input, (value) => value, (value) => {
			type check = ExpectType<
				typeof value,
				"",
				"strict"
			>;
			expect(value).toBe(input);
			return value;
		});

		expect(result).toBe(input);
		type check = ExpectType<
			typeof result,
			"",
			"strict"
		>;
	});

	it("supports its curried signature in pipe and keeps non-matching eithers raw", () => {
		const result = pipe(
			false
				? "value" as const
				: DEither.left("failure", "error" as const),
			DEither.whenIsBoolTruthyOtherwise(
				(value) => value,
				(value) => {
					type check = ExpectType<
						typeof value,
						DEither.Left<"failure", "error">,
						"strict"
					>;
					return value;
				},
			),
		);

		expect(result).toStrictEqual(DEither.left("failure", "error"));
		type check = ExpectType<
			typeof result,
			"value" | DEither.Left<"failure", "error">,
			"strict"
		>;
	});
});
