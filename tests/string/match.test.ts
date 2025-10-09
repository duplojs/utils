import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("match", () => {
	it("should return match array when pattern matches", () => {
		const result = DString.match("javascript", /script/);
		expect(result).toEqual(expect.arrayContaining(["script"]));
		expect(result).not.toBeUndefined();
	});

	it("should return null when pattern does not match", () => {
		expect(DString.match("hello", /world/)).toBeUndefined();
	});

	it("use in pipe", () => {
		const result = pipe(
			["duplojs", "nestjs", "django"],
			DArray.map(DString.match("js")),
			DArray.filter((match) => match !== undefined),
		);
		expect(result).toHaveLength(2);

		type check = ExpectType<
			typeof result,
			RegExpMatchArray[],
			"strict"
		>;
	});
});
