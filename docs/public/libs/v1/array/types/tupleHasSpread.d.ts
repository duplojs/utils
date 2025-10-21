import { type AnyTuple, type IsEqual } from "../../common";
export type TupleHasSpread<GenericTuple extends AnyTuple> = IsEqual<GenericTuple["length"], number>;
