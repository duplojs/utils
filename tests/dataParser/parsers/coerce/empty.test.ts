import { DEither, DDataParser } from "@scripts";

describe("coerce.empty", () => {
	it("coerces string 'undefined'", () => {
		expect(DDataParser.coerce.empty().parse("undefined")).toStrictEqual(DEither.success(undefined));
	});

	it("fails for other string", () => {
		expect(DDataParser.coerce.empty({ errorMessage: "empty.coerce" }).parse("nope")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
