/* eslint-disable arrow-body-style */
import { E } from "@scripts";

const maybePromise = E.future(
	Promise.resolve(1),
);

await maybePromise.then((value) => {
	// type: E.FutureSuccess<number> | E.FutureError
	return value;
});
