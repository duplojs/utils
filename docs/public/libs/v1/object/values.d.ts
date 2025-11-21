import { type AnyValue } from "../common/types/anyValue";
export declare function values<GenericValue extends AnyValue>(object: Record<string, GenericValue>): GenericValue[];
