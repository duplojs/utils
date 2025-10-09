import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { nullable, type EitherNullableFilled, type EitherNullableEmpty } from "@scripts/either";
import { DArray, DEither, pipe, wrapValue } from "@scripts/index";

describe("createEitherNullable", () => {
	it("create EitherNullableEmpty", () => {
		const either = nullable(null);

		expect(either).toStrictEqual({
			[`${keyKindPrefix}either-nullable`]: null,
			[`${keyKindPrefix}either-nullable-empty`]: null,
			[`${keyKindPrefix}either-information`]: "nullable",
			[`${keyKindPrefix}either-left`]: null,
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
			[`${keyKindPrefix}either-nullable`]: null,
			[`${keyKindPrefix}either-nullable-filled`]: null,
			[`${keyKindPrefix}either-information`]: "nullable",
			[`${keyKindPrefix}either-right`]: null,
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
