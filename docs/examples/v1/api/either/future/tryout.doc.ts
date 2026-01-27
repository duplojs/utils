import { E, type ExpectType } from "@duplojs/utils";

const maybePromise = E.future(
	Promise.resolve(1),
);

await maybePromise.then((value) => {
	type check = ExpectType<
		typeof value,
		E.FutureSuccess<number> | E.FutureError,
		"strict"
	>;
	return value;
});

