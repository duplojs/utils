import { DString, type ExpectType, pipe } from "@scripts";

describe("shift", () => {
	it("simple case", () => {
		const result = DString.shift("cloud");
		const primitive = DString.shift("cloud" as string);
		const template = DString.shift("cloud" as `cl${string}`);

		type _check = ExpectType<
			typeof result,
			"loud",
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

		expect(result).toStrictEqual("loud");
		expect(primitive).toStrictEqual("loud");
		expect(template).toStrictEqual("loud");
	});

	it("use in pipe", () => {
		const result = pipe(
			"cloud",
			DString.shift,
		);

		type _check = ExpectType<
			typeof result,
			"loud",
			"strict"
		>;

		expect(result).toStrictEqual("loud");
	});
});
