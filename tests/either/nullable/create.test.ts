import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { nullable, type EitherNullableFilled, type EitherNullableEmpty } from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/base";
import { eitherLeftKind } from "@scripts/either/left/create";
import { eitherNullableKind } from "@scripts/either/nullable/base";
import { eitherNullableEmptyKind } from "@scripts/either/nullable/empty";
import { eitherNullableFilledKind } from "@scripts/either/nullable/filled";
import { eitherRightKind } from "@scripts/either/right/create";
import { DArray, DEither, pipe, wrapValue } from "@scripts/index";

describe("createEitherNullable", () => {
	it("create EitherNullableEmpty", () => {
		const either = nullable(null);

		expect(either).toStrictEqual({
			[`${keyKindPrefix}${eitherNullableKind.definition.name}`]: null,
			[`${keyKindPrefix}${eitherNullableEmptyKind.definition.name}`]: null,
			[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "nullable",
			[`${keyKindPrefix}${eitherLeftKind.definition.name}`]: null,
			...wrapValue(null),
		});

		type check = ExpectType<
			typeof either,
			EitherNullableEmpty,
			"strict"
		>;
	});

	it("create EitherNullableFilled", () => {
		const either = nullable(10);

		expect(either).toStrictEqual({
			[`${keyKindPrefix}${eitherNullableKind.definition.name}`]: null,
			[`${keyKindPrefix}${eitherNullableFilledKind.definition.name}`]: null,
			[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "nullable",
			[`${keyKindPrefix}${eitherRightKind.definition.name}`]: null,
			...wrapValue(10),
		});

		type check = ExpectType<
			typeof either,
			EitherNullableFilled<10>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			"test" as string | null,
			DEither.nullable,
		);

		expect(result).toStrictEqual(DEither.nullable("test"));

		type check = ExpectType<
			typeof result,
			EitherNullableEmpty | EitherNullableFilled<string>,
			"strict"
		>;
	});
});
