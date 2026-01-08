import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.object", () => {
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
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<typeof value>,
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
});
