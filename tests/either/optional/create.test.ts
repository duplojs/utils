import { type ExpectType } from "@scripts/common/types/expectType";
import { createOptional, type EitherOptionalFilled, type EitherOptionalEmpty } from "@scripts/either";

describe("createEitherOptional", () => {
	it("create EitherOptionalEmpty", () => {
		const either = createOptional(undefined);

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

		expect(createOptional()).toStrictEqual({
			"kind-either-empty": null,
			"kind-either-information": "optional",
			"kind-either-left": null,
			"kind-either-optional": null,
			value: undefined,
		});
	});

	it("create EitherOptionalFilled", () => {
		const either = createOptional(10);

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
});
