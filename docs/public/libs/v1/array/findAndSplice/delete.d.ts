interface ArrayFindAndSpliceDeleteIndexParams {
    index: number;
}
export declare function findAndSpliceDelete<GenericElement extends unknown>(predicate: (element: GenericElement, params: ArrayFindAndSpliceDeleteIndexParams) => boolean, deleteCount: number): (array: readonly GenericElement[]) => GenericElement[] | undefined;
export declare function findAndSpliceDelete<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindAndSpliceDeleteIndexParams) => boolean, deleteCount: number): GenericElement[] | undefined;
export {};
