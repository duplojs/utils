interface ArrayFindAndSpliceReplaceIndexParams {
    index: number;
}
export declare function findAndSpliceReplace<GenericElement extends unknown>(predicate: (element: GenericElement, params: ArrayFindAndSpliceReplaceIndexParams) => boolean, elements: GenericElement[]): (array: readonly GenericElement[]) => GenericElement[] | undefined;
export declare function findAndSpliceReplace<GenericElement extends unknown>(array: readonly GenericElement[], predicate: (element: GenericElement, params: ArrayFindAndSpliceReplaceIndexParams) => boolean, elements: GenericElement[]): GenericElement[] | undefined;
export {};
