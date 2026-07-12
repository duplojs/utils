import { DDataParser, DDate, DEither, type ExpectType } from "@scripts";

describe("DDataParser coercer time transformer", () => {
	it("infers coerced input, output, and checker refine value types", () => {
		const schema = DDataParser.coercer(DDataParser.time()).addChecker(
			DDataParser.checkerRefine((value) => {
				type _CheckRefineValue = ExpectType<typeof value, DDate.TheTime, "strict">;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			DDate.TheTime,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			DDate.TheTime | number | string,
			"strict"
		>;
	});

	it("coerces ISO time strings through the coercer", () => {
		const schema = DDataParser.coercer(DDataParser.time());

		expect(schema.parse("01:02")).toStrictEqual(
			DEither.success(DDate.createTimeOrThrow("time3720000+")),
		);
	});

	it("fails when transformed value is not a time", () => {
		const schema = DDataParser.coercer(DDataParser.time());

		expect(schema.parse("not-a-time")).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
