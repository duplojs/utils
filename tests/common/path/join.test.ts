import { Path, pipe, type ExpectType } from "@scripts";

describe("join", () => {
	it("joins segments with proper separators", () => {
		expect(Path.join("foo", "bar")).toBe("foo/bar");
		expect(Path.join("/foo/", "/bar")).toBe("/foo/bar");
	});

	it("concatenates when only one side has a separator", () => {
		expect(Path.join("foo/", "bar")).toBe("foo/bar");
		expect(Path.join("foo", "/bar")).toBe("foo/bar");
	});

	it("normalizes segments and ignores empty values", () => {
		expect(Path.join("", "foo", "", "bar/../baz")).toBe("foo/baz");
		expect(Path.join("/foo", "bar/../baz")).toBe("/foo/baz");
	});

	it("use in pipe", () => {
		const result = pipe(
			"root",
			(value) => Path.join(value, "child"),
		);

		expect(result).toBe("root/child");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
