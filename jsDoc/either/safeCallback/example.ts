import { E } from "@scripts";

const success = E.safeCallback(() => 42);
// E.SafeCallbackSuccess<number> | E.SafeCallbackError

const failure = E.safeCallback(() => {
	throw new Error("boom");
});

const isFailure = E.isLeft(failure);

const eitherResult = E.safeCallback(
	() => E.left("example", "already"),
);

const isLeft = E.isLeft(eitherResult);

const asyncSuccess = E.safeCallback(
	() => Promise.resolve("done"),
);
// Promise<E.SafeCallbackSuccess<string> | E.SafeCallbackError> | E.SafeCallbackError

const asyncFailure = E.safeCallback(
	() => Promise.reject(new Error("boom")),
);
