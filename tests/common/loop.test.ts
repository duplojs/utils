import { sleep, type ExpectType, type LoopParams, loop } from "@scripts";

it("loop", () => {
	const result = loop(
		({ next, exit, previousOutput }: LoopParams<number>) => {
			const lastValue = previousOutput ?? 0;

			if (lastValue >= 5) {
				return exit("exit");
			}

			return next(lastValue + 1);
		},
	);

	expect(result).toBe("exit");

	type check = ExpectType<
		typeof result,
		"exit",
		"strict"
	>;
});
