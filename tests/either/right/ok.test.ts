import { wrapValue } from "@scripts/common";
import { type ExpectType } from "@scripts/common/types/expectType";
import { ok, type EitherOk } from "@scripts/either";

it("createEitherOk", () => {
	const either = ok();

	expect(either).toStrictEqual({
		"kind-either-ok": null,
		"kind-either-information": "ok",
		"kind-either-right": null,
		...wrapValue(undefined),
	});

	type check = ExpectType<
		typeof either,
		EitherOk,
		"strict"
	>;
});
