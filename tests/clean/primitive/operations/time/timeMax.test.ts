import { DClean, DDate, unwrap } from "@scripts";

describe("clean primitive timeMax", () => {
	const time01 = DClean.Time.createOrThrow(DDate.createTime(1000));
	const time05 = DClean.Time.createOrThrow(DDate.createTime(5000));
	const time10 = DClean.Time.createOrThrow(DDate.createTime(10000));

	it("returns latest time in direct form", () => {
		const result = DClean.timeMax([time01, time05, time10]);
		expect(unwrap(result)).toBe(DDate.createTime(10000));
	});
});
