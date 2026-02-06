import { DDate } from "@scripts";

describe("DDate minTime", () => {
	const time01 = DDate.createTime(1, "second");
	const time05 = DDate.createTime(5, "second");
	const time10 = DDate.createTime(10, "second");

	it("picks smallest time", () => {
		const result = DDate.minTime([time10, time05, time01]);

		expect(DDate.toTimeValue(result)).toBe(
			DDate.toTimeValue(time01),
		);
	});
});
