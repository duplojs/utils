import { DEither, DDataParser } from "@scripts";

describe("extended.coerce.number", () => {
	it("coerces string digits to number", () => {
		expect(DDataParser.extended.coerce.number().parse("42")).toStrictEqual(DEither.success(42));
	});

	it("fails for non numeric string", () => {
		expect(DDataParser.extended.coerce.number({ errorMessage: "number.coerce" }).parse("abc")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
