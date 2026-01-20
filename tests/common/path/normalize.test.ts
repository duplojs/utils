import { Path, pipe, type ExpectType } from "@scripts";

describe("normalize", () => {
	it("returns dot for empty or current paths", () => {
		const emptyResult = Path.normalize("");

		expect(emptyResult).toBe(".");
		expect(Path.normalize(".")).toBe(".");

		type check = ExpectType<
			typeof emptyResult,
			string,
			"strict"
		>;
	});

	it("returns dot-slash for relative paths ending with separator", () => {
		expect(Path.normalize("./")).toBe("./");
		expect(Path.normalize("../")).toBe("../");
	});

	it("normalizes absolute paths and trailing separators", () => {
		expect(Path.normalize("/foo/../bar/")).toBe("/bar/");
		expect(Path.normalize("/foo//bar/./baz")).toBe("/foo/bar/baz");
	});

	it("drops parent traversal above root for absolute paths", () => {
		expect(Path.normalize("/../a")).toBe("/a");
	});

	it("returns root for absolute root paths", () => {
		expect(Path.normalize("/")).toBe("/");
		expect(Path.normalize("///")).toBe("/");
	});

	it("normalizes windows and UNC paths", () => {
		expect(Path.normalize("C:\\temp\\..\\file")).toBe("C:/file");
		expect(Path.normalize("//server/share")).toBe("//server/share");
	});

	it("adds a trailing slash for drive letter roots", () => {
		expect(Path.normalize("c:")).toBe("C:/");
	});

	it("keeps dot-prefixed UNC paths", () => {
		expect(Path.normalize("//./foo/bar")).toBe("//./foo/bar");
	});

	it("use in pipe", () => {
		const result = pipe(
			"/foo//bar/../baz",
			Path.normalize,
		);

		expect(result).toBe("/foo/baz");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
