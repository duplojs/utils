import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("object.required", () => {
	const base = DDataParser.object({
		name: DDataParser.optional(DDataParser.string()),
		age: DDataParser.optional(DDataParser.number()),
		active: DDataParser.boolean(),
	});

	const required = DDataParser.required(base);

	type _In = ExpectType<
		DDataParser.Input<typeof required>,
		{
			name: string;
			age: number;
			active: boolean;
		},
		"strict"
	>;

	type _Out = ExpectType<
		DDataParser.Output<typeof required>,
		{
			name: string;
			age: number;
			active: boolean;
		},
		"strict"
	>;

	it("parses when all required fields are present", () => {
		const result = required.parse({
			name: "john",
			age: 30,
			active: true,
		});

		expect(result).toStrictEqual(
			DEither.success({
				name: "john",
				age: 30,
				active: true,
			}),
		);

		if (DEither.isRight(result)) {
			type _Out = ExpectType<
				typeof result,
				DEither.Success<{
					name: string;
					age: number;
					active: boolean;
				}>,
				"strict"
			>;
		}
	});

	it("fails when a required field is missing", () => {
		const result = required.parse({
			name: "john",
			active: true,
		});

		expect(DEither.isLeft(result)).toBe(true);
	});
});
