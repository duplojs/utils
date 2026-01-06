import { DClean, DDate, unwrap } from "@scripts";

describe("clean primitive timeMin", () => {
	const time01 = DClean.Time.createOrThrow(DDate.createTime(1000));
	const time05 = DClean.Time.createOrThrow(DDate.createTime(5000));
	const time10 = DClean.Time.createOrThrow(DDate.createTime(10000));

	it("returns earliest time in direct form", () => {
		const result = DClean.timeMin([time10, time05, time01]);
		expect(unwrap(result)).toBe(DDate.createTime(1000));
	});
});
