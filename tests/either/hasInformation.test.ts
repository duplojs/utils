import { type ExpectType } from "@scripts/common";
import { createFail, createOk, type EitherOk, hasInformation } from "@scripts/either";

it("hasInformation", () => {
	const either = true
		? createOk()
		: createFail();

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
