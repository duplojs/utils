import { DDate } from "@scripts";

describe("DDate minTime", () => {
	const time01 = DDate.createTime(1000);
	const time05 = DDate.createTime(5000);
	const time10 = DDate.createTime(10000);

	it("picks smallest time", () => {
		expect(DDate.minTime([time10, time05, time01])).toBe(time01);
	});
});
