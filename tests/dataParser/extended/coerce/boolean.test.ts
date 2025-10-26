import { DEither, DDataParser } from "@scripts";

describe("extended.coerce.boolean", () => {
	it("coerces string", () => {
		expect(DDataParser.extended.coerce.boolean().parse("true")).toStrictEqual(DEither.success(true));
		expect(DDataParser.extended.coerce.boolean().parse("false")).toStrictEqual(DEither.success(false));
	});

	it("fails for invalid input", () => {
		expect(DDataParser.extended.coerce.boolean({ errorMessage: "boolean.coerce" }).parse("yes")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
