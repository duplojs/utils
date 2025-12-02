import { DDataParser, DClean, DEither, type ExpectType } from "@scripts";

describe("createConstraint", () => {
	it("creates constrained type when all checkers pass", () => {
		const handler = DClean.createConstraint(
			"positive-int",
			[
				DDataParser.checkerInt(),
				DDataParser.checkerNumberMin(1),
			],
		);

		const result = handler.create(5);

		expect(result).toStrictEqual(DEither.right("createConstrainedType", 5));

		type Check = ExpectType<
			typeof result,
			| DEither.EitherRight<"createConstrainedType", DClean.ConstrainedType<"positive-int", 5>>
			| DEither.EitherLeft<"createConstrainedTypeError", DDataParser.DataParserError>,
			"strict"
		>;
	});

	it("returns error when a checker fails", () => {
		const handler = DClean.createConstraint(
			"positive-int",
			DDataParser.checkerNumberMin(1),
		);

		const result = handler.create(-1);

		expect(DEither.isLeft(result)).toBe(true);
	});

	it("createOrThrow throws on invalid data", () => {
		const handler = DClean.createConstraint(
			"positive-int",
			DDataParser.checkerNumberMin(1),
		);

		expect(() => handler.createOrThrow(-1)).toThrow(DClean.CreateConstrainedTypeError);
	});

	it("createOrThrow returns value when valid", () => {
		const handler = DClean.createConstraint(
			"positive-int",
			DDataParser.checkerNumberMin(1),
		);

		expect(handler.createOrThrow(2)).toBe(2);
	});

	it("aliases createWithUnknown / createWithUnknownOrThrow mirror main methods", () => {
		const handler = DClean.createConstraint(
			"positive-int",
			DDataParser.checkerNumberMin(1),
		);

		expect(handler.createWithUnknown(3)).toStrictEqual(handler.create(3));
		expect(handler.createWithUnknownOrThrow(4)).toBe(handler.createOrThrow(4));
	});
});
