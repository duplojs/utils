import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("concat", () => {
	it("should concatenate strings", () => {
		expect(DString.concat("duplo", "js", " is", " best")).toBe("duplojs is best");
	});

	it("use in pipe", () => {
		const result = pipe(
			["Hello", "Good", "Best"],
			DArray.map(DString.concat(" day")),
			DArray.join(" | "),
		);
		expect(result).toBe("Hello day | Good day | Best day");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
