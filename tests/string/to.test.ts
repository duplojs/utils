import { DString, type ExpectType, pipe } from "@scripts";

describe("to", () => {
	it("should convert a number and preserve literal types", () => {
		const value = 42 as const;
		const result = DString.to(value);
		expect(result).toBe("42");

		type check = ExpectType<typeof result, "42", "strict">;
	});

	it("should convert null and undefined", () => {
		const nullResult = DString.to(null);
		const undefinedResult = DString.to(undefined);
		expect(nullResult).toBe("null");
		expect(undefinedResult).toBe("undefined");

		type checkNull = ExpectType<typeof nullResult, "null", "strict">;
		type checkUndefined = ExpectType<typeof undefinedResult, "undefined", "strict">;
	});

	it("should convert bigint values", () => {
		const result = DString.to(10n);
		expect(result).toBe("10");

		type check = ExpectType<typeof result, "10", "strict">;
	});

	it("use in pipe", () => {
		const value = true as const;
		const result = pipe(value, DString.to);
		expect(result).toBe("true");

		type check = ExpectType<typeof result, "true", "strict">;
	});
});
