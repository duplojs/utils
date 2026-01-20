import { Path, pipe, type ExpectType } from "@scripts";

describe("resolveFrom", () => {
	it("resolves relative segments in reverse order", () => {
		expect(Path.resolveFrom(["alpha", "beta"], "gamma")).toBe("gamma/beta/alpha");
	});

	it("stops at the first absolute path", () => {
		expect(Path.resolveFrom(["alpha", "/root", "beta"], "gamma")).toBe("/root/alpha");
	});

	it("returns dot when nothing is resolved", () => {
		expect(Path.resolveFrom([], "")).toBe(".");
	});

	it("use in pipe", () => {
		const result = pipe(
			["alpha", "beta"],
			Path.resolveFrom("/root"),
		);

		expect(result).toBe("/root/beta/alpha");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
