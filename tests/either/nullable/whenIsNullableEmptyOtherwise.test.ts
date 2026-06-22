import { DEither, type ExpectType, pipe } from "@scripts";

describe("whenIsNullableEmptyOtherwise", () => {
	it("preserves the normal when callback contract", () => {
		const input = true
			? null
			: "value" as const;
		const result = DEither.whenIsNullableEmptyOtherwise(
			input,
			(value) => {
				type check = ExpectType<
					typeof value,
					null,
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
		const result = DEither.whenIsNullableEmptyOtherwise(input, (value) => value, (value) => {
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
			DEither.whenIsNullableEmptyOtherwise(
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
