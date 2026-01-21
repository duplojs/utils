import { Path, pipe, type ExpectType } from "@scripts";

describe("resolveRelative", () => {
	it("resolves segments and trims slashes and ./ prefixes", () => {
		expect(Path.resolveRelative("alpha/", "", "./beta", "gamma/"))
			.toBe("/alpha/beta/gamma");
	});

	it("resets the path when an absolute segment is encountered", () => {
		expect(Path.resolveRelative("alpha", "/root", "beta"))
			.toBe("/root/beta");
	});

	it("resets to root when a root segment is encountered", () => {
		expect(Path.resolveRelative("alpha", "/", "beta"))
			.toBe("/beta");
	});

	it("preserves leading .. when resolving above root", () => {
		expect(Path.resolveRelative("alpha", "..", "..", "beta"))
			.toBe("../beta");
	});

	it("use in pipe", () => {
		const result = pipe(
			<const>["alpha", "beta"],
			(segments) => Path.resolveRelative(...segments),
		);

		expect(result).toBe("/alpha/beta");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
