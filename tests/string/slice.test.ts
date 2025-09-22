import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("slice", () => {
	it("should slice string", () => {
		expect(DString.slice("javascript", 4)).toBe("script");
		expect(DString.slice("duplojs", 0, 5)).toBe("duplo");
		expect(DString.slice("hello", -2)).toBe("lo");
	});

	it("use in pipe", () => {
		const result = pipe(
			["javascript", "typescript", "coffeescript"],
			DArray.map(DString.slice(-6)),
			DArray.join(" + "),
			DString.concat(" = script xD"),
		);
		expect(result).toBe("script + script + script = script xD");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
