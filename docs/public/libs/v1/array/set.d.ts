export declare function set<GenericValue extends unknown>(index: number, value: GenericValue): (array: readonly GenericValue[]) => GenericValue[];
export declare function set<GenericValue extends unknown>(array: readonly GenericValue[], index: number, value: GenericValue): GenericValue[];
