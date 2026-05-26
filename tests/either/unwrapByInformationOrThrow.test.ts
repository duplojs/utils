import { DEither, pipe, type ExpectType } from "@scripts";

describe("unwrapByInformationOrThrow", () => {
	it("unwraps the value when information matches on a union either", () => {
		const input = true
			? DEither.right("success", 42)
			: DEither.left("failure", "error");

		const result = DEither.unwrapByInformationOrThrow(input, "success");

		expect(result).toBe(42);

		type check = ExpectType<
			typeof result,
			42,
			"strict"
		>;
	});

	it("unwraps when one of multiple informations matches", () => {
		const input = true
			? DEither.right("success", 42)
			: DEither.left("failure", "error");

		const result = DEither.unwrapByInformationOrThrow(input, ["failure", "success"]);

		expect(result).toBe(42);

		type check = ExpectType<
			typeof result,
			42 | "error",
			"strict"
		>;
	});

	it("throws HasNotInformationError when information does not match", () => {
		const input = true
			? DEither.left("failure", "error")
			: DEither.right("success", 42);

		expect(() => DEither.unwrapByInformationOrThrow(input, "success")).toThrow(DEither.HasNotInformationError);

		try {
			DEither.unwrapByInformationOrThrow(input, "success");
		} catch (error) {
			expect(error).toBeInstanceOf(DEither.HasNotInformationError);

			if (error instanceof DEither.HasNotInformationError) {
				expect(error.message).toBe("Value has not information \"success\".");
				expect(error.value).toStrictEqual(input);
				expect(error.information).toBe("success");
			}
		}
	});

	it("throws HasNotInformationError when no information from array matches", () => {
		const input = true
			? DEither.left("failure", "error")
			: DEither.right("success", 42);

		expect(() => DEither.unwrapByInformationOrThrow(input, ["success"])).toThrow(DEither.HasNotInformationError);

		try {
			DEither.unwrapByInformationOrThrow(input, ["success"]);
		} catch (error) {
			expect(error).toBeInstanceOf(DEither.HasNotInformationError);

			if (error instanceof DEither.HasNotInformationError) {
				expect(error.message).toBe("Value has not information \"success\".");
				expect(error.value).toStrictEqual(input);
				expect(error.information).toStrictEqual(["success"]);
			}
		}
	});

	it("works in a pipe chain", () => {
		const result = pipe(
			true
				? DEither.right("ok", "value" as const)
				: DEither.left("fail", 0 as const),
			DEither.unwrapByInformationOrThrow("ok"),
		);

		expect(result).toBe("value");

		type check = ExpectType<
			typeof result,
			"value",
			"strict"
		>;
	});

	it("works in a pipe chain with an information array", () => {
		const result = pipe(
			true
				? DEither.left("fail", 0 as const)
				: DEither.right("ok", "value" as const),
			DEither.unwrapByInformationOrThrow(["ok", "fail"]),
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			0 | "value",
			"strict"
		>;
	});
});
