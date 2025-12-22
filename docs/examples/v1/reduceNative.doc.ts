import { type ExpectType } from "@duplojs/utils";

const array = [12, null, 20, 56, 19];

const result = array.reduce<
	number | null
>(
	(accumulator, element) => {
		// Impossible to stop 🐒
		if (
			accumulator === null
			|| element === null
		) {
			return null; // Let's rehearse!
		}

		return accumulator + element;
	},
	0,
);

type check = ExpectType<
	typeof result,
	number | null,
	"strict"
>;
