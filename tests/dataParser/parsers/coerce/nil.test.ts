import { DEither, DDataParser } from "@scripts";

describe("coerce.nil", () => {
	it("coerces string 'null'", () => {
		expect(DDataParser.coerce.nil().parse("null")).toStrictEqual(DEither.success(null));
	});

	it("fails for other values", () => {
		expect(DDataParser.coerce.nil({ errorMessage: "nil.coerce" }).parse("nope")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
