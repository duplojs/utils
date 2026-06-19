import { DEither, pipe, type ExpectType } from "@scripts";

describe("whenIsSelected", () => {
	it("should call the callback with the unwrapped selected value", () => {
		const input = true
			? DEither.right("success", 42 as const)
			: DEither.left("failure", "error" as const);
		const result = DEither.whenIsSelected(
			input,
			{
				success: true,
				failure: false,
			},
			(value) => {
				type check = ExpectType<typeof value, 42, "strict">;

				return value + 1;
			},
		);

		expect(result).toBe(43);

		type check = ExpectType<
			typeof result,
			number | DEither.Left<"failure", "error">,
			"strict"
		>;
	});

	it("should preserve an either whose information is not selected", () => {
		const input = true
			? DEither.left("failure", "error" as const)
			: DEither.right("success", 42 as const);
		const result = DEither.whenIsSelected(
			input,
			{
				success: true,
				failure: false,
			},
			(value) => value + 1,
		);

		expect(result).toStrictEqual(input);

		type check = ExpectType<
			typeof result,
			number | DEither.Left<"failure", "error">,
			"strict"
		>;
	});

	it("should keep runtime boolean selections in both possible output branches", () => {
		const shouldSelect = Boolean(1);
		const input = true
			? DEither.right("success", 42 as const)
			: DEither.left("failure", "error" as const);
		const result = DEither.whenIsSelected(
			input,
			{
				success: shouldSelect,
				failure: false,
			},
			(value) => {
				type check = ExpectType<typeof value, 42, "strict">;

				return "selected" as const;
			},
		);

		expect(result).toBe("selected");

		type check = ExpectType<
			typeof result,
			| "selected"
			| DEither.Right<"success", 42>
			| DEither.Left<"failure", "error">,
			"strict"
		>;
	});

	it("should return non-either inputs unchanged", () => {
		const result = DEither.whenIsSelected(
			"value" as const,
			{},
			(value) => value,
		);

		expect(result).toBe("value");

		type check = ExpectType<typeof result, "value", "strict">;
	});

	it("should work in pipe with the curried signature", () => {
		const result = pipe(
			true
				? DEither.right("success", 42 as const)
				: DEither.left("failure", "error" as const),
			DEither.whenIsSelected(
				{
					success: true,
					failure: false,
				},
				(value) => {
					type check = ExpectType<typeof value, 42, "strict">;

					return value + 1;
				},
			),
		);

		expect(result).toBe(43);

		type check = ExpectType<
			typeof result,
			number | DEither.Left<"failure", "error">,
			"strict"
		>;
	});

	it("should require exactly one selector entry for every information value", () => {
		const input = true
			? DEither.right("success", 42)
			: DEither.left("failure", "error");

		DEither.whenIsSelected(
			input,
			// @ts-expect-error selector must handle every input information value
			{
				success: true,
			},
			(value) => value,
		);

		DEither.whenIsSelected(
			input,
			// @ts-expect-error selector cannot contain unknown information values
			{
				success: true,
				failure: false,
				unexpected: true,
			},
			(value) => value,
		);

		expect(true).toBe(true);
	});
});
