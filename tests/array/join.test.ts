import { type ExpectType, pipe, toString } from "@scripts/common";
import { DArray } from "@scripts";

describe("join", () => {
	it("joins array with separator", () => {
		expect(DArray.join(["1", "2", "3"], ",")).toBe("1,2,3");
	});

	it("joins const array with separator", () => {
		const result = DArray.join(["1", "2", "3"] as const, "-");

		expect(result).toBe("1-2-3");

		type check = ExpectType<
			typeof result,
			"1-2-3",
			"strict"
		>;
	});

	it("joins array using pipe with separator", () => {
		const result = pipe(
			[1, 2, 3],
			DArray.map(toString),
			DArray.join("-"),
		);
		expect(result).toBe("1-2-3");
	});
});
