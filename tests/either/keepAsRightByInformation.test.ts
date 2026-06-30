import { DEither, type ExpectType, pipe } from "@scripts";

describe("keepAsRightByInformation", () => {
	it("keeps a selected right as right", () => {
		const input = DEither.right("success", 42) as DEither.Right<"success", 42> | DEither.Left<"failure", "error">;

		const result = DEither.keepAsRightByInformation(input, "success");

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

		const result = DEither.keepAsRightByInformation(input, "failure");

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

		const result = DEither.keepAsRightByInformation(input, "failure");

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

		const result = DEither.keepAsRightByInformation(input, "success");

		expect(result).toBe(input);
		expect(DEither.isLeft(result)).toBe(true);

		type check = ExpectType<
			typeof result,
			DEither.Left<"failure", "error"> | DEither.Right<"success", 42>,
			"strict"
		>;
	});

	it("supports selecting multiple informations", () => {
		const input = DEither.left("failure", "error") as DEither.Left<"failure", "error"> | DEither.Right<"success", 42>;

		const result = DEither.keepAsRightByInformation(input, ["success", "failure"]);

		expect(result).toStrictEqual(DEither.right("failure", "error"));
		expect(DEither.isRight(result)).toBe(true);

		type check = ExpectType<
			typeof result,
			DEither.Right<"failure", "error"> | DEither.Right<"success", 42>,
			"strict"
		>;
	});

	it("works in a pipe chain with the curried signature", () => {
		const input = DEither.left("fail", 0) as DEither.Left<"fail", 0> | DEither.Right<"ok", "value">;

		const result = pipe(
			input,
			DEither.keepAsRightByInformation("fail"),
		);

		expect(result).toStrictEqual(DEither.right("fail", 0));
		expect(DEither.isRight(result)).toBe(true);

		type check = ExpectType<
			typeof result,
			DEither.Right<"fail", 0> | DEither.Left<"ok", "value">,
			"strict"
		>;
	});
});
