import { wrapValue } from "@scripts/common";
import { type ExpectType } from "@scripts/common/types/expectType";
import { success, type EitherSuccess } from "@scripts/either";

it("createEitherSuccess", () => {
	const either = success(50);

	expect(either).toStrictEqual({
		"kind-either-success": null,
		"kind-either-information": "success",
		"kind-either-right": null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		EitherSuccess<50>,
		"strict"
	>;
});
