import { DClean, type DDataParser, DEither, wrapValue, type ExpectType } from "@scripts";

describe("defaultConstraint string", () => {
	it("validates email strings", () => {
		const result = DClean.Email.create("user@example.com");

		expect(result).toStrictEqual(
			DEither.right(
				"createConstrainedType",
				DClean.constrainedTypeKind.setTo(
					wrapValue("user@example.com"),
					{ email: null },
				),
			),
		);
		expect(() => DClean.Email.createOrThrow("invalid@@@@."))
			.toThrow(DClean.CreateConstrainedTypeError);

		type check = ExpectType<
			typeof DClean.Email,
			DClean.ConstraintHandler<"email", `${string}@${string}.${string}`, readonly [DDataParser.DataParserCheckerEmail], never>,
			"strict"
		>;

		type check1 = ExpectType<
			DClean.Email,
			DClean.ConstrainedType<"email", `${string}@${string}.${string}`>,
			"strict"
		>;
	});

	it("validates uuid strings", () => {
		const value = DClean.Uuid.createOrThrow("550e8400-e29b-41d4-a716-446655440000");

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("550e8400-e29b-41d4-a716-446655440000"),
				{ uuid: null },
			),
		);
		expect(() => DClean.Uuid.createOrThrow("invalid"))
			.toThrow(DClean.CreateConstrainedTypeError);

		type check = ExpectType<
			typeof DClean.Uuid,
			DClean.ConstraintHandler<"uuid", string, readonly [DDataParser.DataParserCheckerUuid], never>,
			"strict"
		>;

		type check1 = ExpectType<
			DClean.Uuid,
			DClean.ConstrainedType<"uuid", string>,
			"strict"
		>;
	});

	it("validates url strings", () => {
		const value = DClean.Url.createOrThrow("https://utils.duplojs.dev");

		expect(value).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("https://utils.duplojs.dev"),
				{ url: null },
			),
		);
		expect(() => DClean.Url.createOrThrow("invalid"))
			.toThrow(DClean.CreateConstrainedTypeError);

		type check = ExpectType<
			typeof DClean.Url,
			DClean.ConstraintHandler<"url", string, readonly [DDataParser.DataParserCheckerUrl], never>,
			"strict"
		>;

		type check1 = ExpectType<
			DClean.Url,
			DClean.ConstrainedType<"url", string>,
			"strict"
		>;
	});

	it("creates minimum and maximum string constraints", () => {
		const stringMin = DClean.StringMin(3);
		const stringMax = DClean.StringMax(5);

		expect(stringMin.name).toBe("string-min-3");
		expect(stringMax.name).toBe("string-max-5");
		expect(stringMin.createOrThrow("abc")).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("abc"),
				{ "string-min-3": null },
			),
		);
		expect(stringMax.createOrThrow("abcde")).toStrictEqual(
			DClean.constrainedTypeKind.setTo(
				wrapValue("abcde"),
				{ "string-max-5": null },
			),
		);
		expect(() => stringMin.createOrThrow("ab"))
			.toThrow(DClean.CreateConstrainedTypeError);
		expect(() => stringMax.createOrThrow("abcdef"))
			.toThrow(DClean.CreateConstrainedTypeError);

		type check = ExpectType<
			typeof stringMin,
			DClean.ConstraintHandler<"string-min-3", string, readonly [DDataParser.DataParserCheckerStringMin], never>,
			"strict"
		>;

		type check1 = ExpectType<
			typeof stringMax,
			DClean.ConstraintHandler<"string-max-5", string, readonly [DDataParser.DataParserCheckerStringMax], never>,
			"strict"
		>;
	});
});
