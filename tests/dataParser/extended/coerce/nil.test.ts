import { DEither, DDataParser } from "@scripts";

describe("extended.coerce.nil", () => {
	it("coerces string 'null'", () => {
		expect(DDataParser.extended.coerce.nil().parse("null")).toStrictEqual(DEither.success(null));
	});

	it("fails for other values", () => {
		expect(DDataParser.extended.coerce.nil({ errorMessage: "nil.coerce" }).parse("nope")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
