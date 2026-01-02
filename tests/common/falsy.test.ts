import { A, falsy, type ExpectType } from "@scripts";

describe("falsy", () => {
	it("returns true for falsy value", () => {
		const input: "toto" | "" = "";
		const result = falsy(input);

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof input,
				"",
				"strict"
			>;
		}
	});

	it("returns false for truthy value", () => {
		const input: "toto" | "" = "toto";
		const result = falsy(input);

		expect(result).toBe(false);

		if (!result) {
			type check = ExpectType<
				typeof input,
				"toto",
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

		const result = A.filter(values, falsy);

		expect(result).toStrictEqual([
			0,
			"",
			null,
			undefined,
			false,
			0n,
		]);

		type check = ExpectType<
			typeof result,
			(0 | "" | null | undefined | false | 0n)[],
			"strict"
		>;
	});
});
