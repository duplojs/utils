import { DDataParser, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.literal", () => {
	it("refines output and input with predicate checker", () => {
		const parser = extended.literal(["left", "right"]).addChecker(
			DDataParser.checkerRefine((value): value is "left" => value === "left"),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			"left",
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof parser>,
			"left",
			"strict"
		>;
	});

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
