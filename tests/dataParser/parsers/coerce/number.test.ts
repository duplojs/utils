import { DEither, DDataParser } from "@scripts";

describe("coerce.number", () => {
	it("coerces string digits to number", () => {
		expect(DDataParser.coerce.number().parse("42")).toStrictEqual(DEither.success(42));
	});

	it("fails for non numeric string", () => {
		expect(DDataParser.coerce.number({ errorMessage: "number.coerce" }).parse("abc")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
