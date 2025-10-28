import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { ok, type EitherOk } from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/base";
import { eitherOkKind } from "@scripts/either/right/ok";
import { eitherRightKind } from "@scripts/either/right/create";

it("createEitherOk", () => {
	const either = ok();

	expect(either).toStrictEqual({
		[`${keyKindPrefix}${eitherOkKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "ok",
		[`${keyKindPrefix}${eitherRightKind.definition.name}`]: null,
		...wrapValue(undefined),
	});

	type check = ExpectType<
		typeof either,
		EitherOk,
		"strict"
	>;
});
