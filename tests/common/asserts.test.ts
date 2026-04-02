import * as DCommon from "@scripts";

describe("asserts", () => {
	it("should narrow the type when the predicate passes", () => {
		const value = "demo" as string | number;
		DCommon.asserts(value, DCommon.isType("string"));

		type check = DCommon.ExpectType<typeof value, string, "strict">;
	});

	it("should throw AssertsError with the failing value", () => {
		expect(() => void DCommon.asserts(42 as string | number, DCommon.isType("string")))
			.toThrow(DCommon.AssertsError);
	});
});

describe("forwardAsserts", () => {
	it("returns the input narrowed by a type guard predicate", () => {
		const value = {
			type: "admin",
			level: 2,
		} as
			| {
				type: "user";
				name: string;
			}
			| {
				type: "admin";
				level: number;
			};

		const result = DCommon.forwardAsserts(
			value,
			(input) => input.type === "admin",
		);

		expect(result).toBe(value);

		type check = DCommon.ExpectType<
			typeof result,
			{
				type: "admin";
				level: number;
			},
			"strict"
		>;
	});

	it("returns the input without narrowing when using a boolean predicate", () => {
		const value = "demo" as string | number;

		const result = DCommon.forwardAsserts(
			value,
			(input): boolean => typeof input === "string",
		);

		expect(result).toBe(value);

		type check = DCommon.ExpectType<
			typeof result,
			string | number,
			"strict"
		>;
	});

	it("throws AssertsError and exposes the failing value", () => {
		expect(() => DCommon.forwardAsserts(42 as string | number, DCommon.isType("string")))
			.toThrowError(DCommon.AssertsError);
	});

	it("creates a curried type guard version compatible with pipe", () => {
		const result = DCommon.pipe(
			"demo" as string | number,
			DCommon.forwardAsserts(DCommon.isType("string")),
		);

		expect(result).toBe("demo");

		type check = DCommon.ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("creates a curried boolean predicate version", () => {
		const assertString = DCommon.forwardAsserts(
			(input: string | number): boolean => typeof input === "string",
		);
		const result = assertString("demo" as string | number);

		expect(result).toBe("demo");

		type check = DCommon.ExpectType<
			typeof result,
			string | number,
			"strict"
		>;
	});
});
