import { DPattern } from "@scripts/index";

describe("isMatch", () => {
	it("match string", () => {
		expect(DPattern.isMatch("test", "test")).toBe(true);
		expect(DPattern.isMatch("test", 1)).toBe(false);
	});

	it("match boolean", () => {
		expect(DPattern.isMatch(true, true)).toBe(true);
		expect(DPattern.isMatch(true, 1)).toBe(false);
	});

	it("match number", () => {
		expect(DPattern.isMatch(10, 10)).toBe(true);
		expect(DPattern.isMatch(10, 1)).toBe(false);
	});

	it("match big int", () => {
		expect(DPattern.isMatch(10n, 10n)).toBe(true);
		expect(DPattern.isMatch(10n, 1)).toBe(false);
	});

	it("match null", () => {
		expect(DPattern.isMatch(null, null)).toBe(true);
		expect(DPattern.isMatch(null, 1)).toBe(false);
	});

	it("match undefined", () => {
		expect(DPattern.isMatch(undefined, undefined)).toBe(true);
		expect(DPattern.isMatch(undefined, 1)).toBe(false);
	});

	it("match undefined", () => {
		expect(DPattern.isMatch(undefined, undefined)).toBe(true);
		expect(DPattern.isMatch(undefined, 1)).toBe(false);
	});

	it("match predicate", () => {
		expect(DPattern.isMatch(true, (value: boolean) => value)).toBe(true);
		expect(DPattern.isMatch(false, (value: boolean) => value)).toBe(false);
	});

	it("match tool", () => {
		expect(DPattern.isMatch(true, DPattern.union(true as never))).toBe(true);
		expect(DPattern.isMatch(false, DPattern.union(true as never))).toBe(false);
	});

	it("match array", () => {
		expect(DPattern.isMatch([1, 2n, "3"], [1, 2n, "3"])).toBe(true);
		expect(DPattern.isMatch([1, 2n, "3"], [1, 2n, 3])).toBe(false);
	});

	it("match object", () => {
		expect(DPattern.isMatch({ test: 1 }, { test: 1 })).toBe(true);
		expect(DPattern.isMatch({ test: 1 }, { test: "test" })).toBe(false);
	});

	it("no match", () => {
		expect(DPattern.isMatch(null, { test: 1 })).toBe(false);
	});
});
