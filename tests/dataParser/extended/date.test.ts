import { DDataParser, DEither } from "@scripts";
import { type TheDate } from "@scripts/date";

const { extended } = DDataParser;

describe("extended.date", () => {
	it("parses TheDate values", () => {
		const parser = extended.date();
		const value: TheDate = "date42+";

		expect(parser.parse(value)).toStrictEqual(DEither.success(value));
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
});
