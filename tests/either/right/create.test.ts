import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherRight, type EitherRight } from "@scripts/either";

it("createEitherRight", () => {
	const either = createEitherRight("info", 50);

	expect(either).toStrictEqual({
		"kind-either-information": "info",
		"kind-either-right": null,
		value: 50,
	});

	type check = ExpectType<
		typeof either,
		EitherRight<"info", 50>,
		"strict"
	>;
});
