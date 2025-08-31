import { type ExpectType } from "@scripts/common/types/expectType";
import { createOk, type EitherOk } from "@scripts/either";

it("createEitherOk", () => {
	const either = createOk();

	expect(either).toStrictEqual({
		"kind-either-ok": null,
		"kind-either-information": "ok",
		"kind-either-right": null,
		value: undefined,
	});

	type check = ExpectType<
		typeof either,
		EitherOk,
		"strict"
	>;
});
