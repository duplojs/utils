import { pipe, wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { optional, type EitherOptionalFilled, type EitherOptionalEmpty } from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/base";
import { eitherLeftKind } from "@scripts/either/left/create";
import { eitherOptionalKind } from "@scripts/either/optional/base";
import { eitherOptionalEmptyKind } from "@scripts/either/optional/empty";
import { eitherOptionalFilledKind } from "@scripts/either/optional/filled";
import { eitherRightKind } from "@scripts/either/right/create";
import { DEither } from "@scripts/index";

describe("createEitherOptional", () => {
	it("create EitherOptionalEmpty", () => {
		const either = optional(undefined);

		expect(either).toStrictEqual({
			[`${keyKindPrefix}${eitherOptionalKind.definition.name}`]: null,
			[`${keyKindPrefix}${eitherOptionalEmptyKind.definition.name}`]: null,
			[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "optional",
			[`${keyKindPrefix}${eitherLeftKind.definition.name}`]: null,
			...wrapValue(undefined),
		});

		type check = ExpectType<
			typeof either,
			EitherOptionalEmpty,
			"strict"
		>;
	});

	it("create EitherOptionalFilled", () => {
		const either = optional(10);

		expect(either).toStrictEqual({
			[`${keyKindPrefix}${eitherOptionalKind.definition.name}`]: null,
			[`${keyKindPrefix}${eitherOptionalFilledKind.definition.name}`]: null,
			[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "optional",
			[`${keyKindPrefix}${eitherRightKind.definition.name}`]: null,
			...wrapValue(10),
		});

		type check = ExpectType<
			typeof either,
			EitherOptionalFilled<10>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			"test" as string | undefined,
			DEither.optional,
		);

		expect(result).toStrictEqual(DEither.optional("test"));

		type check = ExpectType<
			typeof result,
			EitherOptionalEmpty | EitherOptionalFilled<string>,
			"strict"
		>;
	});
});
