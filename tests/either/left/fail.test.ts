import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { fail, type EitherFail } from "@scripts/either";

it("createEitherFail", () => {
	const either = fail();

	expect(either).toStrictEqual({
		[`${keyKindPrefix}either-fail`]: null,
		[`${keyKindPrefix}either-information`]: "fail",
		[`${keyKindPrefix}either-left`]: null,
		...wrapValue(undefined),
	});

	type check = ExpectType<
		typeof either,
		EitherFail,
		"strict"
	>;
});
