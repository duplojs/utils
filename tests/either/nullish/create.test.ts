import { type ExpectType } from "@scripts/common/types/expectType";
import { createNullish, type EitherNullishFilled, type EitherNullishEmpty } from "@scripts/either";

describe("createEitherNullish", () => {
	it("nullish undefined", () => {
		const either = createNullish(undefined);

		expect(either).toStrictEqual({
			"kind-either-empty": null,
			"kind-either-information": "nullish",
			"kind-either-left": null,
			"kind-either-nullish": null,
			value: undefined,
		});

		type check = ExpectType<
			typeof either,
			EitherNullishEmpty<undefined>,
			"strict"
		>;

		expect(createNullish()).toStrictEqual({
			"kind-either-empty": null,
			"kind-either-information": "nullish",
			"kind-either-left": null,
			"kind-either-nullish": null,
			value: undefined,
		});
	});

	it("nullish null", () => {
		const either = createNullish(null);

		expect(either).toStrictEqual({
			"kind-either-empty": null,
			"kind-either-information": "nullish",
			"kind-either-left": null,
			"kind-either-nullish": null,
			value: null,
		});

		type check = ExpectType<
			typeof either,
			EitherNullishEmpty<null>,
			"strict"
		>;
	});

	it("nullish number", () => {
		const either = createNullish(10);

		expect(either).toStrictEqual({
			"kind-either-filled": null,
			"kind-either-information": "nullish",
			"kind-either-right": null,
			"kind-either-nullish": null,
			value: 10,
		});

		type check = ExpectType<
			typeof either,
			EitherNullishFilled<10>,
			"strict"
		>;
	});
});
