import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";

it("pipe", () => {
	const result = pipe(
		56,
		(value) => value * 10,
		(value) => value - 10,
		(value) => ({ value }),
	);

	expect(result).toStrictEqual({
		value: 550,
	});

	type check = ExpectType<
		typeof result,
		{ value: number },
		"strict"
	>;
});
