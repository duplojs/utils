import { DDataParser, DEither, pipe, type ExpectType } from "@scripts";

describe("DDataParser record", () => {
	it("parses record of strings", () => {
		const schema = DDataParser.record(
			DDataParser.union([
				DDataParser.string(),
				DDataParser.number({ coerce: true }),
			]),
			DDataParser.string(),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			Partial<Record<string, string>>,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			Partial<Record<string, string>>,
			"strict"
		>;

		const input = {
			foo: "bar",
			1: "qux",
		};

		const result = schema.parse(input);

		expect(result).toStrictEqual(DEither.success(input));

		type _Check = ExpectType<
			typeof result,
			| DEither.EitherError<DDataParser.DataParserError>
			| DEither.EitherSuccess<Partial<Record<string, string>>>,
			"strict"
		>;
	});

	it("fails when key parser rejects a key", () => {
		const keyParser = DDataParser.literal(["value", "tt"]);
		const valueParser = DDataParser.number();
		const schema = DDataParser.record(
			keyParser,
			valueParser,
			{ errorMessage: "record.invalid" },
		);

		const result = schema.parse({ forbidden: "testValue" });

		expect(result).toStrictEqual(
			pipe(
				DDataParser.createError(),
				(error) => DDataParser.setErrorPath(
					error,
					"forbidden",
					0,
				),
				(error) => DDataParser.addIssue(
					error,
					keyParser,
					"forbidden",
				),
				(error) => DDataParser.addIssue(
					error,
					valueParser,
					"testValue",
				),
				(error) => DEither.error({
					...error,
					currentPath: [],
				}),
			),
		);
	});

	it("fails when input is not an object", () => {
		const schema = DDataParser.record(
			DDataParser.string(),
			DDataParser.string(),
			{ errorMessage: "record.invalid" },
		);

		const result = schema.parse("not-an-object");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					"not-an-object",
				),
			),
		);
	});

	it("parses record with template literal keys", () => {
		const schema = DDataParser.record(
			DDataParser.templateLiteral([
				"prefix-",
				DDataParser.literal(["a", "b"]),
			]),
			DDataParser.number(),
		);

		const input = {
			"prefix-a": 1,
			"prefix-b": 2,
		};

		expect(schema.parse(input)).toStrictEqual(DEither.success(input));
	});

	it("returns error when required template literal key missing", () => {
		const schema = DDataParser.record(
			DDataParser.templateLiteral([
				"prefix-",
				DDataParser.literal(["a", "b"]),
			]),
			DDataParser.number(),
		);

		const input = {
			"prefix-a": 1,
		};

		expect(schema.parse(input)).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("fails when value parser rejects a value", () => {
		const keyParser = DDataParser.string();
		const valueParser = DDataParser.number();
		const schema = DDataParser.record(
			keyParser,
			valueParser,
		);

		const result = schema.parse({ foo: "bar" });

		expect(result).toStrictEqual(
			pipe(
				DDataParser.createError(),
				(error) => DDataParser.setErrorPath(error, "foo", 0),
				(error) => DDataParser.addIssue(error, valueParser, "bar"),
				(error) => DEither.error({
					...error,
					currentPath: [],
				}),
			),
		);
	});

	it("parses record with coerce number key parser", () => {
		const schema = DDataParser.record(
			DDataParser.number({ coerce: true }),
			DDataParser.string(),
		);

		const input = {
			1: "one",
			2: "two",
		};

		expect(schema.parse(input)).toStrictEqual(DEither.success({
			1: "one",
			2: "two",
		}));
	});

	it("allows missing keys when key parser does not enforce required keys", () => {
		const schema = DDataParser.record(
			DDataParser.string(),
			DDataParser.number(),
		);

		expect(schema.parse({})).toStrictEqual(DEither.success({}));

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			Partial<Record<string, number>>,
			"strict"
		>;
	});

	it("allows optional template literal keys when union contains string", () => {
		const schema = DDataParser.record(
			DDataParser.union([
				DDataParser.templateLiteral([
					"prefix-",
					DDataParser.literal(["a", "b"]),
					DDataParser.string(),
				]),
				DDataParser.literal(23),
			]),
			DDataParser.number(),
		);

		const input = {
			"prefix-akey": 5,
		};

		expect(schema.parse(input)).toStrictEqual(DEither.success(input));
		expect(schema.parse({})).toStrictEqual(DEither.success({}));
		expect(schema.parse({ "prefix-c": 23 })).toStrictEqual(DEither.error(expect.any(Object)));

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			Partial<Record<`prefix-a${string}` | `prefix-b${string}` | "23", number>>,
			"strict"
		>;
	});

	it("parses record with deeply nested template literal keys", () => {
		const schema = DDataParser.record(
			DDataParser.templateLiteral([
				"user-",
				DDataParser.literal(["admin", "guest"]),
				"-",
				DDataParser.templateLiteral([
					DDataParser.union([
						DDataParser.literal(["eu", "us"]),
						DDataParser.string({
							checkers: [DDataParser.checkerStringRegex(/^[a-z]{2}$/)],
						}),
					]),
				]),
			]),
			DDataParser.union([
				DDataParser.literal(["read", "write"]),
				DDataParser.number(),
			]),
		);

		type ExpectedRecord = Partial<Record<`user-${"admin" | "guest"}-${string}`, "read" | "write" | number>>;

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			ExpectedRecord,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			ExpectedRecord,
			"strict"
		>;

		const validInput: ExpectedRecord = {
			"user-admin-us": "read",
			"user-guest-eu": "write",
			"user-admin-fr": 1,
		};

		expect(schema.parse(validInput)).toStrictEqual(DEither.success(validInput));
		expect(schema.parse({ "user-guest-usa": "read" })).toStrictEqual(DEither.error(expect.any(Object)));
	});

	describe("async", () => {
		it("parses record of strings", async() => {
			const schema = DDataParser.record(
				DDataParser.string(),
				DDataParser.string(),
			);

			const input = {
				foo: "bar",
				baz: "qux",
			};

			const result = await schema.asyncParse(input);

			expect(result).toStrictEqual(DEither.success(input));
		});

		it("fails when key parser rejects a key", async() => {
			const keyParser = DDataParser.literal(["value", "tt"]);
			const valueParser = DDataParser.number();
			const schema = DDataParser.record(
				keyParser,
				valueParser,
				{ errorMessage: "record.invalid" },
			);

			const result = await schema.asyncParse({ forbidden: "testValue" });

			expect(result).toStrictEqual(
				pipe(
					DDataParser.createError(),
					(error) => DDataParser.setErrorPath(
						error,
						"forbidden",
						0,
					),
					(error) => DDataParser.addIssue(
						error,
						keyParser,
						"forbidden",
					),
					(error) => DDataParser.addIssue(
						error,
						valueParser,
						"testValue",
					),
					(error) => DEither.error({
						...error,
						currentPath: [],
					}),
				),
			);
		});

		it("fails when input is not an object", async() => {
			const schema = DDataParser.record(
				DDataParser.string(),
				DDataParser.string(),
				{ errorMessage: "record.invalid" },
			);

			const result = await schema.asyncParse("not-an-object");

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.addIssue(
						DDataParser.createError(),
						schema,
						"not-an-object",
					),
				),
			);
		});

		it("parses record with template literal keys", async() => {
			const schema = DDataParser.record(
				DDataParser.templateLiteral([
					"prefix-",
					DDataParser.literal(["a", "b"]),
				]),
				DDataParser.number(),
			);

			const input = {
				"prefix-a": 1,
				"prefix-b": 2,
			};

			expect(await schema.asyncParse(input)).toStrictEqual(DEither.success(input));
			expect(await schema.asyncParse({
				"prefix-b": 12,
				"prefix-c": 25,
			})).toStrictEqual(DEither.error(expect.any(Object)));

			type _CheckOut = ExpectType<
				DDataParser.Output<typeof schema>,
				Record<"prefix-a" | "prefix-b", number>,
				"strict"
			>;
		});

		it("fails when value parser rejects a value", async() => {
			const keyParser = DDataParser.string();
			const valueParser = DDataParser.number();
			const schema = DDataParser.record(
				keyParser,
				valueParser,
			);

			const result = await schema.asyncParse({ foo: "bar" });

			expect(result).toStrictEqual(
				pipe(
					DDataParser.createError(),
					(error) => DDataParser.setErrorPath(error, "foo", 0),
					(error) => DDataParser.addIssue(error, valueParser, "bar"),
					(error) => DEither.error({
						...error,
						currentPath: [],
					}),
				),
			);
		});

		it("allows missing keys asynchronously when key parser is generic string", async() => {
			const schema = DDataParser.record(
				DDataParser.string(),
				DDataParser.boolean(),
			);

			expect(await schema.asyncParse({})).toStrictEqual(DEither.success({}));
		});

		it("returns error when required template literal key missing", async() => {
			const schema = DDataParser.record(
				DDataParser.templateLiteral([
					"prefix-",
					DDataParser.literal(["a", "b"]),
				]),
				DDataParser.number(),
			);

			const input = {
				"prefix-a": 1,
			};

			await expect(schema.asyncParse(input)).resolves.toStrictEqual(DEither.error(expect.any(Object)));
		});

		it("parses record with deeply nested template literal keys", async() => {
			const schema = DDataParser.record(
				DDataParser.templateLiteral([
					"user-",
					DDataParser.literal(["admin", "guest"]),
					"-",
					DDataParser.templateLiteral([
						DDataParser.union([
							DDataParser.literal(["eu", "us"]),
							DDataParser.string({
								checkers: [DDataParser.checkerStringRegex(/^[a-z]{2}$/)],
							}),
						]),
					]),
				]),
				DDataParser.union([
					DDataParser.literal(["read", "write"]),
					DDataParser.number(),
				]),
			);

			const validInput = {
				"user-admin-us": "read",
				"user-guest-eu": "write",
			};

			expect(await schema.asyncParse(validInput)).toStrictEqual(DEither.success(validInput));
			expect(await schema.asyncParse({ "user-guest-usa": "read" })).toStrictEqual(DEither.error(expect.any(Object)));
		});
	});

	describe("isAsynchronous", () => {
		it("returns false when value parser is sync", () => {
			const schema = DDataParser.record(
				DDataParser.string(),
				DDataParser.number(),
			);

			expect(schema.isAsynchronous()).toBe(false);
		});

		it("returns true when value parser is async", () => {
			const asyncValue = DDataParser.transform(
				DDataParser.number(),
				async(value) => Promise.resolve(value),
			);
			const schema = DDataParser.record(
				DDataParser.string(),
				asyncValue,
			);

			expect(schema.isAsynchronous()).toBe(true);
		});
	});
});
