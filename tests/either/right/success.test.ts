import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { success, type EitherSuccess } from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/base";
import { eitherRightKind } from "@scripts/either/right/create";
import { eitherSuccessKind } from "@scripts/either/right/success";

it("createEitherSuccess", () => {
	const either = success(50);

	expect(either).toStrictEqual({
		[`${keyKindPrefix}${eitherSuccessKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "success",
		[`${keyKindPrefix}${eitherRightKind.definition.name}`]: null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		EitherSuccess<50>,
		"strict"
	>;
});
