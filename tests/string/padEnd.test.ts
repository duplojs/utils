import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("padEnd", () => {
	it("should pad string at end", () => {
		expect(DString.padEnd("5", 3, "0")).toBe("500");
		expect(DString.padEnd("test", 6, "ab")).toBe("testab");
	});

	it("use in pipe", () => {
		const result = pipe(
			["js", "ts", "go"],
			DArray.map(DString.padEnd(6, "*")),
		);
		expect(result).toEqual(["js****", "ts****", "go****"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});
});
