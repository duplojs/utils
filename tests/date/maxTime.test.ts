import { DDate } from "@scripts";

describe("DDate maxTime", () => {
	const time01 = DDate.createTime(1000);
	const time05 = DDate.createTime(5000);
	const time10 = DDate.createTime(10000);

	it("picks largest time", () => {
		expect(DDate.maxTime([time01, time10, time05])).toBe(time10);
	});
});
