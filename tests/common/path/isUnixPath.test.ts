import { Path, pipe, when, type ExpectType } from "@scripts";

describe("isUnixPath", () => {
	it("detects unix paths without backslashes", () => {
		expect(Path.isUnixPath("/usr/local")).toBe(true);
		expect(Path.isUnixPath("relative/path")).toBe(true);
		expect(Path.isUnixPath("C:\\Temp")).toBe(false);
		expect(Path.isUnixPath("folder\\file")).toBe(false);
	});

	it("narrows the path type when true", () => {
		const value = "folder/file" as "folder/file" | "folder\\file";

		const result = Path.isUnixPath(value);

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				"folder/file",
				"strict"
			>;
		}
	});

	it("use in pipe", () => {
		const result = pipe(
			"folder/file" as "folder/file" | "folder\\file",
			when(
				Path.isUnixPath,
				(value) => {
					type check = ExpectType<
						typeof value,
						"folder/file",
						"strict"
					>;

					return value;
				},
			),
		);

		expect(result).toBe("folder/file");
	});
});
