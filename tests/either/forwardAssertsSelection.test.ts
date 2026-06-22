import { DEither, pipe, type ExpectType } from "@scripts";

describe("forwardAssertsSelection", () => {
	it("forwards a selected Either without unwrapping it", () => {
		const input = true
			? DEither.right("success", 42 as const)
			: DEither.left("failure", "error" as const);

		const result = DEither.forwardAssertsSelection(input, {
			success: true,
			failure: false,
		});

		expect(result).toBe(input);

		type check = ExpectType<
			typeof result,
			DEither.Right<"success", 42>,
			"strict"
		>;
	});

	it("throws when the Either information is not selected", () => {
		const input = DEither.left("failure", "error");
		const selector = {
			failure: false,
		};

		expect(() => DEither.forwardAssertsSelection(input, selector)).toThrow(
			DEither.ForwardAssertsSelectionError,
		);

		try {
			DEither.forwardAssertsSelection(input, selector);
		} catch (error) {
			expect(error).toBeInstanceOf(DEither.ForwardAssertsSelectionError);

			if (error instanceof DEither.ForwardAssertsSelectionError) {
				expect(error.value).toBe(input);
				expect(error.selector).toBe(selector);
				expect(error.message).toBe("Either information is not selected.");
			}
		}
	});

	it("forwards a non-Either value", () => {
		const input = "value" as const;
		const result = DEither.forwardAssertsSelection(input, {});

		expect(result).toBe(input);

		type check = ExpectType<typeof result, "value", "strict">;
	});

	it("requires an exhaustive selector and rejects extra keys", () => {
		const input = true
			? DEither.right("success", 42)
			: DEither.left("failure", "error");

		// @ts-expect-error selector must handle all information values
		DEither.forwardAssertsSelection(input, { success: true });

		// @ts-expect-error selector cannot contain unknown information values
		DEither.forwardAssertsSelection(input, {
			success: true,
			failure: false,
			unexpected: true,
		});
	});

	it("works with the curried signature in a pipe", () => {
		const result = pipe(
			true
				? DEither.right("success", 42 as const)
				: DEither.left("failure", "error" as const),
			DEither.forwardAssertsSelection({
				success: true,
				failure: false,
			}),
		);

		expect(DEither.rightKind.has(result)).toBe(true);

		type check = ExpectType<
			typeof result,
			DEither.Right<"success", 42>,
			"strict"
		>;
	});
});
