import { DArray, equal, pipe, type ExpectType } from "@scripts";

describe("equal", () => {
	it("returns true when values are strictly equal", () => {
		const value = "duplojs" as "duplojs" | "laravel" | null;
		const predicate = equal(value, ["duplojs", null]);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof value,
				"duplojs" | null,
				"strict"
			>;
		}
	});

	it("returns false when values differ", () => {
		expect(equal("laravel" as string, "duplojs")).toBe(false);
	});

	it("supports curried usage in a pipe", () => {
		const frameworks = ["duplojs", "django", "laravel"];
		const result = pipe(
			frameworks,
			DArray.filter(equal("duplojs")),
			DArray.first,
		);

		expect(result).toBe("duplojs");

		type check = ExpectType<
			typeof result,
			"duplojs" | undefined,
			"strict"
		>;
	});
});
