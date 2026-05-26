import { DEither, pipe, type ExpectType } from "@scripts";

describe("unwrapByInformation", () => {
	it("unwraps the payload when information matches", () => {
		const input = true
			? DEither.right("success", 42)
			: DEither.left("failure", "error");

		const result = DEither.unwrapByInformation(input, "success");

		expect(result).toBe(42);

		type check = ExpectType<
			typeof result,
			42 | DEither.Left<"failure", "error">,
			"strict"
		>;
	});

	it("returns the input unchanged when information does not match", () => {
		const input = true
			? DEither.left("failure", "error")
			: DEither.right("success", 42);

		const result = DEither.unwrapByInformation(input, "success");

		expect(result).toStrictEqual(input);

		type check = ExpectType<
			typeof result,
			42 | DEither.Left<"failure", "error">,
			"strict"
		>;
	});

	it("unwraps when one of multiple informations matches", () => {
		const input = true
			? DEither.left("failure", "error")
			: DEither.right("success", 42);

		const result = DEither.unwrapByInformation(input, ["success", "failure"]);

		expect(result).toBe("error");

		type check = ExpectType<
			typeof result,
			42 | "error",
			"strict"
		>;
	});

	it("works in a pipe chain with the curried signature", () => {
		const result = pipe(
			true
				? DEither.right("ok", "value" as const)
				: DEither.left("fail", 0 as const),
			DEither.unwrapByInformation("ok"),
		);

		expect(result).toBe("value");

		type check = ExpectType<
			typeof result,
			"value" | DEither.Left<"fail", 0>,
			"strict"
		>;
	});

	it("works in a pipe chain with multiple informations", () => {
		const result = pipe(
			true
				? DEither.left("fail", 0 as const)
				: DEither.right("ok", "value" as const),
			DEither.unwrapByInformation(["ok", "fail"]),
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			0 | "value",
			"strict"
		>;
	});
});
