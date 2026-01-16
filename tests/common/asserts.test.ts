import { asserts, AssertsError, isType, pipe, type ExpectType } from "@scripts";

describe("asserts", () => {
	it("should narrow the type when the predicate passes", () => {
		const value = "demo" as string | number;
		asserts(value, isType("string"));

		type check = ExpectType<typeof value, string, "strict">;
	});

	it("should throw AssertsError with the failing value", () => {
		expect(() => void asserts(42 as string | number, isType("string")))
			.toThrow(AssertsError);
	});
});
