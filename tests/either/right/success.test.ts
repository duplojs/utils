import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherSuccess, type EitherSuccess } from "@scripts/either";

it("createEitherSuccess", () => {
	const either = createEitherSuccess(50);

	expect(either).toStrictEqual({
		"kind-either-success": null,
		"kind-either-information": "success",
		"kind-either-right": null,
		value: 50,
	});

	type check = ExpectType<
		typeof either,
		EitherSuccess<50>,
		"strict"
	>;
});
