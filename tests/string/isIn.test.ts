import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("isIn", () => {
	it("returns true when input exists in array", () => {
		const value = "ts" as "ts" | "rs";
		const predicate = DString.isIn(value, ["js", "ts"]);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof value,
				"ts",
				"strict"
			>;
		}
	});

	it("returns false when input is missing from array", () => {
		const predicate = DString.isIn("python", ["js", "ts"]);

		expect(predicate).toBe(false);
	});

	it("composes through pipe", () => {
		const frameworks = ["duplojs", "django", "laravel"] as const;
		const result = pipe(
			frameworks,
			DArray.filter(DString.isIn(["duplojs", "laravel"])),
			DArray.first,
		);

		expect(result).toBe("duplojs");

		type check = ExpectType<
			typeof result,
			"duplojs" | "laravel" | undefined,
			"strict"
		>;
	});
});
