import { E, type ExpectType } from "@duplojs/utils";

const result = await E.asyncGroup([
	Promise.resolve(E.right("user.loaded", { id: 1 })),
	E.future(Promise.resolve(E.right("rights.loaded", ["read"]))),
]);

type check = ExpectType<
	typeof result,
	E.FutureError | E.Success<[
		{
			readonly id: 1;
		},
		readonly ["read"],
	]>,
	"strict"
>;
