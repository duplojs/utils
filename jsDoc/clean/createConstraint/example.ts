import { C, DP, E } from "@scripts";

const Between1And10 = C.createConstraint(
	"between-1-10",
	C.Number,
	[
		DP.checkerNumberMin(1),
		DP.checkerNumberMax(10),
	],
);

const result = Between1And10.create(5);

if (E.isRight(result)) {
	// result : E.Right<"createConstrainedType", C.ConstrainedType<"between-1-10", 5>>
}

const value = Between1And10.createOrThrow(7);
// value: C.ConstrainedType<"between-1-10", 7>

const primitive = C.Number.createOrThrow(3);
Between1And10.create(primitive);

Between1And10.is(value); // type guard

const unknownValue: unknown = 9;
const maybe = Between1And10.createWithUnknown(unknownValue);

const strictValue = Between1And10.createWithUnknownOrThrow(unknownValue);
