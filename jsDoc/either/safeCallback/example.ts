import { E } from "@scripts";

const success = E.safeCallback(() => 42);

const failure = E.safeCallback(() => {
	throw new Error("boom");
});

const isFailure = E.isLeft(failure);
