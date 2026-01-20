import { Path, pipe, when, type ExpectType } from "@scripts";

describe("isAbsolute", () => {
	it("detects absolute paths", () => {
		expect(Path.isAbsolute("/usr/local")).toBe(true);
		expect(Path.isAbsolute("C:\\Windows")).toBe(true);
		expect(Path.isAbsolute("\\\\server\\share")).toBe(true);
		expect(Path.isAbsolute("relative/path")).toBe(false);
	});

	it("narrows the path type when true", () => {
		const value = "/root" as "/root" | "relative" | "C:\\Windows\\absolute";

		const result = Path.isAbsolute(value);

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				"C:\\Windows\\absolute" | "/root",
				"strict"
			>;
		}
	});

	it("use in pipe", () => {
		const result = pipe(
			"/root" as "/root" | "relative",
			(value) => value,
			when(
				Path.isAbsolute,
				(value) => {
					type check = ExpectType<
						typeof value,
						"/root",
						"strict"
					>;

					return `absolute:${value}`;
				},
			),
		);

		expect(result).toBe("absolute:/root");

		type check = ExpectType<
			typeof result,
			"relative" | "absolute:/root",
			"strict"
		>;
	});
});
