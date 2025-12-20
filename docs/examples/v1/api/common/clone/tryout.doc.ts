import { clone, type ExpectType } from "@duplojs/utils";

const original = {
	user: { id: 1 },
	tags: ["a", "b"],
} as const;

const copied = clone(original);

type check = ExpectType<
	typeof copied,
	{
		readonly user: {
			readonly id: 1;
		};
		readonly tags: readonly ["a", "b"];
	},
	"strict"
>;
