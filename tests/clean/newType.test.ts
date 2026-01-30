import { DClean, DDataParser, DEither, DPE, wrapValue, type ExpectType, type WrappedValue } from "@scripts";
import { createNewType } from "@scripts/clean";

describe("createNewType", () => {
	const constraint = DClean.createConstraint(
		"short",
		DClean.String,
		DDataParser.checkerStringMax(5),
	);

	const handler = DClean.createNewType(
		"Label",
		DDataParser.string(),
		[constraint],
	);

	it("create returns new type on valid input", () => {
		const result = handler.create("hello");

		expect(result).toStrictEqual(
			DEither.right(
				"createNewType",
				DClean.newTypeKind.setTo(
					DClean.constrainedTypeKind.setTo(
						wrapValue("hello"),
						{ short: null },
					),
					"Label",
				),
			),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.EitherRight<
				"createNewType",
				DClean.NewType<
					"Label",
					"hello",
					typeof constraint["name"]
				>
			>
			| DEither.EitherLeft<
				"createNewTypeError",
				DDataParser.DataParserError
			>,
			"strict"
		>;
	});

	it("create returns error on invalid input", () => {
		const result = handler.create("too long");

		const expectedError = DDataParser.addIssue(
			DDataParser.createError(),
			constraint.checkers[0],
			"too long",
		);

		expect(result).toStrictEqual(
			DEither.left(
				"createNewTypeError",
				expectedError,
			),
		);

		type Check = ExpectType<
			typeof result,
			(
				| DEither.EitherLeft<"createNewTypeError", DDataParser.DataParserError>
				| DEither.EitherRight<"createNewType", DClean.NewType<"Label", "too long", "short">>
			),
			"strict"
		>;
	});

	it("create keeps constraint metadata when already constrained", () => {
		const base = constraint.createOrThrow("cool");

		const result = handler.create(base);

		expect(result).toStrictEqual(
			DEither.right(
				"createNewType",
				DClean.newTypeKind.setTo(
					DClean.constrainedTypeKind.addTo(
						base,
						{
							...DClean.constrainedTypeKind.getValue(base),
							short: null,
						},
					),
					"Label",
				),
			),
		);
	});

	it("createOrThrow returns new type and is() accepts it", () => {
		const value = handler.createOrThrow("mini");

		expect(value).toStrictEqual(
			DClean.newTypeKind.setTo(
				DClean.constrainedTypeKind.setTo(
					wrapValue("mini"),
					{ short: null },
				),
				"Label",
			),
		);

		expect(handler.is(value)).toBe(true);

		type Check = ExpectType<
			typeof value,
			DClean.NewType<
				"Label",
				"mini",
				typeof constraint["name"]
			>,
			"strict"
		>;
	});

	it("createOrThrow throws on invalid input", () => {
		expect(() => handler.createOrThrow("longer than five"))
			.toThrow(DClean.CreateNewTypeError);
	});

	it("is returns false for non matching wrapped value", () => {
		const value = wrapValue("x") as WrappedValue<string> | DClean.NewType<"Label", string, "short">;
		const predicate = handler.is(value);

		expect(predicate).toBe(false);

		if (predicate) {
			type Check = ExpectType<
				typeof value,
				DClean.NewType<"Label", string, "short">,
				"strict"
			>;
		}

		expect(
			handler.is(
				DClean.newTypeKind.addTo(
					wrapValue("x"),
					"Label",
				),
			),
		).toBe(false);
	});

	it("createWithUnknown matches create", () => {
		const createResult = handler.create("test");
		const result = handler.createWithUnknown("test");

		expect(result).toStrictEqual(createResult);
	});

	it("createWithUnknownOrThrow matches createOrThrow", () => {
		const createResult = handler.createOrThrow("test");
		const result = handler.createWithUnknownOrThrow("test");

		expect(result).toStrictEqual(createResult);
	});

	it("create newType without constraint", () => {
		const UserId = DClean.createNewType(
			"userId",
			DDataParser.number(),
		);

		expect(
			UserId.createOrThrow(1),
		).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				DClean.newTypeKind.setTo(
					wrapValue(1),
					"userId",
				),
				{},
			),
		);
	});

	it("forbidden create newType with transform data parser", () => {
		const forbiddenNewType = createNewType(
			"forbiddenType",
			// @ts-expect-error forbidden transform dataParser.
			DPE.string().transform(() => 0),
		);
	});

	it("getConstrain", () => {
		const maxConstrain = DClean.StringMax(50);

		const handler = DClean.createNewType(
			"Label",
			DDataParser.string(),
			[
				DClean.StringMin(10),
				maxConstrain,
			],
		);

		const result = handler.getConstraint("string-max-50");

		expect(result).toBe(maxConstrain);

		type check = ExpectType<
			typeof result,
			DClean.ConstraintHandler<"string-max-50", string, readonly [DDataParser.DataParserCheckerStringMax]>,
			"strict"
		>;
	});
});
