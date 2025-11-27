import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("capitalize", () => {
	it("should capitalize first letter", () => {
		const str = "hello";
		const result = DString.capitalize(str);

		type check = ExpectType<
			typeof result,
			"Hello",
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			"hello world test",
			DString.split(" "),
			DArray.map(DString.capitalize),
			DArray.join(" "),
		);
		expect(result).toBe("Hello World Test");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
