import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { fail, type EitherFail, optionalEmpty, type EitherOptionalEmpty, isOptionalEmpty, type EitherOptionalFilled, optionalFilled, whenIsOptionalEmpty } from "@scripts/either";

describe("EitherOptionalEmpty", () => {
	it("create", () => {
		const either = optionalEmpty();

		expect(either).toStrictEqual({
			"kind-either-empty": null,
			"kind-either-information": "optional",
			"kind-either-left": null,
			"kind-either-optional": null,
			value: undefined,
		});

		type check = ExpectType<
			typeof either,
			EitherOptionalEmpty,
			"strict"
		>;
	});

	it("isEitherOptionalEmpty return true", () => {
		const either = optionalEmpty() as EitherOptionalEmpty | EitherOptionalFilled;

		const predicate = isOptionalEmpty(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherOptionalEmpty,
				"strict"
			>;
		}
	});

	it("isEitherOptionalEmpty return false", () => {
		const either = optionalFilled(10) as EitherOptionalEmpty | EitherOptionalFilled;

		const predicate = isOptionalEmpty(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsOptionalEmpty match", () => {
		const either = true
			? optionalEmpty()
			: optionalFilled(true);

		const result = whenIsOptionalEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(undefined);

		type check = ExpectType<
			typeof result,
			EitherOptionalFilled<true> | undefined,
			"strict"
		>;
	});

	it("whenEitherIsOptionalEmpty not match with right", () => {
		const either = optionalFilled(10);

		const result = whenIsOptionalEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					never,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			EitherOptionalFilled<10>,
			"strict"
		>;
	});

	it("whenEitherIsOptionalEmpty not match with left", () => {
		const either = true
			? fail()
			: optionalEmpty();

		const result = whenIsOptionalEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			EitherFail | undefined,
			"strict"
		>;
	});

	it("whenEitherIsOptionalEmpty match with falsy value", () => {
		const either = true
			? undefined
			: 10;

		const result = whenIsOptionalEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			EitherOptionalFilled<10> | 0,
			"strict"
		>;
	});

	it("whenEitherIsOptionalEmpty not match with truthy value", () => {
		const either = true
			? 10
			: undefined;

		const result = whenIsOptionalEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toStrictEqual(optionalFilled(10));

		type check = ExpectType<
			typeof result,
			EitherOptionalFilled<10> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? optionalEmpty()
				: optionalFilled(true),
			whenIsOptionalEmpty(
				(value) => {
					type check = ExpectType<
						typeof value,
						undefined,
						"strict"
					>;

					return value;
				},
			),
		);

		expect(result).toBe(undefined);

		type check = ExpectType<
			typeof result,
			EitherOptionalFilled<true> | undefined,
			"strict"
		>;
	});
});
