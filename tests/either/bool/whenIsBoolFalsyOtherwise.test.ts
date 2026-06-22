import { DEither, type ExpectType, pipe } from "@scripts";

describe("whenIsBoolFalsyOtherwise", () => {
	it("preserves the normal when callback contract", () => {
		const input = true
			? "" as const
			: "value" as const;
		const result = DEither.whenIsBoolFalsyOtherwise(
			input,
			(value) => {
				type check = ExpectType<
					typeof value,
					"",
					"strict"
				>;
				return "falsy" as const;
			},
			(value) => {
				type check = ExpectType<
					typeof value,
					"value",
					"strict"
				>;
				return "truthy" as const;
			},
		);

		expect(result).toBe("falsy");
		type check = ExpectType<
			typeof result,
			"falsy" | "truthy",
			"strict"
		>;
	});

	it("passes the raw input to otherwise", () => {
		const input = "value" as const;
		const result = DEither.whenIsBoolFalsyOtherwise(input, (value) => value, (value) => {
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
				? "" as const
				: DEither.right("success", "value" as const),
			DEither.whenIsBoolFalsyOtherwise(
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
			"" | DEither.Right<"success", "value">,
			"strict"
		>;
	});
});
