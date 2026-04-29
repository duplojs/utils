import { DClean, DDataParser, DEither, DPE, wrapValue, type ExpectType, type WrappedValue } from "@scripts";

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
			| DEither.Right<
				"createNewType",
				DClean.NewType<
					"Label",
					"hello",
					typeof constraint["name"]
				>
			>
			| DEither.Left<
				"createNewTypeError",
				DDataParser.DataParserError
			>,
			"strict"
		>;
	});

	it("create returns error on invalid input", () => {
		const result = handler.create("too long");

		const expectedError = DDataParser.createError();
		DDataParser.addIssue(
			expectedError,
			"string.length <= 5",
			"too long",
			undefined,
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
				| DEither.Left<"createNewTypeError", DDataParser.DataParserError>
				| DEither.Right<"createNewType", DClean.NewType<"Label", "too long", "short">>
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
		const forbiddenNewType = DClean.createNewType(
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
			DClean.ConstraintHandler<"string-max-50", string, readonly [DDataParser.DataParserCheckerStringMax], never>,
			"strict"
		>;
	});

	it("supports constraints set", () => {
		const minConstraint = DClean.StringMin(2);
		const maxConstraint = DClean.StringMax(5);
		const constraintsSet = DClean.createConstraintsSet(
			DClean.String,
			[
				minConstraint,
				maxConstraint,
			],
		);

		const handler = DClean.createNewType(
			"Label",
			DDataParser.string(),
			constraintsSet,
		);

		type check = ExpectType<
			typeof handler,
			DClean.NewTypeHandler<
				"Label",
				string,
				readonly [
					DClean.ConstraintHandler<
						"string-min-2",
						string,
						readonly [DDataParser.DataParserCheckerStringMin],
						never
					>,
					DClean.ConstraintHandler<
						"string-max-5",
						string,
						readonly [DDataParser.DataParserCheckerStringMax],
						never
					>,
				],
				never
			>,
			"strict"
		>;

		const value = handler.createOrThrow("test");

		expect(value).toStrictEqual(
			DClean.newTypeKind.setTo(
				DClean.constrainedTypeKind.setTo(
					wrapValue("test"),
					{
						"string-min-2": null,
						"string-max-5": null,
					},
				),
				"Label",
			),
		);
		expect(handler.is(value)).toBe(true);
		expect(handler.getConstraint("string-min-2")).toBe(minConstraint);
		expect(handler.getConstraint("string-max-5")).toBe(maxConstraint);
		expect(() => handler.createOrThrow("t")).toThrow(DClean.CreateNewTypeError);

		type Check = ExpectType<
			typeof value,
			DClean.NewType<
				"Label",
				"test",
				"string-min-2" | "string-max-5"
			>,
			"strict"
		>;
	});

	it("preserves mixed constraints and constraints sets order at runtime", () => {
		const executionOrder: string[] = [];
		const firstConstraint = DClean.createConstraint(
			"first",
			DClean.String,
			DDataParser.checkerRefine<string>(() => {
				executionOrder.push("first");
				return true;
			}),
		);
		const secondConstraint = DClean.createConstraint(
			"second",
			DClean.String,
			DDataParser.checkerRefine<string>(() => {
				executionOrder.push("second");
				return true;
			}),
		);
		const thirdConstraint = DClean.createConstraint(
			"third",
			DClean.String,
			DDataParser.checkerRefine<string>(() => {
				executionOrder.push("third");
				return true;
			}),
		);
		const fourthConstraint = DClean.createConstraint(
			"fourth",
			DClean.String,
			DDataParser.checkerRefine<string>(() => {
				executionOrder.push("fourth");
				return true;
			}),
		);
		const fifthConstraint = DClean.createConstraint(
			"fifth",
			DClean.String,
			DDataParser.checkerRefine<string>(() => {
				executionOrder.push("fifth");
				return true;
			}),
		);
		const middleConstraintsSet = DClean.createConstraintsSet(
			DClean.String,
			[
				secondConstraint,
				thirdConstraint,
			],
		);
		const lastConstraintsSet = DClean.createConstraintsSet(
			DClean.String,
			fifthConstraint,
		);

		const handler = DClean.createNewType(
			"Label",
			DDataParser.string(),
			[
				firstConstraint,
				middleConstraintsSet,
				fourthConstraint,
				lastConstraintsSet,
			],
		);
		const value = handler.createOrThrow("test");

		expect(handler.internal.constraints.map(({ name }) => name)).toStrictEqual([
			"first",
			"second",
			"third",
			"fourth",
			"fifth",
		]);
		expect(Object.keys(DClean.constrainedTypeKind.getValue(value))).toStrictEqual([
			"first",
			"second",
			"third",
			"fourth",
			"fifth",
		]);
		expect(executionOrder).toStrictEqual([
			"first",
			"second",
			"third",
			"fourth",
			"fifth",
		]);
	});
});
