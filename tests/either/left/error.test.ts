import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { error, type EitherError } from "@scripts/either";

it("createEitherError", () => {
	const either = error(50);

	expect(either).toStrictEqual({
		[`${keyKindPrefix}either-error`]: null,
		[`${keyKindPrefix}either-information`]: "error",
		[`${keyKindPrefix}either-left`]: null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		EitherError<50>,
		"strict"
	>;
});
