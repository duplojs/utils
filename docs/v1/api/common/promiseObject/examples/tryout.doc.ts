import { type ExpectType, promiseObject } from "@duplojs/utils";

const input = {
	user: Promise.resolve({
		id: 1,
		name: "Alice",
	}),
	count: 3,
};

const result = await promiseObject(input);

type check = ExpectType<
	typeof result,
	{
		user: {
			id: number;
			name: string;
		};
		count: number;
	},
	"strict"
>;
