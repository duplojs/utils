import { DString, type ExpectType } from "@scripts/index";

describe("first", () => {
	it("returns first char of short string", () => {
		const result = DString.first("duplojs");

		expect(result).toStrictEqual("d");

		type check = ExpectType<
			typeof result,
			"d",
			"strict"
		>;
	});

	it("returns first char of long string", () => {
		const result = DString.first("azertyuiopqsdfghjklmwxcvbnazertyuiopqsdfghjklmwxcvbn azertyuiopqsdfghjklmwxcvbn azertyuiopqsdfghjklmwxcvbn");

		expect(result).toStrictEqual("a");

		type check = ExpectType<
			typeof result,
			"a",
			"strict"
		>;
	});

	it("returns first char for generic string", () => {
		const value = "duplojs" as string;
		const result = DString.first(value);

		expect(result).toStrictEqual("d");

		type check = ExpectType<
			typeof result,
			string | undefined,
			"strict"
		>;
	});

	it("returns undefined for empty string", () => {
		const result = void DString.first("");

		expect(result).toBeUndefined();

		type check = ExpectType<
			typeof result,
			undefined,
			"strict"
		>;
	});
});
