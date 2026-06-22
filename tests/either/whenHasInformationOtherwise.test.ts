import { DEither, type ExpectType, pipe } from "@scripts";

describe("whenHasInformationOtherwise", () => {
	it("executes the matching callback with the unwrapped value", () => {
		const input = true
			? DEither.right("success", 42 as const)
			: DEither.left("failure", "error" as const);
		const result = DEither.whenHasInformationOtherwise(
			input,
			"success",
			(value) => {
				type check = ExpectType<
					typeof value,
					42,
					"strict"
				>;
				return "matched" as const;
			},
			(value) => {
				type check = ExpectType<
					typeof value,
					DEither.Left<"failure", "error">,
					"strict"
				>;
				return "otherwise" as const;
			},
		);

		expect(result).toBe("matched");
		type check = ExpectType<
			typeof result,
			"matched" | "otherwise",
			"strict"
		>;
	});

	it("passes a non-matching either to otherwise without unwrapping it", () => {
		const input = DEither.left("failure", "error" as const);
		const result = DEither.whenHasInformationOtherwise(
			input,
			[] as const,
			(value) => value,
			(value) => {
				type check = ExpectType<
					typeof value,
					DEither.Left<"failure", "error">,
					"strict"
				>;
				expect(value).toBe(input);
				return value;
			},
		);

		expect(result).toBe(input);
		type check = ExpectType<
			typeof result,
			DEither.Left<"failure", "error">,
			"strict"
		>;
	});

	it("supports its curried signature in pipe", () => {
		const result = pipe(
			true
				? DEither.right("success", 42 as const)
				: DEither.left("failure", "error" as const),
			DEither.whenHasInformationOtherwise(
				["success"],
				(value) => {
					type check = ExpectType<
						typeof value,
						42,
						"strict"
					>;
					return value;
				},
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

		expect(result).toBe(42);
		type check = ExpectType<
			typeof result,
			42 | DEither.Left<"failure", "error">,
			"strict"
		>;
	});
});
