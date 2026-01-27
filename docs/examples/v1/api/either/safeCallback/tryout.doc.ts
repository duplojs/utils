import { E } from "@duplojs/utils";

const success = E.safeCallback(() => 42);
// E.CallbackError | E.CallbackSuccess<number>

const failure = E.safeCallback(() => {
	throw new Error("boom");
});

const isFailure = E.isLeft(failure);

const eitherResult = E.safeCallback(
	() => E.left("example", "already"),
);

const isLeft = E.isLeft(eitherResult);
