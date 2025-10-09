import { pipe, wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { type ExpectType } from "@scripts/common/types/expectType";
import { bool, type EitherBoolTruthy, type EitherBoolFalsy } from "@scripts/either";
import { DArray, DEither } from "@scripts/index";

describe("createEitherBool", () => {
	const expectedBoolFalsy = (value: unknown) => ({
		[`${keyKindPrefix}either-bool`]: null,
		[`${keyKindPrefix}either-bool-falsy`]: null,
		[`${keyKindPrefix}either-information`]: "bool",
		[`${keyKindPrefix}either-left`]: null,
		...wrapValue(value),
	});

	const expectedBoolTruthy = (value: unknown) => ({
		[`${keyKindPrefix}either-bool`]: null,
		[`${keyKindPrefix}either-bool-truthy`]: null,
		[`${keyKindPrefix}either-information`]: "bool",
		[`${keyKindPrefix}either-right`]: null,
		...wrapValue(value),
	});

	it("falsy undefined", () => {
		const either = bool(undefined);

		expect(either).toStrictEqual(expectedBoolFalsy(undefined));

		type check = ExpectType<
			typeof either,
			EitherBoolFalsy<undefined>,
			"strict"
		>;
	});

	it("falsy null", () => {
		const either = bool(null);

		expect(either).toStrictEqual(expectedBoolFalsy(null));

		type check = ExpectType<
			typeof either,
			EitherBoolFalsy<null>,
			"strict"
		>;
	});

	it("falsy empty string", () => {
		const either = bool("");

		expect(either).toStrictEqual(expectedBoolFalsy(""));

		type check = ExpectType<
			typeof either,
			EitherBoolFalsy<"">,
			"strict"
		>;
	});

	it("falsy 0", () => {
		const either = bool(0);

		expect(either).toStrictEqual(expectedBoolFalsy(0));

		type check = ExpectType<
			typeof either,
			EitherBoolFalsy<0>,
			"strict"
		>;
	});

	it("falsy false", () => {
		const either = bool(false);

		expect(either).toStrictEqual(expectedBoolFalsy(false));

		type check = ExpectType<
			typeof either,
			EitherBoolFalsy<false>,
			"strict"
		>;
	});

	it("truthy object", () => {
		const either = bool({});

		expect(either).toStrictEqual(expectedBoolTruthy({}));

		type check = ExpectType<
			typeof either,
			EitherBoolTruthy<{}>,
			"strict"
		>;
	});

	it("truthy true", () => {
		const either = bool(true);

		expect(either).toStrictEqual(expectedBoolTruthy(true));

		type check = ExpectType<
			typeof either,
			EitherBoolTruthy<true>,
			"strict"
		>;
	});

	it("truthy number", () => {
		const either = bool(10);

		expect(either).toStrictEqual(expectedBoolTruthy(10));

		type check = ExpectType<
			typeof either,
			EitherBoolTruthy<10>,
			"strict"
		>;
	});

	it("truthy string", () => {
		const either = bool("test");

		expect(either).toStrictEqual(expectedBoolTruthy("test"));

		type check = ExpectType<
			typeof either,
			EitherBoolTruthy<"test">,
			"strict"
		>;
	});

	it("bool large string", () => {
		const either = bool("test" as string);

		expect(either).toStrictEqual(expectedBoolTruthy("test"));

		type check = ExpectType<
			typeof either,
			EitherBoolTruthy<string> | EitherBoolFalsy<"">,
			"strict"
		>;
	});

	it("bool large number", () => {
		const either = bool(1 as number);

		expect(either).toStrictEqual(expectedBoolTruthy(1));

		type check = ExpectType<
			typeof either,
			EitherBoolTruthy<number> | EitherBoolFalsy<0>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			["test"],
			DArray.find((value) => value === "toto"),
			DEither.bool,
		);

		expect(result).toStrictEqual(DEither.bool(undefined));

		type check = ExpectType<
			typeof result,
			DEither.EitherBoolFalsy<undefined> | DEither.EitherBoolTruthy<"toto">,
			"strict"
		>;
	});
});
