import { pipe, when, type ExpectType, DEither } from "@scripts";

describe("hasInformation", () => {
	it("default usage", () => {
		const either = true
			? DEither.ok()
			: DEither.fail();

		const boolean = DEither.hasInformation(either, "ok");

		expect(boolean).toBe(true);

		if (boolean) {
			type check = ExpectType<
				typeof either,
				DEither.Ok,
				"strict"
			>;
		}
	});

	it("in pipe", () => {
		const either = true
			? DEither.ok()
			: DEither.fail();

		const result = pipe(
			either,
			when(
				DEither.hasInformation("ok"),
				(value) => {
					type Check = ExpectType<
						typeof value,
						DEither.Ok,
						"strict"
					>;

					return 10;
				},
			),
		);

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			number | DEither.Fail,
			"strict"
		>;
	});
});

