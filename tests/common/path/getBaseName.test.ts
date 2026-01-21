import { Path, pipe, type ExpectType } from "@scripts";

describe("getBaseName", () => {
	it("returns the base name paths", () => {
		expect(Path.getBaseName("/alpha/beta/file.txt")).toBe("file.txt");
	});

	it("strips the provided extension when it matches", () => {
		expect(
			Path.getBaseName("/alpha/beta/file.txt", { extension: ".txt" }),
		).toBe("file");
		expect(
			Path.getBaseName("/alpha/beta/file.txt", { extension: ".md" }),
		).toBe("file.txt");
	});

	it("returns null for root paths", () => {
		expect(Path.getBaseName("/")).toBe(null);
	});

	it("returns dot for root paths", () => {
		expect(Path.getBaseName("re/abs/..")).toBe(null);
	});

	it("use in pipe", () => {
		const result = pipe(
			"/alpha/beta/file.txt",
			(value) => Path.getBaseName(value, { extension: ".txt" }),
		);

		expect(result).toBe("file");

		type check = ExpectType<
			typeof result,
			string | null,
			"strict"
		>;
	});
});
