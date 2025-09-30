import { wrapValue } from "@scripts/common";
import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { optionalEmpty, type EitherOptionalEmpty, type EitherOptionalFilled, optionalFilled, isOptionalFilled, whenIsOptionalFilled, ok, type EitherOk } from "@scripts/either";

describe("EitherOptionalFilled", () => {
	it("create", () => {
		const either = optionalFilled(10);

		expect(either).toStrictEqual({
			"kind-either-filled": null,
			"kind-either-information": "optional",
			"kind-either-right": null,
			"kind-either-optional": null,
			...wrapValue(10),
		});

		type check = ExpectType<
			typeof either,
			EitherOptionalFilled<10>,
			"strict"
		>;
	});

	it("isEitherOptionalFilled return true", () => {
		const either = optionalFilled(10) as EitherOptionalEmpty | EitherOptionalFilled;

		const predicate = isOptionalFilled(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherOptionalFilled<unknown>,
				"strict"
			>;
		}
	});

	it("isEitherOptionalFilled return false", () => {
		const either = optionalEmpty() as EitherOptionalEmpty | EitherOptionalFilled;

		const predicate = isOptionalFilled(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsOptionalFilled match", () => {
		const either = true
			? optionalFilled(10)
			: optionalEmpty();

		const result = whenIsOptionalFilled(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			10 | EitherOptionalEmpty,
			"strict"
		>;
	});

	it("whenEitherIsOptionalFilled not match with left", () => {
		const either = optionalEmpty();

		const result = whenIsOptionalFilled(
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
			EitherOptionalEmpty,
			"strict"
		>;
	});

	it("whenEitherIsOptionalFilled not match with right", () => {
		const either = true
			? ok()
			: optionalFilled(10);

		const result = whenIsOptionalFilled(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			EitherOk | 10,
			"strict"
		>;
	});

	it("whenEitherIsOptionalFilled match with falsy value", () => {
		const either = true
			? 10
			: undefined;

		const result = whenIsOptionalFilled(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			EitherOptionalEmpty | 0,
			"strict"
		>;
	});

	it("whenEitherIsOptionalFilled not match with truthy value", () => {
		const either = true
			? undefined
			: 10;

		const result = whenIsOptionalFilled(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toStrictEqual(optionalEmpty());

		type check = ExpectType<
			typeof result,
			EitherOptionalEmpty | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? optionalFilled(true)
				: optionalEmpty(),
			whenIsOptionalFilled(
				(value) => {
					type check = ExpectType<
						typeof value,
						true,
						"strict"
					>;

					return value;
				},
			),
		);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			true | EitherOptionalEmpty,
			"strict"
		>;
	});
});
