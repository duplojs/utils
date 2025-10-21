import { type AnyValue } from "../common/types/anyValue";
export declare function values<GenericValue extends AnyValue>(object: {
    [key: string]: GenericValue;
} | ArrayLike<GenericValue>): GenericValue[];
