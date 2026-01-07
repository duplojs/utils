import { DDate } from "@scripts";

describe("DDate maxTime", () => {
	const time01 = DDate.createTime(1, "second");
	const time05 = DDate.createTime(5, "second");
	const time10 = DDate.createTime(10, "second");

	it("picks largest time", () => {
		expect(DDate.maxTime([time01, time10, time05])).toBe(time10);
	});
});
