import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherError, type EitherError } from "@scripts/either";

it("createEitherError", () => {
	const either = createEitherError(50);

	expect(either).toStrictEqual({
		"kind-either-error": null,
		"kind-either-information": "error",
		"kind-either-left": null,
		value: 50,
	});

	type check = ExpectType<
		typeof either,
		EitherError<50>,
		"strict"
	>;
});
