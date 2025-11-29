import { type ObjectKey } from "../common";
export declare function entry<GenericKey extends ObjectKey, GenericValue extends unknown>(key: GenericKey, value: GenericValue): readonly [GenericKey, GenericValue];
