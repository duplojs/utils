import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherOptionalEmpty, type EitherOptionalEmpty, type EitherOptionalFilled, createEitherOptionalFilled, isEitherOptionalFilled, unknownIsEitherOptionalFilled, whenEitherIsOptionalFilled, createEitherOk, type EitherOk } from "@scripts/either";

describe("EitherOptionalFilled", () => {
	it("create", () => {
		const either = createEitherOptionalFilled(10);

		expect(either).toStrictEqual({
			"kind-either-filled": null,
			"kind-either-information": "optional",
			"kind-either-right": null,
			"kind-either-optional": null,
			value: 10,
		});

		type check = ExpectType<
			typeof either,
			EitherOptionalFilled<10>,
			"strict"
		>;
	});

	it("isEitherOptionalFilled return true", () => {
		const either = createEitherOptionalFilled(10) as EitherOptionalEmpty | EitherOptionalFilled;

		const predicate = isEitherOptionalFilled(either);

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
		const either = createEitherOptionalEmpty() as EitherOptionalEmpty | EitherOptionalFilled;

		const predicate = isEitherOptionalFilled(either);

		expect(predicate).toBe(false);
	});

	it("unknownIsEitherOptionalFilled return false", () => {
		const either = 1 as unknown;

		const predicate = unknownIsEitherOptionalFilled(either);

		expect(predicate).toBe(false);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherOptionalFilled<unknown>,
				"strict"
			>;
		}
	});

	it("whenEitherIsOptionalFilled match", () => {
		const either = true
			? createEitherOptionalFilled(10)
			: createEitherOptionalEmpty();

		const result = whenEitherIsOptionalFilled(
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
		const either = createEitherOptionalEmpty();

		const result = whenEitherIsOptionalFilled(
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
			? createEitherOk()
			: createEitherOptionalFilled(10);

		const result = whenEitherIsOptionalFilled(
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

		const result = whenEitherIsOptionalFilled(
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

		const result = whenEitherIsOptionalFilled(
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

		expect(result).toStrictEqual(createEitherOptionalEmpty());

		type check = ExpectType<
			typeof result,
			EitherOptionalEmpty | 0,
			"strict"
		>;
	});
});
