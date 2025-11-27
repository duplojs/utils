import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("substring", () => {
	it("should extract substring", () => {
		const str = "javascript";
		const result = DString.substring(str, 4, 6);
		expect(result).toBe("sc");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			["javascript", "typescript", "python"],
			DArray.map(DString.substring(0, 4)),
			DArray.join("-"),
		);
		expect(result).toBe("java-type-pyth");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
