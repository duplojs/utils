import { DEither, type ExpectType } from "@scripts";

describe("either.right.asyncGroup", () => {
	it("aggregates all right values into a success", async() => {
		const result = await DEither.asyncGroup({
			first: DEither.future(DEither.bool(1 as number)),
			second: () => Promise.resolve(DEither.optional("second" as string | undefined)),
		});

		type Check = ExpectType<
			typeof result,
			| DEither.EitherBoolFalsy<0>
			| DEither.EitherOptionalEmpty
			| DEither.EitherSuccess<{
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

	it("returns first left and stops further evaluation", async() => {
		const spy = vi.fn(() => DEither.right("skipped", 3));

		const result = await DEither.asyncGroup({
			first: () => Promise.resolve(DEither.bool(1 as number)),
			error: () => DEither.optional(undefined as string | undefined),
			skipped: spy,
		});

		expect(result).toStrictEqual(DEither.optional(undefined));
		expect(spy).toBeCalledTimes(0);
	});
});
