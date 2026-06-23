import { E } from "@scripts";

const success = await E.asyncSafeCallback(() => 42);
// E.SafeCallbackSuccess<number> | E.SafeCallbackError

const failure = await E.asyncSafeCallback(() => {
	throw new Error("boom");
});

const isFailure = E.isLeft(failure);

const eitherResult = await E.asyncSafeCallback(
	() => E.left("example", "already"),
);

const isLeft = E.isLeft(eitherResult);

const promiseSuccess = await E.asyncSafeCallback(
	Promise.resolve("done"),
);

const promiseFailure = await E.asyncSafeCallback(
	Promise.reject(new Error("boom")),
);
