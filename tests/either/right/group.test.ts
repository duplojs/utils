
import { DEither, type ExpectType } from "@scripts";

describe("either.right.group", () => {
	it("aggregates all right values into an object", () => {
		const result = DEither.group({
			first: DEither.bool(1 as number),
			second: () => DEither.optional("second" as string | undefined),
		});

		type Check = ExpectType<
			typeof result,
			| DEither.BoolFalsy<0>
			| DEither.OptionalEmpty
			| DEither.Success<{
				first: number;
				second: string;
			}>,
			"strict"
		>;

		expect(result).toStrictEqual(
			DEither.success({
				first: 1,
				second: "second",
			}),
		);
	});

	it("returns first left and stops further evaluation", () => {
		const spy = vi.fn(() => DEither.right("skipped", 3));

		const result = DEither.group({
			first: () => DEither.bool(1 as number),
			error: DEither.optional(undefined as string | undefined),
			skipped: spy,
		});

		expect(result).toStrictEqual(DEither.optional(undefined));
		expect(spy).toBeCalledTimes(0);
	});
});
