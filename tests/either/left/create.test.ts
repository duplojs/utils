import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { left, type EitherLeft } from "@scripts/either";

it("createEitherLeft", () => {
	const either = left("info", 50);

	expect(either).toStrictEqual({
		[`${keyKindPrefix}either-information`]: "info",
		[`${keyKindPrefix}either-left`]: null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		EitherLeft<"info", 50>,
		"strict"
	>;
});
