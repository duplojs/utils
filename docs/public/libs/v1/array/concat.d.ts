export declare function concat<GenericElement extends unknown>(elements: readonly GenericElement[]): (array: readonly GenericElement[]) => GenericElement[];
export declare function concat<GenericElement extends unknown>(array: readonly GenericElement[], elements: readonly GenericElement[], ...elementsRest: readonly GenericElement[][]): GenericElement[];
