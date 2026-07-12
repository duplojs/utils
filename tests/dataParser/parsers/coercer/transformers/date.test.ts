import { DDataParser, DDate, DEither, type ExpectType } from "@scripts";

describe("DDataParser coercer date transformer", () => {
	it("infers coerced input, output, and checker refine value types", () => {
		const schema = DDataParser.coercer(DDataParser.date()).addChecker(
			DDataParser.checkerRefine((value) => {
				type _CheckRefineValue = ExpectType<typeof value, DDate.TheDate, "strict">;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			DDate.TheDate,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			DDate.TheDate | Date | string | number,
			"strict"
		>;
	});

	it("coerces supported values through the coercer", () => {
		const schema = DDataParser.coercer(DDataParser.date());

		expect(schema.parse(1)).toStrictEqual(DEither.success(DDate.createOrThrow("date1+")));
		expect(schema.parse("2021-01-01T00:00:00.000Z")).toStrictEqual(
			DEither.success(DDate.createOrThrow(new Date("2021-01-01T00:00:00.000Z"))),
		);
	});

	it("fails when transformed value is not a date", () => {
		const schema = DDataParser.coercer(DDataParser.date());

		expect(schema.parse("not-a-date")).toStrictEqual(DEither.error(expect.any(Object)));
		expect(schema.parse(Number.POSITIVE_INFINITY)).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
