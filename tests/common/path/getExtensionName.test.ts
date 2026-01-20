import { Path, pipe, type ExpectType } from "@scripts";

describe("getExtensionName", () => {
	it("returns the extension of file names", () => {
		expect(Path.getExtensionName("file.txt")).toBe(".txt");
		expect(Path.getExtensionName("archive.tar.gz")).toBe(".gz");
		expect(Path.getExtensionName("C:\\alpha\\beta\\file.md")).toBe(".md");
	});

	it("handles trailing dots and missing extensions", () => {
		expect(Path.getExtensionName("file.")).toBe(".");
		expect(Path.getExtensionName("file")).toBe("");
		expect(Path.getExtensionName("..")).toBe("");
	});

	it("use in pipe", () => {
		const result = pipe(
			"file.txt",
			Path.getExtensionName,
		);

		expect(result).toBe(".txt");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
