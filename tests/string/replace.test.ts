import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("replace", () => {
	it("should replace first occurrence", () => {
		expect(DString.replace("javascript", /script/, "lang")).toBe("javalang");
	});

	it("use in pipe", () => {
		const result = pipe(
			["duplojs", "nestjs", "expressjs"],
			DArray.map(DString.replace("js", "framework")),
			DArray.join(" + "),
		);
		expect(result).toBe("duploframework + nestframework + expressframework");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
