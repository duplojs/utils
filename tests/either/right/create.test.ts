import { wrapValue } from "@scripts/common";
import { type ExpectType } from "@scripts/common/types/expectType";
import { right, type EitherRight } from "@scripts/either";

it("createEitherRight", () => {
	const either = right("info", 50);

	expect(either).toStrictEqual({
		"kind-either-information": "info",
		"kind-either-right": null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		EitherRight<"info", 50>,
		"strict"
	>;
});
