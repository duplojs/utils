import { sleep } from "@scripts/common/sleep";
import { type ExpectType } from "@scripts/common/types/expectType";
import { type LoopParams, useAsyncLoop } from "@scripts/common/useAsyncLoop";

it("useAsyncLoop", async() => {
	const result = await useAsyncLoop(
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
		string,
		"strict"
	>;
});
