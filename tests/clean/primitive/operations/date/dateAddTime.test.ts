import { DClean, DDate, unwrap } from "@scripts";

describe("clean primitive dateAddTime", () => {
	const baseDate = DClean.Date.createOrThrow(DDate.create("2024-01-01"));
	const oneHour = DClean.Time.createOrThrow(DDate.createTime(3600000));

	it("adds time directly", () => {
		const result = DClean.dateAddTime(baseDate, oneHour);

		expect(unwrap(result)).toBe(
			DDate.addTime(
				DDate.create("2024-01-01"),
				DDate.createTime(3600000),
			),
		);
	});

	it("adds time with currying", () => {
		const result = DClean.dateAddTime(oneHour)(baseDate);

		expect(unwrap(result)).toBe(
			DDate.addTime(
				DDate.create("2024-01-01"),
				DDate.createTime(3600000),
			),
		);
	});
});
