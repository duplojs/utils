import type { AtTuple } from "../types";
export declare function at<GenericTuple extends readonly unknown[], GenericIndex extends number>(index: GenericIndex): (array: GenericTuple) => AtTuple<GenericTuple, GenericIndex>;
export declare function at<GenericElement extends unknown>(index: number): (array: readonly GenericElement[]) => GenericElement | undefined;
export declare function at<GenericTuple extends readonly unknown[], GenericIndex extends number>(array: GenericTuple, index: GenericIndex): AtTuple<GenericTuple, GenericIndex>;
export declare function at<GenericElement extends unknown>(array: readonly GenericElement[], index: number): GenericElement | undefined;
