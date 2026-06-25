import { DClean, DDataParser, DEither, DPE, DString, wrapValue, type ExpectType, type WrappedValue } from "@scripts";

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
				DClean.NewTypeError<"Label">
			>,
			"strict"
		>;
		type HandlerCheck = ExpectType<
			typeof handler,
			DClean.NewTypeHandler<
				"Label",
				string,
				readonly [
					DClean.ConstraintHandler<
						"short",
						string,
						readonly [DDataParser.DataParserCheckerStringMax],
						never
					>,
				],
				never
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
			DDataParser.checkerStringMax(5),
		);

		expect(result).toStrictEqual(
			DEither.left(
				"createNewTypeError",
				{
					newTypeName: "Label",
					dataParserError: expectedError,
				},
			),
		);

		type Check = ExpectType<
			typeof result,
			(
				| DEither.Left<"createNewTypeError", DClean.NewTypeError<"Label">>
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
		const expectedError = DDataParser.createError();
		DDataParser.addIssue(
			expectedError,
			"string.length <= 5",
			"longer than five",
			undefined,
			DDataParser.checkerStringMax(5),
		);

		try {
			handler.createOrThrow("longer than five");
			expect.fail("Expected createOrThrow to throw.");
		} catch (error) {
			expect(error).toBeInstanceOf(DClean.CreateNewTypeError);
			expect(error).toMatchObject({
				newTypeName: "Label",
				data: "longer than five",
				dataParserError: expectedError,
			});
		}
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
		const value = UserId.createOrThrow(1);

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				DClean.newTypeKind.setTo(
					wrapValue(1),
					"userId",
				),
				{},
			),
		);

		type HandlerCheck = ExpectType<
			typeof UserId,
			DClean.NewTypeHandler<
				"userId",
				number,
				readonly [],
				never
			>,
			"strict"
		>;
		type ValueCheck = ExpectType<
			typeof value,
			DClean.NewType<
				"userId",
				1,
				never
			>,
			"strict"
		>;
	});

	it("infers deep readonly value from object data parser", () => {
		const Profile = DClean.createNewType(
			"Profile",
			DDataParser.object({
				identity: DDataParser.object({
					name: DDataParser.string(),
				}),
			}),
		);

		const value = Profile.createOrThrow({
			identity: {
				name: "Jane",
			},
		});

		expect(value).toStrictEqual(
			DClean.newTypeKind.setTo(
				DClean.constrainedTypeKind.setTo(
					wrapValue({
						identity: {
							name: "Jane",
						},
					}),
					{},
				),
				"Profile",
			),
		);

		type HandlerCheck = ExpectType<
			typeof Profile,
			DClean.NewTypeHandler<
				"Profile",
				{
					readonly identity: {
						readonly name: string;
					};
				},
				readonly [],
				never
			>,
			"strict"
		>;
		type ValueCheck = ExpectType<
			typeof value,
			DClean.NewType<
				"Profile",
				{
					readonly identity: {
						readonly name: "Jane";
					};
				},
				never
			>,
			"strict"
		>;
	});

	it("creates new type from primitive handler data parser", () => {
		const Label = DClean.createNewType(
			"LabelFromPrimitive",
			DClean.String,
		);

		const value = Label.createOrThrow("test");
		const result = Label.create("test");

		expect(value).toStrictEqual(
			DClean.newTypeKind.setTo(
				DClean.constrainedTypeKind.setTo(
					wrapValue("test"),
					{},
				),
				"LabelFromPrimitive",
			),
		);
		expect(result).toStrictEqual(
			DEither.right(
				"createNewType",
				value,
			),
		);

		type HandlerCheck = ExpectType<
			typeof Label,
			DClean.NewTypeHandler<
				"LabelFromPrimitive",
				string,
				readonly [],
				never
			>,
			"strict"
		>;
		type ValueCheck = ExpectType<
			typeof value,
			DClean.NewType<
				"LabelFromPrimitive",
				"test",
				never
			>,
			"strict"
		>;
		type ResultCheck = ExpectType<
			typeof result,
			| DEither.Right<
				"createNewType",
				DClean.NewType<
					"LabelFromPrimitive",
					"test",
					never
				>
			>
			| DEither.Left<
				"createNewTypeError",
				DClean.NewTypeError<"LabelFromPrimitive">
			>,
			"strict"
		>;
	});

	it("creates new type from primitive handler with constraints", () => {
		const minConstraint = DClean.StringMin(2);
		const maxConstraint = DClean.StringMax(5);
		const Label = DClean.createNewType(
			"ConstrainedLabelFromPrimitive",
			DClean.String,
			[
				minConstraint,
				maxConstraint,
			],
		);

		const value = Label.createOrThrow("test");

		expect(value).toStrictEqual(
			DClean.newTypeKind.setTo(
				DClean.constrainedTypeKind.setTo(
					wrapValue("test"),
					{
						"string-min-2": null,
						"string-max-5": null,
					},
				),
				"ConstrainedLabelFromPrimitive",
			),
		);
		expect(Label.getConstraint("string-min-2")).toBe(minConstraint);
		expect(Label.getConstraint("string-max-5")).toBe(maxConstraint);
		expect(() => Label.createOrThrow("t")).toThrow(DClean.CreateNewTypeError);

		type HandlerCheck = ExpectType<
			typeof Label,
			DClean.NewTypeHandler<
				"ConstrainedLabelFromPrimitive",
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
		type ValueCheck = ExpectType<
			typeof value,
			DClean.NewType<
				"ConstrainedLabelFromPrimitive",
				"test",
				"string-min-2" | "string-max-5"
			>,
			"strict"
		>;
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

	it("refines new type value with a predicate constraint", () => {
		const prefixChecker = DDataParser.checkerRefine(
			DString.startsWith("prefix-"),
		);
		const prefixedConstraint = DClean.createConstraint(
			"prefixed",
			DClean.String,
			prefixChecker,
		);
		const handler = DClean.createNewType(
			"PrefixedLabel",
			DClean.String,
			prefixedConstraint,
		);

		const value = handler.createOrThrow("prefix-value");

		expect(value).toStrictEqual(
			DClean.newTypeKind.setTo(
				DClean.constrainedTypeKind.setTo(
					wrapValue("prefix-value"),
					{ prefixed: null },
				),
				"PrefixedLabel",
			),
		);
		expect(() => handler.createWithUnknownOrThrow("value"))
			.toThrow(DClean.CreateNewTypeError);

		const largeResult = handler.createWithLarge("prefix-large");
		expect(DEither.isRight(largeResult)).toBe(true);
		expect(() => handler.createWithLargeOrThrow("value"))
			.toThrow(DClean.CreateNewTypeError);

		if (false) {
			// @ts-expect-error createWithLarge does not accept unrelated input.
			handler.createWithLarge(1);
		}

		type CheckHandler = ExpectType<
			typeof handler,
			DClean.NewTypeHandler<
				"PrefixedLabel",
				`prefix-${string}`,
				readonly [typeof prefixedConstraint],
				string
			>,
			"strict"
		>;

		type CheckLargeResult = ExpectType<
			typeof largeResult,
			| DEither.Right<"createNewType", DClean.NewType<"PrefixedLabel", `prefix-${string}`, "prefixed">>
			| DEither.Left<"createNewTypeError", DClean.NewTypeError<"PrefixedLabel">>,
			"strict"
		>;

		type CheckValue = ExpectType<
			typeof value,
			DClean.NewType<"PrefixedLabel", "prefix-value", "prefixed">,
			"strict"
		>;

		type CheckNewType = ExpectType<
			DClean.GetNewType<typeof handler>,
			DClean.NewType<"PrefixedLabel", `prefix-${string}`, "prefixed">,
			"strict"
		>;
	});

	it("intersects new type value from nested constraints sets", () => {
		const emailChecker = DDataParser.checkerEmail();
		const adminChecker = DDataParser.checkerRefine(
			DString.startsWith("admin@"),
		);
		const emailConstraint = DClean.createConstraint(
			"email-like",
			DClean.String,
			emailChecker,
		);
		const adminConstraint = DClean.createConstraint(
			"admin-like",
			DClean.String,
			adminChecker,
		);
		const nestedConstraintsSet = DClean.createConstraintsSet(
			DClean.String,
			emailConstraint,
		);
		const constraintsSet = DClean.createConstraintsSet(
			DClean.String,
			[
				nestedConstraintsSet,
				adminConstraint,
			],
		);
		const handler = DClean.createNewType(
			"AdminEmailLabel",
			DClean.String,
			constraintsSet,
		);

		type AdminEmail = `admin@${string}` & `${string}@${string}.${string}`;

		const value = handler.createOrThrow("admin@example.com");

		expect(value).toStrictEqual(
			DClean.newTypeKind.setTo(
				DClean.constrainedTypeKind.setTo(
					wrapValue("admin@example.com"),
					{
						"email-like": null,
						"admin-like": null,
					},
				),
				"AdminEmailLabel",
			),
		);
		expect(handler.internal.constraints.map(({ name }) => name)).toStrictEqual([
			"email-like",
			"admin-like",
		]);
		expect(() => handler.createWithUnknownOrThrow("user@example.com"))
			.toThrow(DClean.CreateNewTypeError);

		type CheckHandler = ExpectType<
			typeof handler,
			DClean.NewTypeHandler<
				"AdminEmailLabel",
				AdminEmail,
				readonly [
					typeof emailConstraint,
					typeof adminConstraint,
				],
				string
			>,
			"strict"
		>;

		type CheckValue = ExpectType<
			typeof value,
			DClean.NewType<"AdminEmailLabel", "admin@example.com", "email-like" | "admin-like">,
			"strict"
		>;

		type CheckNewType = ExpectType<
			DClean.GetNewType<typeof handler>,
			DClean.NewType<"AdminEmailLabel", AdminEmail, "email-like" | "admin-like">,
			"strict"
		>;
	});

	it("intersects new type value from constraints with data parser source", () => {
		const emailChecker = DDataParser.checkerEmail();
		const adminChecker = DDataParser.checkerRefine(
			DString.startsWith("admin@"),
		);
		const emailConstraint = DClean.createConstraint(
			"email-like",
			DClean.String,
			emailChecker,
		);
		const adminConstraint = DClean.createConstraint(
			"admin-like",
			DClean.String,
			adminChecker,
		);
		const handler = DClean.createNewType(
			"AdminEmailFromParser",
			DDataParser.string(),
			[
				emailConstraint,
				adminConstraint,
			],
		);

		type AdminEmail = `admin@${string}` & `${string}@${string}.${string}`;

		const value = handler.createOrThrow("admin@example.com");

		expect(value).toStrictEqual(
			DClean.newTypeKind.setTo(
				DClean.constrainedTypeKind.setTo(
					wrapValue("admin@example.com"),
					{
						"email-like": null,
						"admin-like": null,
					},
				),
				"AdminEmailFromParser",
			),
		);
		expect(() => handler.createWithUnknownOrThrow("user@example.com"))
			.toThrow(DClean.CreateNewTypeError);

		type CheckHandler = ExpectType<
			typeof handler,
			DClean.NewTypeHandler<
				"AdminEmailFromParser",
				AdminEmail,
				readonly [
					typeof emailConstraint,
					typeof adminConstraint,
				],
				string
			>,
			"strict"
		>;

		type CheckValue = ExpectType<
			typeof value,
			DClean.NewType<"AdminEmailFromParser", "admin@example.com", "email-like" | "admin-like">,
			"strict"
		>;

		type CheckNewType = ExpectType<
			DClean.GetNewType<typeof handler>,
			DClean.NewType<"AdminEmailFromParser", AdminEmail, "email-like" | "admin-like">,
			"strict"
		>;
	});

	it("accepts a large input when new type starts from a refined data parser", () => {
		const handler = DClean.createNewType(
			"EmailAddress",
			DDataParser.email(),
		);

		const emailFromDatabase = "user@example.com" as string;
		const largeResult = handler.createWithLarge(emailFromDatabase);
		const value = handler.createWithLargeOrThrow(emailFromDatabase);

		expect(DEither.isRight(largeResult)).toBe(true);
		expect(value).toStrictEqual(
			DClean.newTypeKind.setTo(
				DClean.constrainedTypeKind.setTo(
					wrapValue("user@example.com"),
					{},
				),
				"EmailAddress",
			),
		);
		expect(() => handler.createWithLargeOrThrow("invalid-email"))
			.toThrow(DClean.CreateNewTypeError);

		if (false) {
			// @ts-expect-error createWithLarge does not accept unrelated input.
			handler.createWithLarge(1);
		}

		type CheckHandler = ExpectType<
			typeof handler,
			DClean.NewTypeHandler<
				"EmailAddress",
				`${string}@${string}.${string}`,
				readonly [],
				never
			>,
			"strict"
		>;

		type CheckLargeResult = ExpectType<
			typeof largeResult,
			| DEither.Right<
				"createNewType",
				DClean.NewType<
					"EmailAddress",
					`${string}@${string}.${string}`,
					never
				>
			>
			| DEither.Left<
				"createNewTypeError",
				DClean.NewTypeError<"EmailAddress">
			>,
			"strict"
		>;

		type CheckValue = ExpectType<
			typeof value,
			DClean.NewType<
				"EmailAddress",
				`${string}@${string}.${string}`,
				never
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
