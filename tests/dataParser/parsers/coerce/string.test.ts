import { DEither, DDataParser } from "@scripts";

describe("coerce.string", () => {
	it("coerces value to string", () => {
		expect(DDataParser.coerce.string().parse(42)).toStrictEqual(DEither.success("42"));
	});

	it("fails when coercion not possible", () => {
		expect(DDataParser.coerce.string({ errorMessage: "string.coerce" }).parse(Object.create(null))).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
