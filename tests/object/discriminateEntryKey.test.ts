import { DObject, pipe, when, type ExpectType } from "@scripts";

describe("discriminateEntryKey", () => {
	it("default usage", () => {
		const entry = true
			? DObject.entry("name", "Ada")
			: DObject.entry("age", 42);

		const predicate = DObject.discriminateEntryKey(
			entry,
			(key) => key === "name",
		);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof entry,
				["name", string],
				"strict"
			>;
		}
	});

	it("return false when entry key does not match", () => {
		const entry = DObject.entry("age", 42) as ["name", string] | ["age", number];

		const predicate = DObject.discriminateEntryKey(
			entry,
			(key) => key === "name",
		);

		expect(predicate).toBe(false);

		if (predicate) {
			type check = ExpectType<
				typeof entry,
				["name", string],
				"strict"
			>;
		} else {
			type check = ExpectType<
				typeof entry,
				["age", number],
				"strict"
			>;
		}
	});

	it("use in pipe", () => {
		const entry = true
			? DObject.entry("name", "Ada")
			: DObject.entry("age", 42);

		const result = pipe(
			entry,
			when(
				DObject.discriminateEntryKey(
					(key) => key === "name",
				),
				(value) => {
					type check = ExpectType<
						typeof value,
						["name", string],
						"strict"
					>;

					return value[1].toUpperCase();
				},
			),
		);

		expect(result).toBe("ADA");

		type check = ExpectType<
			typeof result,
			string | readonly ["name", string] | readonly ["age", number],
			"strict"
		>;
	});
});
