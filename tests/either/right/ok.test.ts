import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { ok, type EitherOk } from "@scripts/either";

it("createEitherOk", () => {
	const either = ok();

	expect(either).toStrictEqual({
		[`${keyKindPrefix}either-ok`]: null,
		[`${keyKindPrefix}either-information`]: "ok",
		[`${keyKindPrefix}either-right`]: null,
		...wrapValue(undefined),
	});

	type check = ExpectType<
		typeof either,
		EitherOk,
		"strict"
	>;
});
