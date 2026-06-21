import { E, type ExpectType } from "@duplojs/utils";

const result = E.group([
	E.right("user.loaded", { id: 1 }),
	E.right("rights.loaded", ["read", "write"]),
]);

type check = ExpectType<
	typeof result,
	E.Success<[
		{
			readonly id: 1;
		},
		readonly ["read", "write"],
	]>,
	"strict"
>;
