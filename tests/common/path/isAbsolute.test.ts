import { Path, pipe, type ExpectType } from "@scripts";

describe("isAbsolute", () => {
	it("detects absolute posix paths", () => {
		expect(Path.isAbsolute("/usr/local")).toBe(true);
		expect(Path.isAbsolute("/truc/..ttot/tr.ts")).toBe(true);
		expect(Path.isAbsolute("relative/path")).toBe(false);
		expect(Path.isAbsolute("/foo/../bar")).toBe(false);
		expect(Path.isAbsolute("/foo/.../bar")).toBe(true);
	});

	it("use in pipe", () => {
		const result = pipe("/root", Path.isAbsolute);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			boolean,
			"strict"
		>;
	});
});
