import { DEither, type ExpectType, pipe } from "@scripts";

describe("whenIsNullishEmptyOtherwise", () => {
	it("preserves the normal when callback contract", () => {
		const input = true
			? null as null | undefined
			: "value" as const;
		const result = DEither.whenIsNullishEmptyOtherwise(
			input,
			(value) => {
				type check = ExpectType<
					typeof value,
					null | undefined,
					"strict"
				>;
				return "empty" as const;
			},
			(value) => {
				type check = ExpectType<
					typeof value,
					"value",
					"strict"
				>;
				return "filled" as const;
			},
		);

		expect(result).toBe("empty");
		type check = ExpectType<
			typeof result,
			"empty" | "filled",
			"strict"
		>;
	});

	it("passes the raw input to otherwise", () => {
		const input = "value" as const;
		const result = DEither.whenIsNullishEmptyOtherwise(input, (value) => value, (value) => {
			type check = ExpectType<
				typeof value,
				"value",
				"strict"
			>;
			expect(value).toBe(input);
			return value;
		});

		expect(result).toBe(input);
		type check = ExpectType<
			typeof result,
			"value",
			"strict"
		>;
	});

	it("supports its curried signature in pipe and keeps non-matching eithers raw", () => {
		const result = pipe(
			false
				? null
				: DEither.right("success", "value" as const),
			DEither.whenIsNullishEmptyOtherwise(
				(value) => value,
				(value) => {
					type check = ExpectType<
						typeof value,
						DEither.Right<"success", "value">,
						"strict"
					>;
					return value;
				},
			),
		);

		expect(result).toStrictEqual(DEither.right("success", "value"));
		type check = ExpectType<
			typeof result,
			null | DEither.Right<"success", "value">,
			"strict"
		>;
	});
});
