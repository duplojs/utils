import { type ComputedTypeError, type IsEqual } from "../../common";
export type RequireAtLeastOne<GenericObject extends object, GenericKeys extends keyof GenericObject = keyof GenericObject> = IsEqual<Extract<keyof GenericObject, GenericKeys>, never> extends true ? (ComputedTypeError<"requires at least one key."> & ComputedTypeError<`one of keys: ${Extract<GenericKeys, string>}`>) : unknown;
