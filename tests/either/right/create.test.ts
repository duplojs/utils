import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { right, type EitherRight } from "@scripts/either";

it("createEitherRight", () => {
	const either = right("info", 50);

	expect(either).toStrictEqual({
		[`${keyKindPrefix}either-information`]: "info",
		[`${keyKindPrefix}either-right`]: null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		EitherRight<"info", 50>,
		"strict"
	>;
});
