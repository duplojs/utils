import { C } from "@scripts";

const speed = C.Number.createOrThrow(30);

C.lessThan(speed, 50); // true

if (C.lessThan(speed, 40)) {
	// speed is less than 40
}
