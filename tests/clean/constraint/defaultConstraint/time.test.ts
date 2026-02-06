import { DEither, DClean, pipe, type ExpectType, type DDate, type DDataParser } from "@scripts";

describe("defaultConstraint time", () => {
	it("creates a positive time constraint for positive input", () => {
		const result = DClean.PositiveTime.create(1);

		expect(DEither.isRight(result)).toBe(true);

		type check = ExpectType<
			typeof result,
			DEither.Left<"createConstrainedTypeError", DDataParser.DataParserError>
			| DEither.Right<"createConstrainedType", DClean.ConstrainedType<"positive-time", DDate.TheTime>>,
			"strict"
		>;
	});

	it("returns an error for non-positive input", () => {
		const result = DClean.PositiveTime.create(0);

		expect(DEither.isLeft(result)).toBe(true);
	});

	it("creates a negative time constraint for negative input", () => {
		const result = DClean.NegativeTime.create(-1);

		expect(DEither.isRight(result)).toBe(true);

		type check = ExpectType<
			typeof result,
			DEither.Left<"createConstrainedTypeError", DDataParser.DataParserError>
			| DEither.Right<"createConstrainedType", DClean.ConstrainedType<"negative-time", DDate.TheTime>>,
			"strict"
		>;
	});
});
