import { DClean, DDate, unwrap } from "@scripts";

describe("clean primitive dateSubtractTime", () => {
	const baseDate = DClean.Date.createOrThrow(DDate.create("2024-01-02"));
	const oneDay = DClean.Time.createOrThrow(DDate.createTime(1, "hour"));

	it("subtracts time directly", () => {
		const result = DClean.dateSubtractTime(baseDate, oneDay);

		expect(unwrap(result)).toStrictEqual(
			DDate.subtractTime(
				DDate.create("2024-01-02"),
				DDate.createTime(1, "hour"),
			),
		);
	});

	it("subtracts time with currying", () => {
		const result = DClean.dateSubtractTime(oneDay)(baseDate);

		expect(unwrap(result)).toStrictEqual(
			DDate.subtractTime(
				DDate.create("2024-01-02"),
				DDate.createTime(1, "hour"),
			),
		);
	});
});
