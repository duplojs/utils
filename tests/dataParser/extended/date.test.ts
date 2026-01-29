import { DDataParser, DEither, DDate, pipe, type ExpectType } from "@scripts";
import { type TheDate } from "@scripts/date";

const { extended } = DDataParser;

describe("extended.date", () => {
	it("parses TheDate values", () => {
		const parser = extended.date();
		const value: TheDate = "date42+";

		const result = parser.parse(value);
		expect(result).toStrictEqual(DEither.success(value));

		type check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<TheDate>,
			"strict"
		>;
	});

	it("parses Date instances", () => {
		const parser = extended.date();
		const nativeDate = new Date("2021-01-01T00:00:00.000Z");
		const beforeChristInput = new Date(Date.UTC(-100, 0, 1));
		const beforeChristExpected = DDate.createOrThrow(beforeChristInput);

		expect(parser.parse(nativeDate)).toStrictEqual(DEither.success("date1609459200000+"));
		expect(parser.parse(beforeChristInput)).toStrictEqual(
			DEither.success(beforeChristExpected),
		);
	});

	it("supports refine helper", () => {
		const parser = extended.date().refine(
			(date) => date.endsWith("+"),
			{ errorMessage: "date.positive" },
		);

		expect(parser.parse("date1+")).toStrictEqual(DEither.success("date1+"));
		expect(parser.parse("date1-")).toStrictEqual(
			DEither.error(expect.any(Object)),
		);
	});

	it("works in pipe", () => {
		const parser = extended.date();
		const input = new Date("2021-01-01T00:00:00.000Z");

		const result = pipe(input, parser.parse);

		expect(result).toStrictEqual(DEither.success("date1609459200000+"));
	});
});
