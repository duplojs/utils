import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser boolean", () => {
	it("parses boolean without coercion", () => {
		const schema = DDataParser.boolean();

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			boolean,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			boolean,
			"strict"
		>;

		expect(schema.parse(true)).toStrictEqual(DEither.success(true));
		expect(schema.parse(false)).toStrictEqual(DEither.success(false));
	});

	it("fails when value is not boolean", () => {
		const schema = DDataParser.boolean({ errorMessage: "boolean.invalid" });

		expect(
			schema.parse("true"),
		).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					"true",
				),
			),
		);
	});

	it("coerces string and number representations", () => {
		const schema = DDataParser.boolean({ coerce: true });

		expect(schema.parse("true")).toStrictEqual(DEither.success(true));
		expect(schema.parse("false")).toStrictEqual(DEither.success(false));
		expect(schema.parse(" TRUE  ")).toStrictEqual(DEither.success(true));
		expect(schema.parse(1)).toStrictEqual(DEither.success(true));
		expect(schema.parse(0)).toStrictEqual(DEither.success(false));
		expect(schema.parse(true)).toStrictEqual(DEither.success(true));
	});

	it("fails coercion on string", () => {
		const schema = DDataParser.boolean({
			coerce: true,
			errorMessage: "boolean.invalid",
		});

		const result = schema.parse("yes");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					"yes",
				),
			),
		);
	});

	it("fails coercion", () => {
		const schema = DDataParser.boolean({
			coerce: true,
			errorMessage: "boolean.invalid",
		});

		const result = schema.parse(12n);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					12n,
				),
			),
		);
	});
});
