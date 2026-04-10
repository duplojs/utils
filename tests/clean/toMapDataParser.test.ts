import { DClean, DDataParser, DEither, keyWrappedValue, pipe, type ExpectType } from "@scripts";

describe("toMapDataParser", () => {
	it("maps newType handler to a data parser with newType and constraint kinds", () => {
		const newTypeLabel = DClean.createNewType(
			"Label",
			DDataParser.string(),
			[DClean.StringMax(5)],
		);
		const parser = DClean.toMapDataParser(newTypeLabel);

		const result = parser.parse("hello");

		expect(result).toStrictEqual(
			DEither.success({
				...DClean.newTypeKind.setTo({}, "Label"),
				...DClean.constrainedTypeKind.setTo({}, newTypeLabel.internal.constraintKindValue),
				[keyWrappedValue]: "hello",
			}),
		);

		const value = parser.parseOrThrow("hello");

		type Check = ExpectType<
			typeof value,
			DClean.GetNewType<typeof newTypeLabel>,
			"strict"
		>;
	});

	it("maps constraint handler to a data parser with constraint kind", () => {
		const constraint = DClean.StringMax(5);
		const parser = DClean.toMapDataParser(constraint);

		const result = parser.parse("hey");

		expect(result).toStrictEqual(
			DEither.success({
				...DClean.constrainedTypeKind.setTo({}, constraint.internal.constraintKindValue),
				[keyWrappedValue]: "hey",
			}),
		);

		const value = parser.parseOrThrow("hey");

		type Check = ExpectType<
			typeof value,
			DClean.GetConstraint<typeof constraint>,
			"strict"
		>;
	});

	it("maps constraints set handler to a data parser with constraint kinds", () => {
		const minConstraint = DClean.StringMin(2);
		const maxConstraint = DClean.StringMax(5);
		const constraintsSet = DClean.createConstraintsSet(
			DClean.String,
			[minConstraint, maxConstraint],
		);
		const parser = DClean.toMapDataParser(constraintsSet);

		const result = parser.parse("test");

		expect(result).toStrictEqual(
			DEither.success({
				...DClean.constrainedTypeKind.setTo({}, constraintsSet.internal.constraintKindValue),
				[keyWrappedValue]: "test",
			}),
		);

		const value = parser.parseOrThrow("test");

		type Check = ExpectType<
			typeof value,
			DClean.GetConstraints<typeof constraintsSet>,
			"strict"
		>;
	});

	it("maps primitive handler to a data parser with wrapped value only", () => {
		const parser = DClean.toMapDataParser(DClean.String);

		const result = parser.parse("hello");

		expect(result).toStrictEqual(
			DEither.success({
				[keyWrappedValue]: "hello",
			}),
		);

		const value = parser.parseOrThrow("hello");

		type Check = ExpectType<
			typeof value,
			DClean.String,
			"strict"
		>;
	});

	it("supports coerce option on supported parsers", () => {
		const parser = DClean.toMapDataParser(
			DClean.String,
			{ coerce: true },
		);

		const result = parser.parseOrThrow(42);

		expect(result).toStrictEqual({
			[keyWrappedValue]: "42",
		});
	});
});
