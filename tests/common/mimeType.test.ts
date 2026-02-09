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

	it("set", () => {
		expect(mimeType.get("txtnull")).toBe(undefined);
		mimeType.set("txtnull", "text-null/plain");
		expect(mimeType.get("txtnull")).toBe("text-null/plain");
	});
});
