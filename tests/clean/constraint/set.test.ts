import { DClean, DDataParser, DEither, pipe, wrapValue, type ExpectType, type WrappedValue } from "@scripts";

describe("createConstraintsSet", () => {
	const minConstraint = DClean.StringMin(3);
	const maxConstraint = DClean.StringMax(5);
	const handler = DClean.createConstraintsSet(
		DClean.String,
		[minConstraint, maxConstraint],
	);

	it("create returns constrained type on valid input", () => {
		const result = handler.create("hello");

		expect(result).toStrictEqual(
			DEither.right(
				"createConstraintsSet",
				DClean.constrainedTypeKind.setTo(
					wrapValue("hello"),
					{
						"string-min-3": null,
						"string-max-5": null,
					},
				),
			),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.Right<
				"createConstraintsSet",
				& DClean.Primitive<"hello">
				& DClean.ConstrainedType<"string-min-3", string>
				& DClean.ConstrainedType<"string-max-5", string>
			>
			| DEither.Left<
				"createConstraintsSetError",
				DDataParser.DataParserError
			>,
			"strict"
		>;
	});

	it("create returns error on invalid input", () => {
		const result = handler.create("hi");

		const expectedError = DDataParser.addIssue(
			DDataParser.createError(),
			minConstraint.checkers[0],
			"hi",
		);

		expect(result).toStrictEqual(
			DEither.left(
				"createConstraintsSetError",
				expectedError,
			),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.Left<"createConstraintsSetError", DDataParser.DataParserError>
			| DEither.Right<
				"createConstraintsSet",
				& DClean.Primitive<"hi">
				& DClean.ConstrainedType<"string-min-3", string>
				& DClean.ConstrainedType<"string-max-5", string>
			>,
			"strict"
		>;
	});

	it("create keeps constraint metadata when input already constrained", () => {
		const base = DClean.StringMin(2).createOrThrow("hello");

		const result = handler.create(base);

		expect(result).toStrictEqual(
			DEither.right(
				"createConstraintsSet",
				DClean.constrainedTypeKind.addTo(
					base,
					{
						"string-min-2": null,
						"string-min-3": null,
						"string-max-5": null,
					},
				),
			),
		);
	});

	it("createOrThrow returns constrained type", () => {
		const value = handler.createOrThrow("hello");

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("hello"),
				{
					"string-min-3": null,
					"string-max-5": null,
				},
			),
		);

		type Check = ExpectType<
			typeof value,
			& DClean.Primitive<"hello">
			& DClean.GetConstraints<typeof handler>,
			"strict"
		>;
	});

	it("createOrThrow throws on invalid input", () => {
		expect(() => handler.createOrThrow("no")).toThrow(DClean.CreateConstraintsSetError);
	});

	it("is detects constrained values", () => {
		const value = wrapValue("x") as (
			| WrappedValue<string>
			| (
				& DClean.Primitive<"x">
				& DClean.ConstrainedType<"string-min-3", string>
				& DClean.ConstrainedType<"string-max-5", string>
			)
		);

		const predicate = handler.is(value);

		expect(predicate).toBe(false);

		if (predicate) {
			type Check = ExpectType<
				typeof value,
				& DClean.Primitive<"x">
				& DClean.ConstrainedType<"string-min-3", string>
				& DClean.ConstrainedType<"string-max-5", string>,
				"strict"
			>;
		}

		const constrained = handler.createOrThrow("hello");
		const predicateConstrained = handler.is(constrained);

		expect(predicateConstrained).toBe(true);

		if (predicateConstrained) {
			type Check = ExpectType<
				typeof constrained,
				& DClean.Primitive<"hello">
				& DClean.ConstrainedType<"string-min-3", string>
				& DClean.ConstrainedType<"string-max-5", string>,
				"strict"
			>;
		}

		expect(handler.is(maxConstraint.createOrThrow("test"))).toBe(false);

		expect(
			pipe(
				"test",
				(value) => maxConstraint.createOrThrow(value),
				(value) => minConstraint.createOrThrow(value),
				handler.is,
			),
		).toBe(true);
	});

	it("createWithUnknown matches create", () => {
		const createResult = handler.create("hello");
		const result = handler.createWithUnknown("hello");

		expect(result).toStrictEqual(createResult);
	});

	it("createWithUnknownOrThrow matches createOrThrow", () => {
		const createResult = handler.createOrThrow("hello");
		const result = handler.createWithUnknownOrThrow("hello");

		expect(result).toStrictEqual(createResult);
	});

	it("getConstraint returns a constraint handler by name", () => {
		const result = handler.getConstraint("string-max-5");

		expect(result).toBe(maxConstraint);

		type Check = ExpectType<
			typeof result,
			DClean.ConstraintHandler<
				"string-max-5",
				string,
				readonly [DDataParser.DataParserCheckerStringMax],
				never
			>,
			"strict"
		>;
	});

	it("supports creation inside pipe", () => {
		const pipedHandler = pipe(
			DClean.String,
			(primitiveHandler) => DClean.createConstraintsSet(
				primitiveHandler,
				[minConstraint, maxConstraint],
			),
		);

		const value = pipedHandler.createOrThrow("hello");

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("hello"),
				{
					"string-min-3": null,
					"string-max-5": null,
				},
			),
		);
	});
});
