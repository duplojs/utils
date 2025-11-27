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

		expect(parser.parse(value)).toStrictEqual(DEither.success(value));
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
});
