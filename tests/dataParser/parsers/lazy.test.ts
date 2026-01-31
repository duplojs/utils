import { DDataParser, DEither, pipe, type ExpectType } from "@scripts";

describe("DDataParser lazy", () => {
	it("defers parser creation", () => {
		const schema = DDataParser.lazy(() => DDataParser.number());

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			number,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			number,
			"strict"
		>;

		const result = schema.parse(42);

		expect(result).toStrictEqual(DEither.success(42));

		type _Check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<number>,
			"strict"
		>;
	});

	it("supports recursive definitions", () => {
		interface Tree {
			value: number;
			children?: Tree[];
		}

		const parser: DDataParser.Contract<Tree> = DDataParser.object({
			value: DDataParser.number(),
			children: pipe(
				DDataParser.lazy(() => parser),
				DDataParser.array,
				DDataParser.optional,
			),
		});

		const input = {
			value: 1,
			children: [
				{ value: 2 },
				{
					value: 3,
					children: [{ value: 4 }],
				},
			],
		};

		const result = parser.parse(input);

		expect(result).toStrictEqual(DEither.success(input));
	});

	it("fails when inner parser fails", () => {
		const inner = DDataParser.number({ errorMessage: "not-number" });
		const schema = DDataParser.lazy(() => inner);

		const result = schema.parse("oops");

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					inner,
					"oops",
				),
			),
		);
	});

	describe("async", () => {
		it("supports recursive definitions", async() => {
			interface Tree {
				value: number;
				children?: Tree[];
			}

			const parser: DDataParser.Contract<Tree> = DDataParser.object({
				value: DDataParser.number(),
				children: pipe(
					DDataParser.lazy(() => parser),
					DDataParser.array,
					DDataParser.optional,
				),
			});

			const input = {
				value: 1,
				children: [
					{ value: 2 },
					{
						value: 3,
						children: [{ value: 4 }],
					},
				],
			};

			const result = await parser.asyncParse(input);

			expect(result).toStrictEqual(DEither.success(input));
		});

		it("fails when inner parser fails", async() => {
			const inner = DDataParser.number({ errorMessage: "not-number" });
			const schema = DDataParser.lazy(() => inner);

			const result = await schema.asyncParse("oops");

			expect(result).toStrictEqual(
				DEither.error(
					DDataParser.addIssue(
						DDataParser.createError(),
						inner,
						"oops",
					),
				),
			);
		});
	});

	describe("isAsynchronous", () => {
		it("returns false when getter parser is sync", () => {
			const schema = DDataParser.lazy(() => DDataParser.number());

			expect(schema.isAsynchronous()).toBe(false);
		});

		it("returns true when getter parser is async", () => {
			const asyncInner = DDataParser.transform(
				DDataParser.number(),
				async(value) => Promise.resolve(value),
			);
			const schema = DDataParser.lazy(() => asyncInner);

			expect(schema.isAsynchronous()).toBe(true);
		});
	});
});
