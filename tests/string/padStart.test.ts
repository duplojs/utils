import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("padStart", () => {
	it("should pad string at start", () => {
		expect(DString.padStart("test", 6, "ab")).toBe("abtest");
	});

	it("use in pipe", () => {
		const result = pipe(
			["1", "22", "333"],
			DArray.map(DString.padStart(4, "0")),
			DArray.join(" | "),
		);
		expect(result).toBe("0001 | 0022 | 0333");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
