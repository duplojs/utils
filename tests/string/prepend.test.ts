import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("prepend", () => {
	it("simple case", () => {
		expect(DString.prepend(" is best", "duplo", "js")).toBe("duplojs is best");
	});

	it("use in pipe", () => {
		const result = pipe(
			["good", "the best", "perfect"],
			DArray.map(DString.prepend("duplojs is ")),
			DArray.join(" | "),
		);
		expect(result).toBe("duplojs is good | duplojs is the best | duplojs is perfect");

		type _check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
