import { DEither, type ExpectType, pipe } from "@scripts";

describe("whenIsOptionalFilledOtherwise", () => {
	it("preserves the normal when callback contract", () => {
		const input = true
			? "value" as const
			: undefined;
		const result = DEither.whenIsOptionalFilledOtherwise(
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
					undefined,
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
		const input = undefined;
		const result = DEither.whenIsOptionalFilledOtherwise(input, () => "filled" as const, (value) => {
			type check = ExpectType<
				typeof value,
				undefined,
				"strict"
			>;
			expect(value).toBe(input);
			return value;
		});

		expect(result).toBeUndefined();
		type check = ExpectType<
			typeof result,
			"filled" | undefined,
			"strict"
		>;
	});

	it("supports its curried signature in pipe and keeps non-matching eithers raw", () => {
		const result = pipe(
			false
				? "value" as const
				: DEither.left("failure", "error" as const),
			DEither.whenIsOptionalFilledOtherwise(
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
