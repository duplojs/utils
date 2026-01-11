import { asyncLoop } from "@scripts";

const result = await asyncLoop<number, number>(
	async({ count, previousOutput, next, exit }) => {
		const current = (previousOutput ?? 0) + 1;

		await Promise.resolve();

		if (count >= 2) {
			return exit(current);
		}

		return next(current);
	},
);
// result: 3
