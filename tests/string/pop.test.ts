import { DString, type ExpectType, pipe } from "@scripts";

describe("pop", () => {
	it("simple case", () => {
		const result = DString.pop("raw");
		const primitive = DString.pop("raw" as string);
		const template = DString.pop("raw" as `cl${string}`);

		type _check = ExpectType<
			typeof result,
			"ra",
			"strict"
		>;

		type _checkPrimitive = ExpectType<
			typeof primitive,
			string,
			"strict"
		>;

		type _checkTemplate = ExpectType<
			typeof template,
			string,
			"strict"
		>;

		expect(result).toStrictEqual("ra");
		expect(primitive).toStrictEqual("ra");
		expect(template).toStrictEqual("ra");
	});

	it("use in pipe", () => {
		const result = pipe(
			"raw",
			DString.pop,
		);

		type _check = ExpectType<
			typeof result,
			"ra",
			"strict"
		>;

		expect(result).toStrictEqual("ra");
	});
});
