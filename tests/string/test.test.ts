import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("test", () => {
	it("should detect match on direct call", () => {
		expect(DString.test("duplojs", /js$/)).toBe(true);
		expect(DString.test("typescript", /js$/)).toBe(false);
	});

	it("should allow partial application", () => {
		const hasDigits = DString.test(/\d+/);
		expect(hasDigits("abc123")).toBe(true);
		expect(hasDigits("no-digits")).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			["duplojs", "nestjs", "django"],
			DArray.filter(DString.test(/js/)),
		);
		expect(result).toEqual(["duplojs", "nestjs"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});
});
