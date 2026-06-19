import { DEither, pipe, type ExpectType } from "@scripts";

describe("unwrapSelectionOrThrow", () => {
	it("unwraps the payload when selector value is true", () => {
		const input = true
			? DEither.right("success", 42)
			: DEither.left("failure", "error");

		const result = DEither.unwrapSelectionOrThrow(input, {
			success: true,
			failure: false,
		});

		expect(result).toBe(42);

		type check = ExpectType<
			typeof result,
			42,
			"strict"
		>;
	});

	it("unwraps every selected information", () => {
		const input = true
			? DEither.left("failure", "error")
			: DEither.right("success", 42);

		const result = DEither.unwrapSelectionOrThrow(input, {
			success: true,
			failure: true,
		});

		expect(result).toBe("error");

		type check = ExpectType<
			typeof result,
			42 | "error",
			"strict"
		>;
	});

	it("throws HasNotSelectedInformationError when selector value is false", () => {
		const input = true
			? DEither.left("failure", "error")
			: DEither.right("success", 42);
		const selector = {
			success: true,
			failure: false,
		};

		expect(() => DEither.unwrapSelectionOrThrow(input, selector)).toThrow(
			DEither.HasNotSelectedInformationError,
		);

		try {
			DEither.unwrapSelectionOrThrow(input, selector);
		} catch (error) {
			expect(error).toBeInstanceOf(DEither.HasNotSelectedInformationError);

			if (error instanceof DEither.HasNotSelectedInformationError) {
				expect(error.message).toBe("Value information is not selected.");
				expect(error.value).toStrictEqual(input);
				expect(error.selector).toStrictEqual(selector);
			}
		}
	});

	it("throws HasNotSelectedInformationError when input has no information", () => {
		const selector = {};

		expect(() => DEither.unwrapSelectionOrThrow("value", selector)).toThrow(
			DEither.HasNotSelectedInformationError,
		);
	});

	it("unwraps boolean selector branches in the output type", () => {
		const shouldUnwrap = Boolean(1);
		const input = true
			? DEither.right("success", 42 as const)
			: DEither.left("failure", "error" as const);

		const result = DEither.unwrapSelectionOrThrow(input, {
			success: shouldUnwrap,
			failure: false,
		});

		expect(result).toBe(42);

		type check = ExpectType<
			typeof result,
			42,
			"strict"
		>;
	});

	it("throws when runtime boolean selector value is false", () => {
		const shouldUnwrap = Boolean(0);
		const input = true
			? DEither.right("success", 42 as const)
			: DEither.left("failure", "error" as const);

		expect(() => DEither.unwrapSelectionOrThrow(input, {
			success: shouldUnwrap,
			failure: true,
		})).toThrow(DEither.HasNotSelectedInformationError);
	});

	it("requires exactly one selector entry for every input information", () => {
		const input = true
			? DEither.right("success", 42)
			: DEither.left("failure", "error");

		// @ts-expect-error selector must handle all information values from input either
		DEither.unwrapSelectionOrThrow(input, {
			success: true,
		});

		// @ts-expect-error selector cannot contain unknown information values
		DEither.unwrapSelectionOrThrow(input, {
			success: true,
			failure: false,
			unexpected: true,
		});

		pipe(
			input,
			DEither.unwrapSelectionOrThrow(
				// @ts-expect-error curried selector cannot contain unknown information values
				{
					success: true,
					failure: false,
					unexpected: true,
				},
			),
		);
	});

	it("works in a pipe chain with the curried signature", () => {
		const result = pipe(
			true
				? DEither.right("ok", "value" as const)
				: DEither.left("fail", 0 as const),
			DEither.unwrapSelectionOrThrow({
				ok: true,
				fail: false,
			}),
		);

		expect(result).toBe("value");

		type check = ExpectType<
			typeof result,
			"value",
			"strict"
		>;
	});
});
