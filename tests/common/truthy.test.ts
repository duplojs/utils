import { truthy, type ExpectType } from "@scripts";

describe("truthy", () => {
	it("returns true for truthy value", () => {
		const input: "toto" | "" = "toto";
		const result = truthy(input);

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof input,
				"toto",
				"strict"
			>;
		}
	});

	it("returns false for falsy value", () => {
		const input: "toto" | "" = "";
		const result = truthy(input);

		expect(result).toBe(false);

		if (!result) {
			type check = ExpectType<
				typeof input,
				"",
				"strict"
			>;
		}
	});

	it("works with common values", () => {
		const values = [
			0,
			1,
			"",
			"toto",
			null,
			undefined,
			false,
			true,
			0n,
			2n,
		];

		const result = values.filter(truthy);

		expect(result).toStrictEqual([
			1,
			"toto",
			true,
			2n,
		]);

		type check = ExpectType<
			typeof result,
			(string | number | bigint | true)[],
			"strict"
		>;
	});
});
