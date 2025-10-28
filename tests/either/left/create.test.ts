import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { left, type EitherLeft } from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/kind";
import { eitherLeftKind } from "@scripts/either/left/create";

it("createEitherLeft", () => {
	const either = left("info", 50);

	expect(either).toStrictEqual({
		[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "info",
		[`${keyKindPrefix}${eitherLeftKind.definition.name}`]: null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		EitherLeft<"info", 50>,
		"strict"
	>;
});
