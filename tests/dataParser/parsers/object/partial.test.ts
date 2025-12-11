import { DDataParser, DEither, pipe, type ExpectType } from "@scripts";

describe("object.partial", () => {
	const base = DDataParser.object({
		name: DDataParser.string(),
		age: DDataParser.number(),
	});

	const partial = DDataParser.partial(base);

	type _In = ExpectType<
		DDataParser.Input<typeof partial>,
		{
			name?: string;
			age?: number;
		},
		"strict"
	>;

	type _Out = ExpectType<
		DDataParser.Output<typeof partial>,
		{
			name?: string;
			age?: number;
		},
		"strict"
	>;

	it("parses when missing fields", () => {
		const result = partial.parse({ name: "john" });
		expect(result).toStrictEqual(DEither.success({ name: "john" }));
	});

	it("parses full object as before", () => {
		const result = partial.parse({
			name: "john",
			age: 20,
		});
		expect(result).toStrictEqual(DEither.success({
			name: "john",
			age: 20,
		}));
	});

	it("returns error for wrong type", () => {
		const result = partial.parse({ name: 10 });
		expect(DEither.isLeft(result)).toBe(true);
	});

	it("works curried in pipe", () => {
		const result = pipe({ age: 30 }, partial.parse);
		expect(result).toStrictEqual(DEither.success({ age: 30 }));
	});
});
