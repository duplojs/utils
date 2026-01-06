import { DDate, pipe } from "@scripts";

describe("DDate sortTimes", () => {
	const time01 = DDate.createTime(1000);
	const time05 = DDate.createTime(5000);
	const time10 = DDate.createTime(10000);

	it("sorts ascending and descending", () => {
		const asc = DDate.sortTimes([time05, time10, time01], "ASC");
		const dsc = pipe([time01, time05, time10], DDate.sortTimes("DSC"));

		expect(asc).toEqual([time01, time05, time10]);
		expect(dsc).toEqual([time10, time05, time01]);
	});
});
