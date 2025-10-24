import { DEither, DDataParser } from "@scripts";

describe("extended.coerce.bigint", () => {
	it("coerces numeric string", () => {
		expect(DDataParser.extended.coerce.bigint().parse("5")).toStrictEqual(DEither.success(5n));
	});

	it("fails for non integer numeric", () => {
		expect(DDataParser.extended.coerce.bigint({ errorMessage: "bigint.coerce" }).parse(1.5)).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
