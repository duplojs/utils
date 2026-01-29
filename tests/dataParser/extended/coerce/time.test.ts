import { DEither, DDataParser, pipe, type ExpectType } from "@scripts";
import type { TheTime } from "@scripts/date";

const { extended } = DDataParser;

describe("extended.coerce.time", () => {
	it("coerces ISO time inputs", () => {
		const parser = extended.coerce.time();

		const result = parser.parse("01:02");

		expect(result).toStrictEqual(DEither.success("time3720000+"));

		type check = ExpectType<
			typeof result,
			DEither.EitherError<DDataParser.DataParserError> | DEither.EitherSuccess<TheTime>,
			"strict"
		>;
	});

	it("rejects invalid ISO time inputs", () => {
		const parser = extended.coerce.time({ errorMessage: "time.invalid" });
		const invalidString = "not-a-time";

		expect(parser.parse(invalidString)).toStrictEqual(DEither.error(expect.any(Object)));
	});

	it("works in pipe", () => {
		const parser = extended.coerce.time();

		const result = pipe("01:02", parser.parse);

		expect(result).toStrictEqual(DEither.success("time3720000+"));
	});
});
