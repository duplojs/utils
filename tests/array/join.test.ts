import { DArray, type ExpectType, pipe } from "@scripts";

describe("join", () => {
	it("join tuple with separator", () => {
		const input = ["1", "2", "3"] as const;
		const result = DArray.join(input, "-");

		expect(result).toBe("1-2-3");

		type check = ExpectType<
			typeof result,
			"1-2-3",
			"strict"
		>;
	});

	it("join array with separator", () => {
		const input = ["a", "b", "c"];
		const result = DArray.join(input, "-");

		expect(result).toBe("a-b-c");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("join array using pipe with separator", () => {
		const result = pipe(
			[1, 2, 3],
			DArray.map(String),
			DArray.join("-"),
		);
		expect(result).toBe("1-2-3");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
