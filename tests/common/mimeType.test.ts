import { mimeType, pipe, type ExpectType } from "@scripts";

describe("mimeType", () => {
	it("maps known extensions to their MIME type", () => {
		expect(mimeType.get("json")).toBe("application/json");
		expect(mimeType.get("svg")).toBe("image/svg+xml");
		expect(mimeType.get("txt")).toBe("text/plain");
	});

	it("returns undefined for unknown extensions", () => {
		expect(mimeType.get("does-not-exist")).toBeUndefined();
		expect(mimeType.get(".json")).toBeUndefined();
	});

	it("works in pipe and exposes typed values", () => {
		const result = pipe(
			"json",
			(extension) => mimeType.get(extension),
		);

		expect(result).toBe("application/json");

		type check = ExpectType<
			typeof result,
			string | undefined,
			"strict"
		>;
	});

	it("exposes a string to string map", () => {
		expect(mimeType).toBeInstanceOf(Map);

		type check = ExpectType<
			typeof mimeType,
			Map<string, string>,
			"strict"
		>;
	});
});
