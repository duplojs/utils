import { DDataParser, DEither, pipe, type ExpectType } from "@scripts";

describe("DDataParser union", () => {
	it("parses with the first matching parser", () => {
		const schema = DDataParser.union([
			DDataParser.string(),
			DDataParser.number(),
		]);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			string | number,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			string | number,
			"strict"
		>;

		const result = schema.parse("value");

		expect(result).toStrictEqual(DEither.success("value"));

		type _CheckResult = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<string | number>,
			"strict"
		>;
	});

	it("parses with a later parser option", () => {
		const schema = DDataParser.union([
			DDataParser.string(),
			DDataParser.number(),
		]);

		const result = schema.parse(42);

		expect(result).toStrictEqual(DEither.success(42));
	});

	it("aggregates errors when all options fail", () => {
		const stringParser = DDataParser.string();
		const numberParser = DDataParser.number();
		const schema = DDataParser.union([
			stringParser,
			numberParser,
		]);

		const result = schema.parse(true);

		expect(result).toStrictEqual(
			pipe(
				DDataParser.createError(),
				(error) => DDataParser.addIssue(
					error,
					stringParser,
					true,
				),
				(error) => DDataParser.addIssue(
					error,
					numberParser,
					true,
				),
				(error) => DDataParser.addIssue(
					error,
					schema,
					true,
				),
				DEither.error,
			),
		);
	});

	describe("async", () => {
		it("parses with the first matching parser", async() => {
			const schema = DDataParser.union([
				DDataParser.string(),
				DDataParser.number(),
			]);

			const result = await schema.asyncParse("value");

			expect(result).toStrictEqual(DEither.success("value"));
		});

		it("aggregates errors when all options fail", async() => {
			const stringParser = DDataParser.string();
			const numberParser = DDataParser.number();
			const schema = DDataParser.union([
				stringParser,
				numberParser,
			]);

			const result = await schema.asyncParse(true);

			expect(result).toStrictEqual(
				pipe(
					DDataParser.createError(),
					(error) => DDataParser.addIssue(
						error,
						stringParser,
						true,
					),
					(error) => DDataParser.addIssue(
						error,
						numberParser,
						true,
					),
					(error) => DDataParser.addIssue(
						error,
						schema,
						true,
					),
					DEither.error,
				),
			);
		});
	});

	describe("isAsynchronous", () => {
		it("returns false when all options are sync", () => {
			const schema = DDataParser.union([
				DDataParser.string(),
				DDataParser.number(),
			]);

			expect(schema.isAsynchronous()).toBe(false);
		});

		it("returns true when any option is async", () => {
			const asyncOption = DDataParser.transform(
				DDataParser.string(),
				async(value) => Promise.resolve(value),
			);
			const schema = DDataParser.union([
				asyncOption,
				DDataParser.number(),
			]);

			expect(schema.isAsynchronous()).toBe(true);
		});
	});
});
