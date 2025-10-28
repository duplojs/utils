import { pipe, wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { nullish, type EitherNullishFilled, type EitherNullishEmpty } from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/base";
import { eitherLeftKind } from "@scripts/either/left/create";
import { eitherNullishKind } from "@scripts/either/nullish/base";
import { eitherNullishEmptyKind } from "@scripts/either/nullish/empty";
import { eitherNullishFilledKind } from "@scripts/either/nullish/filled";
import { eitherRightKind } from "@scripts/either/right/create";
import { DEither } from "@scripts/index";

describe("createEitherNullish", () => {
	const expectedNullishEmpty = (value: unknown) => ({
		[`${keyKindPrefix}${eitherNullishKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherNullishEmptyKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "nullish",
		[`${keyKindPrefix}${eitherLeftKind.definition.name}`]: null,
		...wrapValue(value),
	});

	const expectedNullishFilled = (value: unknown) => ({
		[`${keyKindPrefix}${eitherNullishKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherNullishFilledKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "nullish",
		[`${keyKindPrefix}${eitherRightKind.definition.name}`]: null,
		...wrapValue(value),
	});

	it("nullish undefined", () => {
		const either = nullish(undefined);

		expect(either).toStrictEqual(expectedNullishEmpty(undefined));

		type check = ExpectType<
			typeof either,
			EitherNullishEmpty<undefined>,
			"strict"
		>;
	});

	it("nullish null", () => {
		const either = nullish(null);

		expect(either).toStrictEqual(expectedNullishEmpty(null));

		type check = ExpectType<
			typeof either,
			EitherNullishEmpty<null>,
			"strict"
		>;
	});

	it("nullish number", () => {
		const either = nullish(10);

		expect(either).toStrictEqual(expectedNullishFilled(10));

		type check = ExpectType<
			typeof either,
			EitherNullishFilled<10>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			"test" as string | null,
			DEither.nullish,
		);

		expect(result).toStrictEqual(DEither.nullish("test"));

		type check = ExpectType<
			typeof result,
			EitherNullishEmpty<null> | EitherNullishFilled<string>,
			"strict"
		>;
	});
});
