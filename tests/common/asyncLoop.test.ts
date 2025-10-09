import { sleep, type ExpectType, type LoopParams, asyncLoop } from "@scripts";

it("asyncLoop", async() => {
	const result = await asyncLoop(
		async({ next, exit, previousOutput }: LoopParams<number>) => {
			await sleep();

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
