import { DClean, DDate, unwrap } from "@scripts";

describe("clean primitive timeMin", () => {
	const time01 = DClean.Time.createOrThrow(DDate.createTime(1, "second"));
	const time05 = DClean.Time.createOrThrow(DDate.createTime(5, "second"));
	const time10 = DClean.Time.createOrThrow(DDate.createTime(10, "second"));

	it("returns earliest time in direct form", () => {
		const result = DClean.timeMin([time10, time05, time01]);
		expect(result).toStrictEqual(time01);
	});
});
