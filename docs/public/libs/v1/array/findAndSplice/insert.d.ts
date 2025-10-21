interface ArrayFindAndSpliceInsertIndexParams {
    index: number;
}
export declare function findAndSpliceInsert<GenericElement extends unknown>(predicate: (element: GenericElement, params: ArrayFindAndSpliceInsertIndexParams) => boolean, elements: GenericElement[]): (array: readonly GenericElement[]) => GenericElement[] | undefined;
export declare function findAndSpliceInsert<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindAndSpliceInsertIndexParams) => boolean, elements: GenericElement[]): GenericElement[] | undefined;
export {};
