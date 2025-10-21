export declare function sort<GenericElement extends unknown>(compareFn: (first: GenericElement, second: GenericElement) => number): (array: readonly GenericElement[]) => GenericElement[];
export declare function sort<GenericElement extends unknown>(array: readonly GenericElement[], compareFn: (first: GenericElement, second: GenericElement) => number): GenericElement[];
