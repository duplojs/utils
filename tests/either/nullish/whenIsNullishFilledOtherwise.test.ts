import { DEither, type ExpectType, pipe } from "@scripts";

describe("whenIsNullishFilledOtherwise", () => {
	it("preserves the normal when callback contract", () => {
		const input = true
			? "value" as const
			: null as null | undefined;
		const result = DEither.whenIsNullishFilledOtherwise(
			input,
			(value) => {
				type check = ExpectType<
					typeof value,
					"value",
					"strict"
				>;
				return "filled" as const;
			},
			(value) => {
				type check = ExpectType<
					typeof value,
					null | undefined,
					"strict"
				>;
				return "empty" as const;
			},
		);

		expect(result).toBe("filled");
		type check = ExpectType<
			typeof result,
			"filled" | "empty",
			"strict"
		>;
	});

	it("passes the raw input to otherwise", () => {
		const input = null;
		const result = DEither.whenIsNullishFilledOtherwise(input, (value) => value, (value) => {
			type check = ExpectType<
				typeof value,
				null,
				"strict"
			>;
			expect(value).toBe(input);
			return value;
		});

		expect(result).toBeNull();
		type check = ExpectType<
			typeof result,
			null,
			"strict"
		>;
	});

	it("supports its curried signature in pipe and keeps non-matching eithers raw", () => {
		const result = pipe(
			false
				? "value" as const
				: DEither.left("failure", "error" as const),
			DEither.whenIsNullishFilledOtherwise(
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
