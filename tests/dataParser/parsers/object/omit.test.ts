import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("object.omit", () => {
	it("omits selected keys from the shape", () => {
		const base = DDataParser.object({
			name: DDataParser.string(),
			age: DDataParser.number(),
			city: DDataParser.string(),
		});

		const schema = DDataParser.omit(base, { age: true });

		type checkOutput = ExpectType<
			DDataParser.Output<typeof schema>,
			{
				name: string;
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
			city: "Paris",
		}));
	});

	it("accepts objects that are missing omitted keys", () => {
		const base = DDataParser.object({
			title: DDataParser.string(),
			description: DDataParser.string(),
			metadata: DDataParser.object({
				tag: DDataParser.string(),
			}),
		});

		const schema = DDataParser.omit(base, { metadata: true });

		const result = schema.parse({
			title: "note",
			description: "short",
		});

		expect(result).toStrictEqual(DEither.success({
			title: "note",
			description: "short",
		}));
	});
});
