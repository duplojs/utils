import { DClean, DDate } from "@scripts";

describe("clean primitive timeLessThan", () => {
	const time01 = DClean.Time.createOrThrow(DDate.createTime(1, "second"));
	const time05 = DClean.Time.createOrThrow(DDate.createTime(5, "second"));
	const time10 = DClean.Time.createOrThrow(DDate.createTime(10, "second"));

	it("works directly", () => {
		expect(DClean.timeLessThan(time01, time05)).toBe(true);
		expect(DClean.timeLessThan(time05, time01)).toBe(false);
	});

	it("works curried", () => {
		expect(DClean.timeLessThan(time10)(time05)).toBe(true);
		expect(DClean.timeLessThan(time05)(time10)).toBe(false);
	});
});
