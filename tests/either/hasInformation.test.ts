import { pipe, when, type ExpectType } from "@scripts/common";
import { fail, ok, type EitherOk, hasInformation, type EitherFail } from "@scripts/either";

describe("hasInformation", () => {
	it("default usage", () => {
		const either = true
			? ok()
			: fail();

		const boolean = hasInformation(either, "ok");

		expect(boolean).toBe(true);

		if (boolean) {
			type check = ExpectType<
				typeof either,
				EitherOk,
				"strict"
			>;
		}
	});

	it("in pipe", () => {
		const either = true
			? ok()
			: fail();

		const result = pipe(
			either,
			when(
				hasInformation("ok"),
				(value) => {
					type Check = ExpectType<
						typeof value,
						EitherOk,
						"strict"
					>;

					return 10;
				},
			),
		);

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			number | EitherFail,
			"strict"
		>;
	});
});

