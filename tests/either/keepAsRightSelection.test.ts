import { DEither, type ExpectType, pipe } from "@scripts";

describe("keepAsRightSelection", () => {
	it("keeps a selected right as right", () => {
		const input = DEither.right("success", 42) as DEither.Right<"success", 42> | DEither.Left<"failure", "error">;

		const result = DEither.keepAsRightSelection(input, {
			success: true,
			failure: false,
		});

		expect(result).toBe(input);
		expect(DEither.isRight(result)).toBe(true);

		type check = ExpectType<
			typeof result,
			DEither.Right<"success", 42> | DEither.Left<"failure", "error">,
			"strict"
		>;
	});

	it("converts a selected left to right", () => {
		const input = DEither.left("failure", "error") as DEither.Left<"failure", "error"> | DEither.Right<"success", 42>;

		const result = DEither.keepAsRightSelection(input, {
			success: false,
			failure: true,
		});

		expect(result).toStrictEqual(DEither.right("failure", "error"));
		expect(DEither.isRight(result)).toBe(true);

		type check = ExpectType<
			typeof result,
			DEither.Right<"failure", "error"> | DEither.Left<"success", 42>,
			"strict"
		>;
	});

	it("converts an unselected right to left", () => {
		const input = DEither.right("success", 42) as DEither.Right<"success", 42> | DEither.Left<"failure", "error">;

		const result = DEither.keepAsRightSelection(input, {
			success: false,
			failure: true,
		});

		expect(result).toStrictEqual(DEither.left("success", 42));
		expect(DEither.isLeft(result)).toBe(true);

		type check = ExpectType<
			typeof result,
			DEither.Left<"success", 42> | DEither.Right<"failure", "error">,
			"strict"
		>;
	});

	it("keeps an unselected left as left", () => {
		const input = DEither.left("failure", "error") as DEither.Left<"failure", "error"> | DEither.Right<"success", 42>;

		const result = DEither.keepAsRightSelection(input, {
			success: true,
			failure: false,
		});

		expect(result).toBe(input);
		expect(DEither.isLeft(result)).toBe(true);

		type check = ExpectType<
			typeof result,
			DEither.Left<"failure", "error"> | DEither.Right<"success", 42>,
			"strict"
		>;
	});

	it("keeps runtime boolean selector branches in both possible output branches", () => {
		const shouldKeepAsRight = Boolean(1);
		const input = DEither.left("failure", "error") as DEither.Left<"failure", "error"> | DEither.Right<"success", 42>;

		const result = DEither.keepAsRightSelection(input, {
			success: false,
			failure: shouldKeepAsRight,
		});

		expect(result).toStrictEqual(DEither.right("failure", "error"));
		expect(DEither.isRight(result)).toBe(true);

		type check = ExpectType<
			typeof result,
			| DEither.Right<"failure", "error">
			| DEither.Left<"success", 42>,
			"strict"
		>;
	});

	it("returns non either values unchanged", () => {
		const result = DEither.keepAsRightSelection("value" as const, {});

		expect(result).toBe("value");

		type check = ExpectType<
			typeof result,
			"value",
			"strict"
		>;
	});

	it("works in a pipe chain with the curried signature", () => {
		const input = DEither.left("fail", 0) as DEither.Left<"fail", 0> | DEither.Right<"ok", "value">;

		const result = pipe(
			input,
			DEither.keepAsRightSelection({
				ok: false,
				fail: true,
			}),
		);

		expect(result).toStrictEqual(DEither.right("fail", 0));
		expect(DEither.isRight(result)).toBe(true);

		type check = ExpectType<
			typeof result,
			DEither.Right<"fail", 0> | DEither.Left<"ok", "value">,
			"strict"
		>;
	});

	it("requires exactly one selector entry for every input information", () => {
		const input = DEither.right("success", 42) as DEither.Right<"success", 42> | DEither.Left<"failure", "error">;

		// @ts-expect-error selector must handle all information values from input either
		DEither.keepAsRightSelection(input, {
			success: true,
		});

		// @ts-expect-error selector cannot contain unknown information values
		DEither.keepAsRightSelection(input, {
			success: true,
			failure: false,
			unexpected: true,
		});

		pipe(
			input,
			DEither.keepAsRightSelection(
				// @ts-expect-error curried selector cannot contain unknown information values
				{
					success: true,
					failure: false,
					unexpected: true,
				},
			),
		);
	});
});
