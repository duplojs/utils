import { C } from "@scripts";

const name = C.String.createOrThrow("Duplo");

const size = C.length(name);
// size: C.Number

const fromRaw = C.length(C.String.createOrThrow("Utils"));
// fromRaw: C.Number

const empty = C.length(C.String.createOrThrow(""));
// empty: C.Number
