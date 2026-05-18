import { pipe, type ExpectType, DEither } from "@scripts";

describe("expect", () => {
	it("returns the same right instance", () => {
		const either = DEither.ok();

		const result = DEither.expect(either);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			DEither.Ok,
			"strict"
		>;
	});

	it("returns the same left instance", () => {
		const either = DEither.fail();

		const result = DEither.expect(either);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			DEither.Fail,
			"strict"
		>;
	});

	it("preserves left or right union typing", () => {
		const either = true
			? DEither.nullableFilled("value")
			: DEither.nullableEmpty();

		const result = DEither.expect(either);

		type check = ExpectType<
			typeof result,
			DEither.NullableFilled<"value"> | DEither.NullableEmpty,
			"strict"
		>;
	});

	it("works in pipe", () => {
		const result = pipe(
			true
				? DEither.boolTruthy(10)
				: DEither.boolFalsy(),
			DEither.expect,
		);

		type check = ExpectType<
			typeof result,
			DEither.BoolTruthy<10> | DEither.BoolFalsy<undefined>,
			"strict"
		>;
	});
});
