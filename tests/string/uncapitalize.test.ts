import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("uncapitalize", () => {
	it("should uncapitalize first letter", () => {
		const str = "Duplojs";
		const result = DString.uncapitalize(str);

		type check = ExpectType<
			typeof result,
			"duplojs",
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			["Duplojs", "Is", "Best"],
			DArray.map(DString.uncapitalize),
			DArray.join(" "),
		);
		expect(result).toBe("duplojs is best");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
