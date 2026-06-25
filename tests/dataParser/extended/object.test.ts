import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.object", () => {
	it("refines output and input with predicate checker", () => {
		const parser = extended.object({
			name: extended.string(),
		}).addChecker(
			DDataParser.checkerRefine(
				(value): value is { name: "alice" } => value.name === "alice",
			),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			{ name: "alice" } & { name: string },
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof parser>,
			{ name: "alice" } & { name: string },
			"strict"
		>;
	});

	it("create data parser with checker", () => {
		const dataParser = extended.object({ name: extended.string() }, {
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						{ name: string },
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					{ name: string },
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses object shape", () => {
		const parser = extended.object({
			name: extended.string(),
			age: extended.number(),
		});

		const value = {
			name: "alice",
			age: 30,
		};

		const result = parser.parse(value);
		expect(result).toStrictEqual(DEither.success(value));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<typeof value>,
			"strict"
		>;
	});

	it("supports omit", () => {
		const parser = extended.object({
			name: extended.string(),
			age: extended.number(),
			city: extended.string(),
		}).omit({ city: true });

		const value = {
			name: "alice",
			age: 30,
		};

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			{
				name: string;
				age: number;
			},
			"strict"
		>;

		expect(parser.parse(value)).toStrictEqual(DEither.success(value));
	});

	it("supports pick", () => {
		const parser = extended.object({
			name: extended.string(),
			age: extended.number(),
			city: extended.string(),
		}).pick({
			name: true,
			city: true,
		});

		const value = {
			name: "alice",
			city: "Paris",
		};

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			{
				name: string;
				city: string;
			},
			"strict"
		>;

		expect(parser.parse(value)).toStrictEqual(DEither.success(value));
	});

	it("supports extends", () => {
		const parser = extended.object({
			name: extended.string(),
			age: extended.number(),
		}).extends({
			city: extended.string(),
		});

		const value = {
			name: "alice",
			age: 30,
			city: "Paris",
		};

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			{
				name: string;
				age: number;
				city: string;
			},
			"strict"
		>;

		expect(parser.parse(value)).toStrictEqual(DEither.success(value));
	});

	it("supports partial", () => {
		const parser = extended.object({
			name: extended.string(),
			age: extended.number(),
		}).partial();

		const partialValue = { name: "alice" };

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			{
				name?: string;
				age?: number;
			},
			"strict"
		>;

		expect(parser.parse(partialValue)).toStrictEqual(DEither.success(partialValue));
	});

	it("supports required", () => {
		const parser = extended.object({
			name: extended.optional(extended.string()),
			age: extended.optional(extended.number()),
		}).required();

		const value = {
			name: "alice",
			age: 30,
		};

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			{
				name: string;
				age: number;
			},
			"strict"
		>;

		expect(parser.parse(value)).toStrictEqual(DEither.success(value));

		const missing = { name: "alice" };
		expect(DEither.isLeft(parser.parse(missing))).toBe(true);
	});

	it("infers checker refine value on omit definition", () => {
		const parser = extended.object({
			name: extended.string(),
			age: extended.number(),
			city: extended.string(),
		}).omit(
			{ city: true },
			{
				checkers: [
					DDataParser.checkerRefine((value) => {
						type check = ExpectType<
							typeof value,
							{
								name: string;
								age: number;
							},
							"strict"
						>;
						return true;
					}),
				],
			},
		);

		void parser;
	});

	it("infers checker refine value on pick definition", () => {
		const parser = extended.object({
			name: extended.string(),
			age: extended.number(),
			city: extended.string(),
		}).pick(
			{
				name: true,
				city: true,
			},
			{
				checkers: [
					DDataParser.checkerRefine((value) => {
						type check = ExpectType<
							typeof value,
							{
								name: string;
								city: string;
							},
							"strict"
						>;
						return true;
					}),
				],
			},
		);

		void parser;
	});

	it("infers checker refine value on extends definition", () => {
		const parser = extended.object({
			name: extended.string(),
			age: extended.number(),
		}).extends(
			{
				city: extended.string(),
			},
			{
				checkers: [
					DDataParser.checkerRefine((value) => {
						type check = ExpectType<
							typeof value,
							{
								name: string;
								age: number;
								city: string;
							},
							"strict"
						>;
						return true;
					}),
				],
			},
		);

		void parser;
	});

	it("infers checker refine value on partial definition", () => {
		const parser = extended.object({
			name: extended.string(),
			age: extended.number(),
		}).partial({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						{
							name?: string;
							age?: number;
						},
						"strict"
					>;
					return true;
				}),
			],
		});

		void parser;
	});

	it("infers checker refine value on required definition", () => {
		const parser = extended.object({
			name: extended.optional(extended.string()),
			age: extended.optional(extended.number()),
		}).required({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						{
							name: string;
							age: number;
						},
						"strict"
					>;
					return true;
				}),
			],
		});

		void parser;
	});
});
