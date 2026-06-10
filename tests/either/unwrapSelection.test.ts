import { DEither, pipe, type ExpectType } from "@scripts";

describe("unwrapSelection", () => {
	it("unwraps the payload when selector value is true", () => {
		const input = true
			? DEither.right("success", 42)
			: DEither.left("failure", "error");

		const result = DEither.unwrapSelection(input, {
			success: true,
			failure: false,
		});

		expect(result).toBe(42);

		type check = ExpectType<
			typeof result,
			42 | DEither.Left<"failure", "error">,
			"strict"
		>;
	});

	it("returns the input unchanged when selector value is false", () => {
		const input = true
			? DEither.left("failure", "error")
			: DEither.right("success", 42);

		const result = DEither.unwrapSelection(input, {
			success: true,
			failure: false,
		});

		expect(result).toStrictEqual(input);

		type check = ExpectType<
			typeof result,
			42 | DEither.Left<"failure", "error">,
			"strict"
		>;
	});

	it("unwraps every selected information", () => {
		const input = true
			? DEither.left("failure", "error")
			: DEither.right("success", 42);

		const result = DEither.unwrapSelection(input, {
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

	it("keeps boolean selector branches as wrapped or unwrapped in the output type", () => {
		const shouldUnwrap = Boolean(1);
		const input = true
			? DEither.right("success", 42 as const)
			: DEither.left("failure", "error" as const);

		const result = DEither.unwrapSelection(input, {
			success: shouldUnwrap,
			failure: false,
		});

		expect(result).toBe(42);

		type check = ExpectType<
			typeof result,
			| 42
			| DEither.Right<"success", 42>
			| DEither.Left<"failure", "error">,
			"strict"
		>;
	});

	it("uses the runtime boolean selector value", () => {
		const shouldUnwrap = Boolean(0);
		const input = true
			? DEither.right("success", 42 as const)
			: DEither.left("failure", "error" as const);

		const result = DEither.unwrapSelection(input, {
			success: shouldUnwrap,
			failure: true,
		});

		expect(result).toStrictEqual(input);

		type check = ExpectType<
			typeof result,
			| 42
			| "error"
			| DEither.Right<"success", 42>,
			"strict"
		>;
	});

	it("returns non either values unchanged", () => {
		const input = "value";

		const result = DEither.unwrapSelection(input, {});

		expect(result).toBe("value");

		type check = ExpectType<
			typeof result,
			"value",
			"strict"
		>;
	});

	it("requires the selector to handle every input information", () => {
		const input = true
			? DEither.right("success", 42)
			: DEither.left("failure", "error");

		// @ts-expect-error selector must handle all information values from input either
		DEither.unwrapSelection(input, {
			success: true,
		});
	});

	it("works in a pipe chain with the curried signature", () => {
		const result = pipe(
			true
				? DEither.right("ok", "value" as const)
				: DEither.left("fail", 0 as const),
			DEither.unwrapSelection({
				ok: true,
				fail: false,
			}),
		);

		expect(result).toBe("value");

		type check = ExpectType<
			typeof result,
			"value" | DEither.Left<"fail", 0>,
			"strict"
		>;
	});
});
