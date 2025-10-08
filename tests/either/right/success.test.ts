import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { success, type EitherSuccess } from "@scripts/either";

it("createEitherSuccess", () => {
	const either = success(50);

	expect(either).toStrictEqual({
		[`${keyKindPrefix}either-success`]: null,
		[`${keyKindPrefix}either-information`]: "success",
		[`${keyKindPrefix}either-right`]: null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		EitherSuccess<50>,
		"strict"
	>;
});
