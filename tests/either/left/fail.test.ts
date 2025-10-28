import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { fail, type EitherFail } from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/kind";
import { eitherLeftKind } from "@scripts/either/left/create";
import { eitherFailKind } from "@scripts/either/left/fail";

it("createEitherFail", () => {
	const either = fail();

	expect(either).toStrictEqual({
		[`${keyKindPrefix}${eitherFailKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "fail",
		[`${keyKindPrefix}${eitherLeftKind.definition.name}`]: null,
		...wrapValue(undefined),
	});

	type check = ExpectType<
		typeof either,
		EitherFail,
		"strict"
	>;
});
