import { DEither, DDataParser } from "@scripts";

describe("extended.coerce.empty", () => {
	it("coerces string 'undefined'", () => {
		expect(DDataParser.extended.coerce.empty().parse("undefined")).toStrictEqual(DEither.success(undefined));
	});

	it("fails for other string", () => {
		expect(DDataParser.extended.coerce.empty({ errorMessage: "empty.coerce" }).parse("nope")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
