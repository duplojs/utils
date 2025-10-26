import { DEither, DDataParser } from "@scripts";

describe("coerce.boolean", () => {
	it("coerces string", () => {
		expect(DDataParser.coerce.boolean().parse("true")).toStrictEqual(DEither.success(true));
		expect(DDataParser.coerce.boolean().parse("false")).toStrictEqual(DEither.success(false));
	});

	it("fails for invalid input", () => {
		expect(DDataParser.coerce.boolean({ errorMessage: "boolean.coerce" }).parse("yes")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
