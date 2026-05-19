import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.literal", () => {
	it("create data parser with checker", () => {
		const dataParser = extended.literal(["foo", "bar"], {
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						"foo" | "bar",
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					"foo" | "bar",
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses literal values", () => {
		const parser = extended.literal(["foo", "bar"]);
		const result = parser.parse("foo");
		expect(result).toStrictEqual(DEither.success("foo"));
		expect(parser.parse("baz")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<"foo" | "bar">,
			"strict"
		>;
	});
});
