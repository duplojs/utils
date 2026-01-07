import { type Not, type IsEqual } from "../../common";
import { type IsGreater } from "./isGreater";
export type IsLess<GenericValue extends number, GenericReference extends number> = IsEqual<GenericValue, GenericReference> extends true ? true : Not<IsGreater<GenericValue, GenericReference>>;
