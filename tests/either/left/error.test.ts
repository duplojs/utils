import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { error, type EitherError } from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/kind";
import { eitherErrorKind } from "@scripts/either/left/error";
import { eitherLeftKind } from "@scripts/either/left/create";

it("createEitherError", () => {
	const either = error(50);

	expect(either).toStrictEqual({
		[`${keyKindPrefix}${eitherErrorKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "error",
		[`${keyKindPrefix}${eitherLeftKind.definition.name}`]: null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		EitherError<50>,
		"strict"
	>;
});
