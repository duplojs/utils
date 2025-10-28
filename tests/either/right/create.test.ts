import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { right, type EitherRight } from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/kind";
import { eitherRightKind } from "@scripts/either/right/create";

it("createEitherRight", () => {
	const either = right("info", 50);

	expect(either).toStrictEqual({
		[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "info",
		[`${keyKindPrefix}${eitherRightKind.definition.name}`]: null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		EitherRight<"info", 50>,
		"strict"
	>;
});
