import { DClean, DDate } from "@scripts";

describe("clean primitive timeGreaterThan", () => {
	const time01 = DClean.Time.createOrThrow(DDate.createTime(1000));
	const time05 = DClean.Time.createOrThrow(DDate.createTime(5000));
	const time10 = DClean.Time.createOrThrow(DDate.createTime(10000));

	it("works directly", () => {
		expect(DClean.timeGreaterThan(time05, time01)).toBe(true);
		expect(DClean.timeGreaterThan(time01, time05)).toBe(false);
	});

	it("works curried", () => {
		expect(DClean.timeGreaterThan(time05)(time10)).toBe(true);
		expect(DClean.timeGreaterThan(time10)(time05)).toBe(false);
	});
});
