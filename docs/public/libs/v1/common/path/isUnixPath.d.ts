import type { IsStringLiteral } from "../types";
type ComputeResult<GenericPath extends string> = IsStringLiteral<GenericPath> extends false ? GenericPath : Exclude<GenericPath, `${string}\\${string}`>;
export declare function isUnixPath<GenericPath extends string>(path: GenericPath): path is ComputeResult<GenericPath>;
export {};
