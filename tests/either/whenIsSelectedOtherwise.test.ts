import { DEither, type ExpectType, pipe } from "@scripts";

describe("whenIsSelectedOtherwise", () => {
	it("executes the selected callback with the unwrapped value", () => {
		const input = true
			? DEither.right("success", 42 as const)
			: DEither.left("failure", "error" as const);
		const result = DEither.whenIsSelectedOtherwise(
			input,
			{
				success: true,
				failure: false,
			},
			(value) => {
				type check = ExpectType<
					typeof value,
					42,
					"strict"
				>;
				return "selected" as const;
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

		expect(result).toBe("selected");
		type check = ExpectType<
			typeof result,
			"selected" | "otherwise",
			"strict"
		>;
	});

	it("passes the unselected either unchanged to otherwise", () => {
		const input = true
			? DEither.left("failure", "error" as const)
			: DEither.right("success", 42 as const);
		const result = DEither.whenIsSelectedOtherwise(
			input,
			{
				success: true,
				failure: false,
			},
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
			42 | DEither.Left<"failure", "error">,
			"strict"
		>;
	});

	it("supports its curried signature in pipe", () => {
		const result = pipe(
			true
				? DEither.right("success", 42 as const)
				: DEither.left("failure", "error" as const),
			DEither.whenIsSelectedOtherwise(
				{
					success: true,
					failure: false,
				},
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

	it("rejects additional selector keys in classic and curried signatures", () => {
		const input = true
			? DEither.right("success", 42 as const)
			: DEither.left("failure", "error" as const);
		const result = DEither.whenIsSelectedOtherwise(
			input,
			{
				success: true,
				failure: false,
			},
			(value) => value,
			(value) => value,
		);

		DEither.whenIsSelectedOtherwise(
			input,
			// @ts-expect-error selector cannot contain unknown information values
			{
				success: true,
				failure: false,
				unexpected: false,
			},
			(value) => value,
			(value) => value,
		);

		pipe(
			input,
			DEither.whenIsSelectedOtherwise(
				// @ts-expect-error selector cannot contain unknown information values
				{
					success: true,
					failure: false,
					unexpected: false,
				},
				(value) => value,
				(value) => value,
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
