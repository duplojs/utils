import { C } from "@scripts";

const age = C.Number.createOrThrow(20);

C.greaterThan(age, 18); // true

if (C.greaterThan(age, 18)) {
	// age is greater than 18
}
