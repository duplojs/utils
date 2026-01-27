import { C, E } from "@scripts";

const result = C.BigInt.create(10n);

if (E.isRight(result)) {
	// result: E.Right<"createNewType", C.Primitive<10n>>
}

const value = C.BigInt.createOrThrow(99n);
// value: C.Primitive<99n>

C.BigInt.is(value); // type guard
