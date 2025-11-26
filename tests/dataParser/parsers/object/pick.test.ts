import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("object.pick", () => {
	it("keeps only selected keys from the shape", () => {
		const base = DDataParser.object({
			name: DDataParser.string(),
			age: DDataParser.number(),
			city: DDataParser.string(),
		});

		const schema = DDataParser.pick(base, {
			age: true,
			city: true,
		});

		type checkOutput = ExpectType<
			DDataParser.Output<typeof schema>,
			{
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
			age: 30,
			city: "Paris",
		}));
	});

	it("fails when picked key is invalid", () => {
		const base = DDataParser.object({
			count: DDataParser.number(),
			label: DDataParser.string(),
		});

		const schema = DDataParser.pick(base, { count: true });

		const result = schema.parse({
			count: "not-a-number",
			label: "kept-but-ignored",
		});

		expect(result).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
