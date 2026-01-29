import { DEither, DDataParser, pipe, type ExpectType } from "@scripts";
import type { TheDate } from "@scripts/date";

describe("coerce.date", () => {
	it("coerces number and date string inputs", () => {
		const parser = DDataParser.coerce.date();

		const result = parser.parse("1970-01-01");

		expect(parser.parse(1)).toStrictEqual(DEither.success("date1+"));
		expect(result).toStrictEqual(DEither.success("date0+"));

		type check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<TheDate>,
			"strict"
		>;
	});

	it("rejects unsafe or invalid inputs", () => {
		const parser = DDataParser.coerce.date({ errorMessage: "date.invalid" });
		const invalidString = "not-a-date";

		expect(parser.parse(invalidString)).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("works in pipe", () => {
		const parser = DDataParser.coerce.date();

		const result = pipe("1970-01-01", parser.parse);

		expect(result).toStrictEqual(DEither.success("date0+"));
	});
});
