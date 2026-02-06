import { DClean, DDate, unwrap } from "@scripts";

describe("clean primitive timeMax", () => {
	const time01 = DClean.Time.createOrThrow(DDate.createTime(1, "second"));
	const time05 = DClean.Time.createOrThrow(DDate.createTime(5, "second"));
	const time10 = DClean.Time.createOrThrow(DDate.createTime(10, "second"));

	it("returns latest time in direct form", () => {
		const result = DClean.timeMax([time01, time05, time10]);
		expect(result).toStrictEqual(time10);
	});
});
