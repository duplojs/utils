import { loop } from "@duplojs/utils";

const result = loop<number, number>(
	({ previousOutput, next, exit }) => {
		const current = (previousOutput ?? 0) + 1;
		if (current >= 5) {
			return exit(current);
		}

		return next(current);
	},
);
// result: 5
