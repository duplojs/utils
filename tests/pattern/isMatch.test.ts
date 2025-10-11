import { DEither, DPattern, type ExpectType, pipe } from "@scripts/index";
import { type PatternValue, type ComplexMatchedValue } from "@scripts/pattern";
import { when } from "dist";

describe("isMatch", () => {
	it("match string", () => {
		expect(DPattern.isMatch("test", "test")).toBe(true);
		expect(DPattern.isMatch("test" as "test" | "lolo", "lolo")).toBe(false);
	});

	it("match boolean", () => {
		expect(DPattern.isMatch(true, true)).toBe(true);
		expect(DPattern.isMatch(true as boolean, false)).toBe(false);
	});

	it("match number", () => {
		expect(DPattern.isMatch(10, 10)).toBe(true);
		expect(DPattern.isMatch(10 as 10 | 1, 1)).toBe(false);
	});

	it("match big int", () => {
		expect(DPattern.isMatch(10n, 10n)).toBe(true);
		expect(DPattern.isMatch(10n as 10n | 1, 1)).toBe(false);
	});

	it("match null", () => {
		expect(DPattern.isMatch(null, null)).toBe(true);
		expect(DPattern.isMatch(null as null | 1, 1)).toBe(false);
	});

	it("match undefined", () => {
		expect(DPattern.isMatch(undefined, undefined)).toBe(true);
		expect(DPattern.isMatch(undefined as undefined | number, 1)).toBe(false);
	});

	it("match predicate", () => {
		expect(DPattern.isMatch(true, (value) => value)).toBe(true);
		expect(DPattern.isMatch(false, (value) => value)).toBe(false);
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
		expect(DPattern.isMatch({ test: 1 as 1 | "test" }, { test: "test" })).toBe(false);
	});

	it("no match", () => {
		expect(DPattern.isMatch(null as any, { test: 1 })).toBe(false);
	});

	it("test predicate", () => {
		const input = {
			type: "one",
			prop1: 2,
		} as {
			type: "one";
			prop1: number;
		} | {
			type: "two";
			prop2: number;
		};

		const predicate = DPattern.isMatch(input, { type: "one" });

		expect(predicate).toBe(true);

		if (predicate) {
			type Check = ExpectType<
				typeof input,
				{
					type: "one";
					prop1: number;
				},
				"strict"
			>;
		} else {
			type Check = ExpectType<
				typeof input,
				{
					type: "two";
					prop2: number;
				},
				"strict"
			>;
		}
	});

	it("test predicate in pipe", () => {
		const input = {
			type: "one",
			prop1: 2,
		} as {
			type: "one";
			prop1: number;
		} | {
			type: "two";
			prop2: number;
		};

		const result = pipe(
			input,
			when(
				DPattern.isMatch({ type: "one" }),
				DEither.success,
			),
		);

		expect(result).toStrictEqual(DEither.success(input));

		type Check = ExpectType<
			typeof result,
			{
				type: "two";
				prop2: number;
			} | DEither.EitherSuccess<{
				type: "one";
				prop1: number;
			}>,
			"strict"
		>;
	});
});
