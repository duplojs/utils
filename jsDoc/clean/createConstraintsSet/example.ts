import { C, E } from "@scripts";

const UsernameConstraints = C.createConstraintsSet(
	C.String,
	[C.StringMin(3), C.StringMax(16)],
);

const result = UsernameConstraints.create("Ada");

if (E.isRight(result)) {
	// result: E.Right<"createConstraintsSet", C.Primitive<"Ada"> & C.GetConstraints<typeof UsernameConstraints>>
}

const value = UsernameConstraints.createOrThrow("Nova");
// value: C.Primitive<"Nova"> & C.GetConstraints<typeof UsernameConstraints>

const primitive = C.String.createOrThrow("Kit");
UsernameConstraints.create(primitive);

const unknownValue: unknown = "Sam";
const maybe = UsernameConstraints.createWithUnknown(unknownValue);
const strictValue = UsernameConstraints.createWithUnknownOrThrow(unknownValue);

UsernameConstraints.is(value); // type guard

const constraint = UsernameConstraints.getConstraint("string-max-16");
constraint.createOrThrow("hello");
