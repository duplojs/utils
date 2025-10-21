import { type AnyValue, type ObjectKey } from "../common";
export declare function entry<GenericKey extends ObjectKey, GenericValue extends AnyValue>(key: GenericKey, value: GenericValue): readonly [GenericKey, GenericValue];
