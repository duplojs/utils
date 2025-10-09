import { DString, type ExpectType } from "@scripts/index";

describe("last", () => {
	it("returns last char of short string", () => {
		const result = DString.last("duplojs");

		expect(result).toStrictEqual("s");

		type check = ExpectType<
			typeof result,
			"s",
			"strict"
		>;
	});

	it("returns last char of long string", () => {
		const result = DString.last("azertyuiopqsdfghjklmwxcvbnazertyuiopqsdfghjklmwxcvbn azertyuiopqsdfghjklmwxcvbn azertyuiopqsdfghjklmwxcvbn");

		expect(result).toStrictEqual("n");

		type check = ExpectType<
			typeof result,
			"n",
			"strict"
		>;
	});

	it("returns last char for generic string", () => {
		const value = "duplojs" as string;
		const result = DString.last(value);

		expect(result).toStrictEqual("s");

		type check = ExpectType<
			typeof result,
			string | undefined,
			"strict"
		>;
	});

	it("returns undefined for empty string", () => {
		const result = void DString.last("");

		expect(result).toBeUndefined();

		type check = ExpectType<
			typeof result,
			undefined,
			"strict"
		>;
	});
});
