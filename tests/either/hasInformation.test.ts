import { type ExpectType } from "@scripts/common";
import { fail, ok, type EitherOk, hasInformation } from "@scripts/either";

it("hasInformation", () => {
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
