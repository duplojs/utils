import { E } from "@scripts";

const success = E.safeCallback(() => 42);
// E.EitherCallbackError | E.EitherCallbackSuccess<number>

const failure = E.safeCallback(() => {
	throw new Error("boom");
});

const isFailure = E.isLeft(failure);

const eitherResult = E.safeCallback(
	() => E.left("example", "already"),
);

const isEitherLeft = E.isLeft(eitherResult);
