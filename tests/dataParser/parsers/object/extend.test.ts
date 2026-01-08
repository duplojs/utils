import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("object.extends", () => {
	it("extends the base shape with new properties", () => {
		const base = DDataParser.object({
			name: DDataParser.string(),
			age: DDataParser.number(),
		});

		const schema = DDataParser.extends(base, {
			city: DDataParser.string(),
		});

		type checkOutput = ExpectType<
			DDataParser.Output<typeof schema>,
			{
				name: string;
				age: number;
				city: string;
			},
			"strict"
		>;

		const result = schema.parse({
			name: "mathcovax",
			age: 30,
			city: "Paris",
		});

		expect(result).toStrictEqual(DEither.success({
			name: "mathcovax",
			age: 30,
			city: "Paris",
		}));
	});

	it("overrides existing properties when provided", () => {
		const base = DDataParser.object({
			age: DDataParser.number(),
		});

		const schema = DDataParser.extends(base, {
			age: DDataParser.string(),
		});

		const result = schema.parse({ age: "30" });
		expect(result).toStrictEqual(DEither.success({ age: "30" }));

		const invalid = schema.parse({ age: 30 });
		expect(DEither.isLeft(invalid)).toBe(true);
	});
});
