import { DDataParser, DDate, DEither, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.date", () => {
	it("refines output and input with predicate checker", () => {
		const parser = extended.date().addChecker(
			DDataParser.checkerRefine(
				(value): value is DDate.TheDate & { readonly __refinedDate: true } => value instanceof DDate.TheDate,
			),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof parser>,
			DDate.TheDate & { readonly __refinedDate: true },
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof parser>,
			Date | DDate.SerializedTheDate | (DDate.TheDate & { readonly __refinedDate: true }),
			"strict"
		>;
	});

	it("create data parser with checker", () => {
		const dataParser = extended.date({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						DDate.TheDate,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					DDate.TheDate,
					"strict"
				>;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses TheDate values", () => {
		const parser = extended.date();
		const value: DDate.SerializedTheDate = "date42+";

		const result = parser.parse(value);
		expect(result).toStrictEqual(DEither.success(DDate.createOrThrow(value)));

		type check = ExpectType<
			typeof result,
			DEither.Error<DDataParser.DataParserError> | DEither.Success<DDate.TheDate>,
			"strict"
		>;
	});

	it("supports refine helper", () => {
		const parser = extended.date().refine(
			(date) => DDate.greaterThan(date, DDate.createOrThrow(0)),
			{ errorMessage: "date.positive" },
		);

		expect(parser.parse("date1+")).toStrictEqual(DEither.success(DDate.createOrThrow("date1+")));
		expect(parser.parse("date1-")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});
});
