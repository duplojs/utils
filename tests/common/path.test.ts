import { Path, pipe, type ExpectType } from "@scripts";

describe("path", () => {
	it("returns the base name paths", () => {
		expect(Path.getBaseName("/alpha/beta/file.txt")).toBe("file.txt");
		expect(Path.getBaseName("beta/file.txt")).toBe("file.txt");
		expect(Path.getBaseName("file.txt")).toBe("file.txt");
	});

	it("removes the extension when removeExtension is true", () => {
		expect(
			Path.getBaseName("/alpha/beta/file.txt", { removeExtension: true }),
		).toBe("file");
		expect(
			Path.getBaseName("/alpha/beta/file.txt", { removeExtension: false }),
		).toBe("file.txt");
	});

	it("returns null when the path has no segment", () => {
		expect(Path.getBaseName("/")).toBe(null);
	});

	it("returns the last segment even when it is ..", () => {
		expect(Path.getBaseName("re/abs/..")).toBe("..");
	});

	it("uses getBaseName in pipe", () => {
		const result = pipe(
			"/alpha/beta/file.txt",
			(value) => Path.getBaseName(value, { removeExtension: true }),
		);

		expect(result).toBe("file");

		type check = ExpectType<
			typeof result,
			string | null,
			"strict"
		>;
	});

	it("returns the extension of file names", () => {
		expect(Path.getExtensionName("file.txt")).toBe("txt");
		expect(Path.getExtensionName("test/file.txt")).toBe("txt");
		expect(Path.getExtensionName("/test/file.txt")).toBe("txt");
		expect(Path.getExtensionName("tot/test/file.txt")).toBe("txt");
		expect(Path.getExtensionName("archive.tar.gz")).toBe("gz");
	});

	it("handles trailing dots and missing extensions", () => {
		expect(Path.getExtensionName("file.")).toBe(null);
		expect(Path.getExtensionName("file")).toBe(null);
		expect(Path.getExtensionName("..")).toBe(null);
		expect(Path.getExtensionName("test/..")).toBe(null);
		expect(Path.getExtensionName("/ok/test/..")).toBe(null);
	});

	it("uses getExtensionName in pipe", () => {
		const result = pipe(
			"file.txt",
			Path.getExtensionName,
		);

		expect(result).toBe("txt");

		type check = ExpectType<
			typeof result,
			string | null,
			"strict"
		>;
	});

	it("returns the parent folder for relative paths", () => {
		expect(Path.getParentFolderPath("alpha/beta/gamma")).toBe("alpha/beta");
		expect(Path.getParentFolderPath("alpha")).toBe(null);
	});

	it("handles trailing separators and root paths", () => {
		expect(Path.getParentFolderPath("/alpha/beta/")).toBe("/alpha");
		expect(Path.getParentFolderPath("/")).toBe(null);
		expect(Path.getParentFolderPath("/alpha")).toBe(null);
	});

	it("uses getParentFolderPath in pipe", () => {
		const result = pipe(
			"alpha/beta",
			Path.getParentFolderPath,
		);

		expect(result).toBe("alpha");

		type check = ExpectType<
			typeof result,
			string | null,
			"strict"
		>;
	});

	it("detects absolute posix paths", () => {
		expect(Path.isAbsolute("/usr/local")).toBe(true);
		expect(Path.isAbsolute("/truc/..ttot/tr.ts")).toBe(true);
		expect(Path.isAbsolute("relative/path")).toBe(false);
		expect(Path.isAbsolute("/foo/../bar")).toBe(false);
		expect(Path.isAbsolute("/foo/.../bar")).toBe(true);
	});

	it("uses isAbsolute in pipe", () => {
		const result = pipe("/root", Path.isAbsolute);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			boolean,
			"strict"
		>;
	});

	it("removes trailing slashes and ./ prefixes", () => {
		expect(Path.fix("alpha/beta/")).toBe("alpha/beta");
		expect(Path.fix("./alpha/beta")).toBe("alpha/beta");
		expect(Path.fix("./alpha/beta/")).toBe("alpha/beta");
	});

	it("keeps paths unchanged when there is nothing to fix", () => {
		expect(Path.fix("/root")).toBe("/root");
		expect(Path.fix("alpha/beta")).toBe("alpha/beta");
		expect(Path.fix("/")).toBe("");
	});

	it("uses fix in pipe", () => {
		const result = pipe(
			"alpha/beta/",
			Path.fix,
		);

		expect(result).toBe("alpha/beta");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("returns success when resolving from an absolute origin", () => {
		expect(Path.resolveFrom("/root", ["alpha", "beta"]))
			.toStrictEqual("/root/alpha/beta");
	});

	it("returns success when an absolute segment overrides previous parts", () => {
		expect(Path.resolveFrom("gamma", ["alpha", "/root", "beta"]))
			.toStrictEqual("/root/beta");
	});

	it("returns fail when the resolved path is relative", () => {
		const result = Path.resolveFrom("alpha", ["..", ".."]);

		expect(result).toStrictEqual(null);

		type check = ExpectType<
			typeof result,
			string | null,
			"strict"
		>;
	});

	it("returns fail when stayInOrigin is active and segments escape the origin", () => {
		const result = Path.resolveFrom(
			"/root/current",
			["..", "..", "target"],
			{ stayInOrigin: true },
		);

		expect(result).toStrictEqual(null);

		type check = ExpectType<
			typeof result,
			string | null,
			"strict"
		>;
	});

	it("resolves segments and trims slashes and ./ prefixes", () => {
		expect(Path.resolveRelative(["alpha/", "", "./beta", "gamma/"]))
			.toBe("alpha/beta/gamma");
	});

	it("resets the path when an absolute segment is encountered", () => {
		expect(Path.resolveRelative(["alpha", "/root", "beta"]))
			.toBe("/root/beta");
	});

	it("resets to root when a root segment is encountered", () => {
		expect(Path.resolveRelative(["alpha", "/", "beta"]))
			.toBe("/beta");
	});

	it("preserves leading .. when resolving above root", () => {
		expect(Path.resolveRelative(["alpha", "..", "..", "beta"]))
			.toBe("../beta");
	});

	it("uses resolveRelative in pipe", () => {
		const result = pipe(
			<const>["alpha", "beta"],
			Path.resolveRelative,
		);

		expect(result).toBe("alpha/beta");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
