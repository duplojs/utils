import { Path, pipe, type ExpectType } from "@scripts";

describe("getParentFolderPath", () => {
	it("returns the parent folder for relative paths", () => {
		expect(Path.getParentFolderPath("alpha/beta/gamma")).toBe("alpha/beta");
		expect(Path.getParentFolderPath("alpha")).toBe(".");
	});

	it("handles trailing separators and root paths", () => {
		expect(Path.getParentFolderPath("/alpha/beta/")).toBe("/alpha");
		expect(Path.getParentFolderPath("/")).toBe("/");
	});

	it("use in pipe", () => {
		const result = pipe(
			"alpha/beta",
			Path.getParentFolderPath,
		);

		expect(result).toBe("alpha");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
